<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import html2canvas from "html2canvas";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();

  let content: HTMLElement | undefined = $state();
  let output: HTMLElement | undefined = $state();
  let width: number = $state(0);
  let height: number = $state(0);

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

  const pixelToChar = (p: number) => {
    const index = Math.floor((p / 255) * (asciiChars.length - 1));
    return asciiChars[index];
  };

  const imageToASCII = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log(`ctx not in canvas`);
      return;
    }
    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;

    let ascii = "";
    for (let y = 0; y < height; y += 4) {
      for (let x = 0; x < width; x += 4) {
        const i = (y * width + x) * 4;
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        ascii += pixelToChar(gray);
      }
      ascii += "\n";
    }

    return ascii;
  };

  const drawASCII = () => {
    content &&
      html2canvas(content).then(async (canvas) => {
        const asciiArt = imageToASCII(canvas);
        if (output && asciiArt && asciiArt != output.innerHTML) {
          output.innerHTML = asciiArt;
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

  <div
    id="ascii-output"
    bind:this={output}
    style="height: {height}px; width: {width}px;"
  ></div>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .target {
    /* z-index: -1; */
    width: fit-content;
    height: fit-content;
  }

  #ascii-output {
    position: absolute;
    top: 0;
    user-select: none;
    pointer-events: none;

    font-family: monospace;
    white-space: pre;
    font-size: 3px;
    line-height: 2.7px; /* adjust for character height */
    letter-spacing: 1px;
    color: white;
    background: black;
    overflow: hidden;
  }
</style>
