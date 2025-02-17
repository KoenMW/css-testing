<script lang="ts">
  import { goTo } from "../../stores/router";

  export let route: string;
  export let icon: "home" = "home";
</script>

<button class="nav-button" on:click={() => goTo(route)}>
  <img src="/css-testing/icons/{icon}.svg" alt={icon} />
</button>

<style>
  .nav-button {
    border-radius: 100%;
    aspect-ratio: 1 /1;
  }
</style>
