<script>
  import { afterUpdate, onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { createEventDispatcher } from 'svelte';
import { loop_guard } from 'svelte/internal';
  const dispatch = createEventDispatcher();

  export let product;
  let files = [];
  //$: file = files[0];     

  const calcprijzen = async () => {
    if (product.prijzen) {
      let prijzen = [];
      product.prijzen.forEach((item) =>
        prijzen.push({
          prijs: parseInt(item.prijs).toFixed(2),
          aantal: item.aantal,
          prijsperstuk: (parseInt(item.prijs) / parseInt(item.aantal)).toFixed(2)
        })
      );
      prijzen = prijzen;
      if (product.prijzen) product.prijzen = prijzen;
      console.log(product.prijzen);
    }
  };

  const updaten = (pid, pKey, pValue) => {
    dispatch('message', { text: 'updaten', id: pid, key: pKey, value: pValue });
  };
  afterUpdate(() => calcprijzen());

  const uploadenfotos = async (fotos) =>{
    console.log(files)
    const {data,error} = await supabase.storage
    .from('productfotos')
    .upload('test2',files[0])

    console.log(data);
    console.log(error);
  }


</script>

<div
  class="bg-white p-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div>
    Model
    <span
      contenteditable="true"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      on:blur={updaten(product.id, 'model', product.model)}
      bind:innerHTML={product.model}
    />
  </div>

  <div>
    Categorie:
    <span
      contenteditable="true"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      on:blur={updaten(product.id, 'categorie', product.categorie)}
      bind:innerHTML={product.categorie}
    />
  </div>

  <div>
    Type:
    <span
      contenteditable="true"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      on:blur={updaten(product.id, 'type', product.type)}
      bind:innerHTML={product.type}
    />
  </div>

  <div>
    Omschrijving:
    <div
      contenteditable="true"
      class="border mb-3 font-normal text-gray-700 dark:text-gray-400"
      on:blur={updaten(product.id, 'omschrijving', product.omschrijving)}
      bind:innerHTML={product.omschrijving}
    />
  </div>

  {#if product.prijzen}
    <h2>prijzen</h2>
    <ul>
      {#each product.prijzen as prijs}
        <li>
          {prijs.aantal} stuks: € {prijs.prijs} (per stuk: {prijs.prijsperstuk})
        </li>
      {/each}
    </ul>
  {/if}

  <div>fotos opladen</div>
  <input type="file" bind:files on:change={uploadenfotos} accept="image/*" multiple />

  {#each files as file}
    <div>
      <img src={URL.createObjectURL(file)} alt="" />
    </div>
  {/each}

  <label>
    <button
      class="rounded-md bg-blue-700 text-white px-4 py-2"
      on:click={function () {
        dispatch('message', { text: 'nieuw' });
      }}>nieuw</button
    >
    <button class="rounded-md bg-green-700 text-white px-4 py-2">kopieren</button>
    <button
      class="rounded-md bg-red-700 text-white px-4 py-2"
      on:click={function () {
        dispatch('message', { text: 'delete', id: product.id });
      }}>verwijderen</button
    >
  </label>
</div>
