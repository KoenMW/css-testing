<script>
  import Button from "./components/common/Button.svelte";

  const click = () => {
    console.log("clicked");
  };
</script>

<body> hoi </body>

<Button on:click={click} />
