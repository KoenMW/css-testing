<button on:click class="button">
  <slot></slot>
</button>

<style>
  .button {
    border: none;
    transition: all 0.1s ease-in-out;
  }

  .button:hover {
    scale: 1.1;
  }

  .button:active {
    scale: 0.9;
  }
</style>
