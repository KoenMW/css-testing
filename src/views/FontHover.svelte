<script lang="ts">
  import Tracker from "../components/font-hover/Tracker.svelte";

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc magna, lacinia nec erat in, hendrerit bibendum ex. Aenean nisl erat, elementum id ante a, suscipit suscipit nisl. Sed et fringilla orci. Praesent lacinia rhoncus quam, tempus egestas nulla volutpat sed. Curabitur luctus tempus urna, condimentum aliquet lorem. In vehicula et justo venenatis pulvinar. Mauris nec tortor a odio ultricies iaculis. Maecenas vel lacus nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio lacus, pharetra in turpis eget, sollicitudin laoreet est. Integer ultricies sed turpis nec egestas.

Mauris luctus sed lectus at malesuada. Donec ac sollicitudin arcu. In mollis ornare aliquet. In molestie sem vitae consequat consequat. Donec imperdiet, nulla sit amet rhoncus elementum, eros sapien commodo elit, id sollicitudin sapien odio id tellus. Aliquam id luctus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo lorem neque, quis venenatis sapien ultrices nec. Aliquam dapibus, odio in vulputate mollis, mauris urna ultrices est, vitae gravida tellus nulla ut sapien. Duis bibendum enim at felis tristique, ac efficitur erat porttitor. Phasellus aliquet neque felis, id sollicitudin tortor facilisis a. Nam in consequat mi, quis tempor lorem. Mauris sed aliquam felis.

Integer tempus lectus ante, eu consequat leo hendrerit in. Sed rhoncus interdum sapien non aliquet. Quisque quis pharetra ligula. Suspendisse accumsan lectus vel volutpat luctus. Integer mollis eleifend nisi, at volutpat ipsum iaculis in. Proin congue est sit amet feugiat posuere. Fusce nibh velit, convallis nec maximus sit amet, condimentum ut tortor. Suspendisse condimentum ex nec varius malesuada. Nam dictum augue vel ligula mollis, nec lacinia tellus fermentum. Phasellus eu tempor ex. Vivamus vitae venenatis orci. Nunc tortor metus, pellentesque ac porttitor a, accumsan varius risus. Integer venenatis enim non erat feugiat, vel scelerisque eros interdum. Praesent arcu nisl, consectetur et elit at, tristique egestas risus.

Maecenas a tellus et ipsum consectetur vehicula nec eu est. Suspendisse potenti. Nam pulvinar turpis et sodales porttitor. Donec et nisi dui. Phasellus placerat mauris nec tempus rhoncus. Proin convallis mi sit amet mauris scelerisque rhoncus. Ut neque augue, facilisis non nisi et, consequat scelerisque lorem. Etiam eu lacus nunc. Cras rutrum, tortor at rhoncus varius, justo tellus viverra lacus, quis fringilla mauris felis in nulla. Sed venenatis lectus eu purus egestas, eget sollicitudin augue finibus.

Cras vel faucibus ligula, pharetra condimentum nunc. Sed nec pharetra sem. Nam a sollicitudin enim. Nullam efficitur diam id lectus vehicula sollicitudin. Etiam at vestibulum justo, quis feugiat tellus. Cras facilisis risus eu diam auctor semper. Suspendisse vestibulum augue nec massa finibus, non mollis felis suscipit. Vestibulum imperdiet sem id laoreet elementum.

Sed sit amet sem orci. Nullam lobortis diam in eleifend lobortis. Ut interdum ipsum nisi, fringilla tempor lorem finibus in. Vestibulum aliquet dolor placerat fringilla varius. Duis eu facilisis elit. Mauris eros turpis, tincidunt sed laoreet sit amet, ultricies in nunc. Quisque iaculis massa eget rutrum pharetra.

Sed viverra odio id pretium varius. Nunc cursus consequat dignissim. Morbi porta risus efficitur ipsum gravida, ac fermentum tellus commodo. Cras et libero varius, iaculis augue non, dapibus metus. Nullam ac mi accumsan, vestibulum sem quis, laoreet diam. Maecenas quis malesuada elit. Quisque lobortis pharetra purus.

Ut rhoncus dignissim mauris non ullamcorper. Integer lacus lectus, pellentesque eu justo eget, interdum commodo tellus. In efficitur faucibus ornare. Maecenas libero mi, tempor eget tellus et, semper blandit eros. Curabitur vehicula dolor a rutrum gravida. Sed vel turpis porta, pellentesque sem accumsan, tincidunt est. Sed condimentum dapibus fermentum. Sed sed facilisis ligula, sit amet facilisis erat. Etiam iaculis mollis dolor quis scelerisque. Morbi sed egestas velit.

Donec volutpat ex massa, vitae interdum turpis aliquam at. Maecenas feugiat feugiat convallis. Vivamus quis nunc eu justo consectetur hendrerit sed vitae dolor. Ut urna magna, placerat sit amet dolor id, hendrerit pellentesque lacus. Mauris convallis, orci iaculis pharetra feugiat, ligula elit fermentum ante, nec tempus mi arcu pellentesque sapien. Suspendisse potenti. Curabitur vestibulum diam sit amet erat varius hendrerit. Nulla scelerisque, nisl et molestie mattis, mauris risus bibendum tortor, nec dignissim mauris diam eu eros. Nam sit amet fermentum elit. Sed laoreet odio iaculis efficitur malesuada.

Proin tellus erat, convallis nec magna commodo, ornare tempus enim. Cras interdum in quam consectetur bibendum. Nam blandit vulputate maximus. Nunc dictum est id sem dapibus, sit amet ornare nibh fringilla. Phasellus gravida non metus sit amet luctus. Donec congue nec sem vitae faucibus. Proin id velit vitae lorem dignissim viverra. Proin vitae lacus urna. Nunc pulvinar eu ex sit amet vestibulum. Praesent commodo, arcu ut tristique sodales, mauris tortor convallis tellus, in convallis massa libero dictum libero. Aenean sed ultricies lorem. Donec elit purus, imperdiet rutrum urna at, pretium tristique quam. Fusce ullamcorper sodales purus at laoreet. Integer malesuada mattis elit vitae molestie. Ut leo felis, rutrum sed maximus eu, vehicula vel orci.`;

  let words: string[] = [];
  let size = 100;
  $: radius = size / 2;

  addEventListener("mousemove", (e) => {
    const wordElements = document.querySelectorAll<HTMLSpanElement>(".word");
    const { x, y } = e;
    const newWords = [];
    for (const word of wordElements) {
      let rect = word.getBoundingClientRect();
      let wordCenterX = rect.left + rect.width / 2;
      let wordCenterY = rect.top + rect.height / 2;

      let distance = Math.sqrt((wordCenterX - x) ** 2 + (wordCenterY - y) ** 2);

      if (distance < radius) {
        newWords.push(word.innerText);
      }
    }
    words = newWords;
  });
</script>

<Tracker {words} {size} />

<section class="interections">
  hover size: <input
    class="size"
    type="range"
    min="0"
    max="200"
    step="1"
    defaultValue="100"
    bind:value={size}
  />
</section>

<section class="word-container">
  {#each content as word}
    <span class="word">
      {word}
    </span>
  {/each}
</section>

<style>
  .interections {
    z-index: 2;
    width: 100%;
    background: var(--c-900);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3rem;
  }

  .size {
    -webkit-appearance: none;
    appearance: none;
    background: var(--c-100);
    height: 0.2rem;
    cursor: pointer;
  }
</style>
