<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import html2canvas from "html2canvas";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();

  let content: HTMLElement | undefined = $state();
  let output: HTMLCanvasElement | undefined = $state();
  let ctx: CanvasRenderingContext2D | null = $state(null);
  let width: number = $state(0);
  let height: number = $state(0);
  const scale = 12;

  const asciiChars = [
    "@",
    "#",
    "S",
    "%",
    "?",
    "*",
    "+",
    ";",
    ":",
    ",",
    ".",
    " ",
  ];

  $effect(() => {
    if (!ctx && output) {
      ctx = output.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.font = `${scale}px monospace`;
        ctx.textBaseline = "top";
      }
    }
  });

  const pixelToChar = (p: number) => {
    const index = Math.floor((p / 255) * (asciiChars.length - 1));
    return asciiChars[index];
  };

  const pixelStep = Math.max(1, Math.floor(scale / 3));

  const imageToASCII = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log(`ctx not in canvas`);
      return;
    }
    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;

    let ascii: string[] = [];
    for (let y = 0; y < height; y += pixelStep) {
      let line = "";
      for (let x = 0; x < width; x += pixelStep) {
        const i = (y * width + x) * 4;
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        line += pixelToChar(gray);
      }
      ascii.push(line);
    }

    return ascii;
  };

  const lineHeight = scale * 0.3;

  const drawASCII = () => {
    content &&
      html2canvas(content).then(async (canvas) => {
        const asciiArt = imageToASCII(canvas);
        if (ctx && output && asciiArt) {
          ctx.clearRect(0, 0, output.width, output.height);
          for (let i = 0; i < asciiArt.length; i++) {
            ctx.fillText(asciiArt[i], 0, lineHeight * (i + 1));
          }
        }

        requestAnimationFrame(drawASCII);
      });
  };

  onMount(() => {
    drawASCII();
  });
</script>

<div class="wrapper">
  <div
    class="target"
    bind:this={content}
    bind:clientWidth={width}
    bind:clientHeight={height}
  >
    {@render children()}
  </div>

  <canvas
    id="ascii-output"
    bind:this={output}
    style="height: {height}px; width: {width}px;"
  ></canvas>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .target {
    width: fit-content;
    height: fit-content;
  }

  #ascii-output {
    position: absolute;
    top: 0;
    user-select: none;
    pointer-events: none;

    letter-spacing: 1px;
    background: var(--c-900);
  }
</style>
