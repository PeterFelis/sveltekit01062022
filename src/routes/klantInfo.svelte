<script context="module">
  import { supabase } from '$lib/supabaseClient';
  import { onDestroy } from 'svelte';

  export async function load() {
    const user = supabase.auth.user();
    // gebruiker info laden
    let gebruiker = {};
    let klant = {};

    if (user) {
      let { data } = await supabase.from('personen').select('*').eq('autID', user.id);

      if (data?.length == 0) {
        console.log('lengte 0');
        gebruiker.autID = user.id;
      } else gebruiker = data[0];

      // tot hier werkt het

      // klant laden'

      console.log('r23');
      let { dataa } = await supabase.from('klanten').select('*').eq('autID', user.id);
      console.log('r24', dataa);

      if (dataa == undefined) {
        klant.autID = user.id;
        console.log('r28');
        console.log('error bij laden klanten', dataa);
      } else klant = dataa[0];
    }
    console.log('klant', klant);
    console.log('gebruiker', gebruiker);

    return { props: { gebruiker: gebruiker, klant: klant } };
  }
</script>

<script>
  export let gebruiker = {};
  export let klant = {};
  const user = supabase.auth.user();

  onDestroy(() => updaten());

  let geslachten = ['Vrouw', 'Man', 'Anders', 'Zeg ik niet'];

  async function updaten() {
    //let infoGebruiker = {
    //  voornaam: gebruiker.voornaam,
    //  achternaam: gebruiker.achternaam,
    //  geslacht: gebruiker.geslacht,
    //  geboortedatum: gebruiker.geboortedatum,
    //};
    console.log('hiero', gebruiker);
    console.log('user id', user.id);
    const reply = await supabase.from('personen').insert(gebruiker).eq('autID', user.id);
    console.log('gebruiker', reply);

    //let infoKlant ={
    //  klantnaam: klant.klantnaam
    // }
  }
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
        bind:value={gebruiker.voornaam}
      />
    </label>

    <label>
      Achternaam
      <input
        class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="input"
        bind:value={gebruiker.achternaam}
      />
    </label>

    <label>
      Geslacht

      <select bind:value={gebruiker.geslacht} class="float-right">
        {#each geslachten as gesl}
          <option value={gesl}>
            {gesl}
          </option>
        {/each}
      </select>
    </label>

    <label>
      Geboortedatum
      <input class="float-right" type="date" bind:value={gebruiker.geboortedatum} />
    </label>
  </div>
</div>

<div>Klant</div>
<label>
  Naam
  <input
    class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="input"
    bind:value={klant.naam}
  />
</label>

<label>
  Straat
  <input
    class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="input"
    bind:value={klant.straat}
  />
</label>

<label>
  Nummer
  <input
    class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="input"
    bind:value={klant.nummver}
  />
</label>

<label>
  Postcode
  <input
    class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="input"
    bind:value={klant.postcode}
  />
</label>

<label>
  Plaats
  <input
    class="float-right shadow appearance-none border rounded py-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="input"
    bind:value={klant.plaats}
  />
</label>
