<script>
  import Glitch from "../components/common/Glitch.svelte";
  import Card from "../components/navigation/Card.svelte";
</script>

<header>
  I use this site to test out some neat <Glitch>css</Glitch> things feel free to
  look around
</header>
<section class="cards">
  <Card route="hover-font-bubble">hover-font-bubble</Card>
</section>

<style>
  header {
    text-align: center;
    font-size: var(--fs-heading);
  }
</style>
