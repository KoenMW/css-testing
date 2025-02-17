<script>
  import Glitch from "../components/common/Glitch.svelte";
  import Card from "../components/navigation/Card.svelte";
</script>

<h1>
  I use this site to test out some neat <Glitch>css</Glitch> things feel free to
  look around
</h1>
<section class="cards">
  <Card route="hover-font-bubble">hover-font-bubble</Card>
</section>

<style>
  h1 {
    text-align: center;
    font-size: var(--fs-heading);
  }
</style>
