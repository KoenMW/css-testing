<script lang="ts">
  import { get } from "svelte/store";
  import { pages, path, setPath } from "./stores/router";
  import NotFound from "./views/NotFound.svelte";

  $: route = pages.find((page) => {
    console.log(`path: ${$path}`);
    return (
      page.path === $path || page.path === $path.split("/").filter(Boolean)[0]
    );
  }) || {
    component: NotFound,
  };

  window.onpopstate = () => {
    setPath();
  };
</script>

<main>
  <svelte:component this={route.component} />
</main>

<style>
  main {
    padding: var(--p-large);
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100dvw;
    display: flex;
    align-items: center;
  }
</style>
