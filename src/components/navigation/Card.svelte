<script lang="ts">
  import { onMount } from "svelte";

  let mouseX = 0;
  let mouseY = 0;
  let button: HTMLButtonElement;

  const mouseMove = (e: MouseEvent) => {
    let { clientX, clientY } = e;
    let { left, top } = button.getBoundingClientRect();
    mouseX = clientX - left;
    mouseY = clientY - top;
  };

  onMount(() => {
    button.addEventListener("mouseenter", () =>
      addEventListener("mousemove", mouseMove)
    );

    button.addEventListener("mouseleave", () =>
      removeEventListener("mousemove", mouseMove)
    );
    button.addEventListener("mouseout", () =>
      removeEventListener("mousemove", mouseMove)
    );
  });
</script>

<button
  class="nav-card"
  style="--mouseX: {mouseX}px; --mouseY: {mouseY}px"
  bind:this={button}
>
  <slot></slot>
</button>

<style>
  .nav-card {
    position: relative;
    overflow: hidden;
    font-size: var(--fs-body);
  }

  .nav-card::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: radial-gradient(
      circle at var(--mouseX) var(--mouseY),
      #ffffff83,
      #ffffff00 100%
    );
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .nav-card:hover::before {
    opacity: 1;
  }
</style>
