<script context="module">
  import { supabase } from '$lib/supabaseClient';

  export async function load() {
    const cats = await supabase.rpc('categorien');
    console.log(cats);
    return {
      props: { cats }
    };
  }
</script>

<script>
  export /**
   * @type {any}
   */
  let cats;
  let promistypes;
  let promisproductenOphalen;

  import Label from '$lib/Label.svelte';

  import { producten } from './producten';

  $: tellerfout = 0;
  $: tellergoed = 0;

  // dit is zijn test functies, samen met producten.js om alle producten in één keer in te voeren
  const invoegen = async (item) => {
    // maken van de Json met prijzen
    let prijzen = [{ prijs: item.prijs, aantal: item.bestelhoeveelheid }];
    if (item.prijs2) prijzen.push({ prijs: item.prijs2, aantal: item.bestelhoeveelheid2 });
    if (item.prijs3) prijzen.push({ prijs: item.prijs3, aantal: item.bestelhoeveelheid3 });
    const { data, error } = await supabase.from('producten').insert({
      model: item.product,
      omschrijving: item.omschrijving,
      categorie: item.categorie,
      type: item.type,
      prijzen: prijzen
    });
    if (error) {
      tellerfout++;
      return;
    }
    tellergoed++;
  };

  const invoerenAlles = () => {
    tellergoed = 0;
    tellerfout = 0;
    producten.forEach((item) => {
      invoegen(item);
    });
  };

  //ophalen van de categorien -> promis
  //const ophalenProductgroepen = async () => {
  //  const { data } = await supabase.rpc('categorien');
  //  return data;
  //};

  // promis ophalen van de types per categorie
  const ophalenTypes = async (categorie) => {
    const overzicht = await supabase.rpc('Types', { cat: categorie });
    console.log(overzicht.data);
    return overzicht.data;
  };

  // promis ophalen van de producten per catagorie, met optioneel type, anders alles tonen
  const productenOphalen = async (categorie, type) => {
    const overzicht = await supabase.rpc('productenOphalen', { cat: categorie });
    console.log(overzicht);
    return overzicht.data;
  };
</script>

<div class="grid grid-cols-3">
  <div class="p-1 bg-yellow-200">
    <input
      type="button"
      value="alle producten invoeren"
      on:click={invoerenAlles}
      class="p-1 bg-red-500 text-white rounded-sm"
    />
    <Label text="goed ingevoerd" waarde={tellergoed} />
    <Label text="fout ingevoerd" waarde={tellerfout} />
  </div>
</div>

<div class="grid grid-cols-3">
  <!-- overzicht productgroepen-->
  <div>
    <ul>
      {#each cats.body as cat}
        <li
          on:click={() => {
            promistypes = ophalenTypes(cat.categorie);
            promisproductenOphalen = productenOphalen(cat.categorie);
          }}
        >
          {cat.categorie}
        </li>
      {/each}
    </ul>
  </div>

  <!-- overzicht categorieen per productgroep-->
  <div>
    {#if promistypes}
      {#await promistypes then data}
        <ul>
          {#each data as type}
            <li>{type.type}</li>
          {/each}
        </ul>
      {/await}
    {/if}
  </div>

  <!-- overzicht producten-->
  <div>
    {#if promisproductenOphalen}
      {#await promisproductenOphalen then data}
        <ul>
          {#each data as type}
            <li>{type.model} - {type.omschrijving}</li>
          {/each}
        </ul>
      {/await}
    {/if}
  </div>
</div>
