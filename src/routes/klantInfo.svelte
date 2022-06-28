<script>
  import { ophalen } from './klantinfo.js';

  console.log(ophalen());

  let voornaam;
  let achternaam;
  let geslacht;
  let geslachten = ['Vrouw', 'Man', 'Anders', 'Zeg ik niet'];
  let geboortedatum;

  let klantnaam;
  let klantstraat;
  let klantstraatnummer;
  let klantstaattoevoeging;
  let klantpostcode;
  let klantplaats;
</script>

<svelte:head>
  <title>uw info - hou dit up to date | Fetum</title>
</svelte:head>

<div class="pt-20 container mx-auto">
  <div class="w-2/6 flex flex-col border-2 p-8 mt-4 text-lg">
    <label>
      Voornaam
      <input
        class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="input"
        bind:value={voornaam}
      />
    </label>

    <label>
      Achternaam
      <input
        class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="input"
        bind:value={voornaam}
      />
    </label>

    <label>
      Geslacht

      <select bind:value={geslacht} class="float-right">
        {#each geslachten as gesl}
          <option value={gesl}>
            {gesl}
          </option>
        {/each}
      </select>
    </label>
    <label>
      Geboortedatum
      <input class="float-right" type="date" bind:value={geboortedatum} />
    </label>
  </div>
</div>
