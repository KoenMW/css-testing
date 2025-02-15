<script lang="ts">
  import { onMount } from "svelte";
  export let no_hover = false;
  let glitch: HTMLSpanElement;
  let text = "";

  onMount(() => {
    text = glitch.innerText;
  });
</script>

<span
  class="glitch"
  data-text={text}
  bind:this={glitch}
  class:no_hover
  style="--glitch-distance: 3%"
>
  <slot></slot>
</span>

<style>
  .glitch {
    position: relative;
    display: inline-flex;
    height: fit-content;
  }

  .glitch:hover::after,
  .glitch:hover::before {
    opacity: 1;
  }

  .glitch::after,
  .glitch::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
  }

  .no_hover::after,
  .no_hover::before {
    opacity: 1;
  }

  .glitch::after {
    color: #f13737e6;
    animation: glitch-anim 0.3s infinite alternate;
  }

  .glitch::before {
    color: #10c910e6;
    animation: glitch-anim 0.3s infinite alternate-reverse;
  }

  @keyframes glitch-anim {
    0% {
      top: calc(-1 * var(--glitch-distance));
      left: calc(-1 * var(--glitch-distance));
    }
    12.5% {
      top: calc(-1 * var(--glitch-distance));
      left: 0%;
    }
    25% {
      top: calc(-1 * var(--glitch-distance));
      left: var(--glitch-distance);
    }
    37.5% {
      top: 0%;
      left: var(--glitch-distance);
    }
    50% {
      top: var(--glitch-distance);
      left: var(--glitch-distance);
    }
    62.5% {
      top: var(--glitch-distance);
      left: 0%;
    }
    75% {
      top: var(--glitch-distance);
      left: calc(-1 * var(--glitch-distance));
    }
    87.5% {
      top: 0%;
      left: calc(-1 * var(--glitch-distance));
    }
    100% {
      top: calc(-1 * var(--glitch-distance));
      left: calc(-1 * var(--glitch-distance));
    }
  }
</style>
