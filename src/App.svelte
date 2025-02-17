<script lang="ts">
  import NavButton from "./components/navigation/NavButton.svelte";
  import { pages, path, setPath } from "./stores/router";
  import NotFound from "./views/NotFound.svelte";

  $: route = pages.find((route) => {
    if (
      !(
        route.path === $path ||
        route.path === $path.split("/").filter(Boolean)[0]
      )
    )
      return false;
    document.title = route.name;
    return true;
  }) || {
    component: NotFound,
  };

  window.onpopstate = () => {
    setPath();
  };
</script>

<main>
  {#if $path !== ""}
    <header>
      <NavButton route="" />
    </header>
  {/if}
  <svelte:component this={route.component} />
</main>

<style>
  main {
    padding: var(--p-large);
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100dvw;
    position: relative;
    align-items: center;
    overflow-x: hidden;
  }

  header {
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: var(--c-900);
    width: 100%;
  }
</style>
