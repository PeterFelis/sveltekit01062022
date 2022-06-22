<script>
  import Header from '$lib/header/Header.svelte';
  import Fetum from '$lib/header/Fetum.svelte';

  import { wegschrijven } from './infoBijwerken';
  import { ophalen } from './infoBijwerken';

  let info = {};
  let bericht = '';

  const schrijven = () => {
    if (!info) {
      bericht = 'wel iets invullen';
      return;
    }

    wegschrijven(info);
  };

  const halen = async () => console.log('dit is uit svelte', await ophalen());
</script>

<Header />

<Fetum />
<div class="container bg-achtergrond px-20 mx-auto">

  <h1 class="text-xl">infobijwerken</h1>
</div>

<label for="naam">
  <input type="text" bind:value={info.naam} placeholder="naam" />
</label>

<label for="leeftijd">
  <input type="text" bind:value={info.leeftijd} placeholder="leeftijd" />
</label>

{#if bericht}
  <p>{bericht}</p>
{/if}

<button on:click={schrijven}>verstuur (op hoop van zegen) </button>
<button on:click={halen}>halen (nog meer hoop) </button>
