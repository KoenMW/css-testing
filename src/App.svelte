<script>
  import Glitch from "./components/common/Glitch.svelte";
  import Card from "./components/navigation/Card.svelte";
</script>

<main>
  <header>
    I use this site to test out some neat <Glitch>css</Glitch> things feel free to
    look around
  </header>
  <section class="cards">
    <Card>hover-font-bubble</Card>
  </section>
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

  header {
    text-align: center;
    font-size: var(--fs-heading);
  }
</style>
