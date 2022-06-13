<script>

  import { afterUpdate, onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  export let product;

  const calcprijzen = async () => {
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


  const updaten = async (id,key,value ) => {
    let aanpassing={};
    aanpassing[key]=value;
    const { error } = await supabase
      .from('producten')
      .update(aanpassing)
      .match({ id: id });
  };

  afterUpdate(() => calcprijzen()); 


  const nieuw = async()=>{
       const {data} = await supabase
      .from('producten')
      .insert({'omschrijving':"",'categorie':'-','type':'-',
      'prijzen':[{'prijs':0,'aantal':10},{'prijs':1,'aantal':11}],
      'volgnummer':999})  
      product=data; 
      console.log(product)    
    }
  
 
</script>

<div
  class="bg-white p-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>

 
  <div>type:
  <span 
      contenteditable="true"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      on:blur={updaten(product.id,'model',product.model)}
      bind:innerHTML={product.model}
      />
  </div>

  <div>categorie:
  <span
  contenteditable="true"
  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  on:blur={updaten(product.id,'categorie',product.categorie)}
  bind:innerHTML={product.categorie}
  />
</div>

  <div>type: 
  <span    
      contenteditable="true"
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      on:blur={updaten(product.id,'type',product.type)}
      bind:innerHTML={product.type}
      />
  </div>
    
    <div>Omschrijving: 
      <div
      contenteditable="true"
      class="border mb-3 font-normal text-gray-700 dark:text-gray-400"
      on:blur={updaten(product.id,'omschrijving',product.omschrijving)}
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
  
  <label> 
    <button class='rounded-md bg-blue-700 text-white px-4 py-2' on:click={nieuw}>nieuw</button>
    <button class='rounded-md bg-green-700 text-white px-4 py-2'>Kopieren</button>
    <button class='rounded-md bg-red-700 text-white px-4 py-2'>verwijderen</button>
  </label>
</div>
