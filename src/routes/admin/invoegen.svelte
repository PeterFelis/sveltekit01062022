<script>
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  // check of dit mag anders naar index pagina
  if (!supabase.auth.user()) goto('/');
  else if (supabase.auth.user().user_metadata.toegang < 10) goto('/');

  //de json met alle producten -> komt origineel uit Fetum database
  import { producten } from './producten';
  import Label from '$lib/Label.svelte';

  // voor de eenmalige inladen -> overdragen naar andere pagina
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
      prijzen: prijzen,
      volgnummer: item.volgnummer
    });
    if (error) {
      tellerfout++;
      console.log(`${error.message} - ${item.product}`);

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

  const bucketmaken = async () => {
    const { data, error } = await supabase.storage.createBucket('nieuw');
    console.log('data ', data);
    console.log('error', error);
  };
</script>

<h2>invoeren van alle producten uit json lijst</h2>
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

<h2>nieuwe bucket maken</h2>
<input
  type="button"
  value="bucket maken"
  on:click={bucketmaken}
  class="p-1 bg-red-500 text-white rounded-sm"
/>
