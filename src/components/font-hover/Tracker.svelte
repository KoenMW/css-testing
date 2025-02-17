<script lang="ts">
  import { onMount } from "svelte";

  export let words: string[] = [];
  export let size: number;

  let tracker: HTMLDivElement;

  let left = 0;
  let top = 0;

  let duration = 5;

  onMount(() => {
    const parent = tracker.parentElement;
    if (!parent) {
      console.error("couldn't find parent element");
      return;
    }
    addEventListener("mousemove", (e) => {
      if (!tracker) return;
      const { clientX, clientY } = e;
      const { scrollLeft, scrollTop } = parent;

      left = clientX - size / 2 + scrollLeft;
      top = clientY - size / 2 + scrollTop;
    });
  });
</script>

<div
  bind:this={tracker}
  class="tracker"
  style="top: {top}px; left: {left}px; width: {size}px"
>
  {#each words as word}
    <span
      class="tracked-word"
      style="--delay: {Math.random() *
        1000 *
        duration}ms; --duration: {duration}s"
    >
      {word}
    </span>
  {/each}
</div>

<style>
  .tracker {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 100vw;
    border: 0.1rem solid var(--c-100);
    overflow: hidden;
    text-align: center;
    background: var(--c-900);
  }

  .tracked-word {
    margin-right: 1ch;
    animation: font-switch var(--duration) infinite;
    color: red;
    font-size: var(--p-medium);
    animation-delay: var(--delay);
  }

  .tracker,
  .tracked-word {
    pointer-events: none;
  }

  @keyframes font-switch {
    0% {
      font-family: initial;
    }
    10% {
      font-family: Arial, sans-serif;
    }
    20% {
      font-family: "Times New Roman", Times, serif;
    }
    30% {
      font-family: "Comic Sans MS", cursive, sans-serif;
    }
    40% {
      font-family: "Verdana", Geneva, sans-serif;
    }
    50% {
      font-family: Wingdings;
    }
    60% {
      font-family: "Georgia", serif;
    }
    70% {
      font-family: "Impact", Charcoal, sans-serif;
    }
    80% {
      font-family: "Trebuchet MS", Helvetica, sans-serif;
    }
    90% {
      font-family: "Lucida Console", Monaco, monospace;
    }
    100% {
      font-family: "Courier New", Courier, monospace;
    }
  }
</style>
