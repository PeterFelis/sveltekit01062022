<script context="module">
  import { supabase } from '$lib/supabaseClient';
  import ProductKaart from '$lib/ProductKaart.svelte';
  import { onMount } from 'svelte';

  //ophalen van de categorien uit de database, dit gebeurd op de server is dus klaar als de pagina geladen is
  export async function load() {
    const cats = await supabase.rpc('categorien');
    return {
      props: { cats }
    };
  }
</script>

<script>
  onMount(() => (promisproductenOphalen = productenOphalen('hoofdtelefoons')));
  // gebruikte promises
  let promisproductenOphalen;

  // lijstjes op de pagina
  export let cats; // export vanuit de module

  //lijstje op de pagian
  $: typeLijst = [];

  // de tijdelijke lijst om aanpassingen te kunnen uitvoeren (drag and drop en zo)
  let werklijst = [];
  // dit is het totaaloverzicht van de alle producten, wordt geladen als er een groep wordt geklikt
  let productenLijst = [];
  // product wat getoont en aangepast wordt
  let editproduct = '';

  let soort = ''; // dit is de zoekwaarde van de soort. wordt gezet door te klikken in de lijst

  // promis ophalen van de producten per catagorie, met optioneel type, anders alles tonen
  const productenOphalen = async (categorie) => {
    const { error, data } = await supabase.rpc('productenOphalen', { cat: categorie });
    const producten = data;
    // typenlijst maken
    const typeLijstset = new Set();
    producten?.forEach((item) => {
      typeLijstset.add(item.type);
    });
    typeLijst = [...typeLijstset];

    //productenlijst maken;
    productenLijst.length = 0;
    soort = '';
    producten?.forEach((item) => {
      productenLijst.push({
        type: item.type,
        model: item.model,
        prijzen: item.prijzen,
        omschrijving: item.omschrijving,
        volgnummer: item.volgnummer,
        id: item.id
      });
    });
    // producten sorteren op volgorde
    productenLijst.sort((a, b) => a.volgnummer - b.volgnummer);
    werklijst = productenLijst;
  };

  // updateen weergave volgorde na drag and drop
  const updatenVolgorde = async (id, volgnummer) => {
    const { error } = await supabase
      .from('producten')
      .update({ volgnummer: volgnummer })
      .match({ id: id });
  };

  function werklijstmaken(type) {
    if (type == 'alles') {
      werklijst = productenLijst;
      return;
    }
    werklijst = productenLijst.filter((item) => item.type == type);
  }

  function drag(e) {
    const scherm = document.querySelectorAll('.tonenproducten');
    for (let teller = 0; teller < scherm.length; teller++)
      werklijst[teller].volgnummer = scherm[teller].offsetTop;
  }

  function dragend(e) {
    let pos = e.clientY;
    let id = e.target.getAttribute('data-id');
    let aanpassen = werklijst.findIndex((item) => item.id == id);
    werklijst[aanpassen].volgnummer = pos;
    werklijst.sort((a, b) => a.volgnummer - b.volgnummer);
    for (let teller = 0; teller < werklijst.length; teller++)
      werklijst[teller].volgnummer = teller + 1;

    werklijst.forEach((item) => {
      let zoekid = item.id;
      let aanpassen = productenLijst.findIndex((item) => item.id == zoekid);
      productenLijst[aanpassen].volgnummer = item.volgnummer;

      updatenVolgorde(item.id, item.volgnummer);
      productenLijst.sort((a, b) => a.volgnummer - b.volgnummer);
    });
  }
</script>

<div class="grid grid-cols-6">
  <!-- overzicht productgroepen-->
  <div>
    <h2>Groepen</h2>
    <ul>
      {#each cats.body as cat}
        <li
          on:click={() => {
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
    <h2 on:click={() => werklijstmaken('alles')}>alles</h2>
    {#if typeLijst}
      <ul>
        {#each typeLijst as type}
          <li on:click={() => werklijstmaken(type)}>{type}</li>
        {/each}
      </ul>
    {/if}
  </div>

  <!-- overzicht producten-->
  <div>
    <h2>Producten</h2>
    {#if productenLijst}
      <ul>
        {#each werklijst as product}
          <li
            draggable="true"
            data-id={product.id}
            on:dragstart={(e) => drag(e)}
            on:dragend={(e) => dragend(e)}
            on:click={() => {
              editproduct = productenLijst.find((item) => product.id == item.id);
            }}
            class="tonenproducten"
          >
            {product.model}
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="col-span-3">
    {#if editproduct}
      <ProductKaart product={editproduct} />
    {/if}
  </div>
</div>
