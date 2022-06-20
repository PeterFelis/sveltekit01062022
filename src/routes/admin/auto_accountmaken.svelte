<script>
  import { supabase } from '$lib/supabaseClient';
  import { klanten } from './klanten';
  let email;
  let password;
  let ojee = false;

  const accountMaken = async (klant) => {
    let reply = await supabase.auth.signUp({
      email: klant.emailadres,
      password: klant.wachtwoord
    });
    if (reply.error.message == 'User already registered') {
      console.log(email + 'bestaat dubbel');
      return;
    }
    console.log(email, 'gelukt');
  };

  // voor de eenmalige inladen -> overdragen naar klanten tabel
  $: tellerfout = 0;
  $: tellergoed = 0;

  // dit is zijn test functies, samen met klanten.js om alle klanten in één keer in te voeren
  // eerst aanmaken als klant bij Auth, daarna met die info invoeren als klanten

  //klanten.forEach((item) => {
  //  console.log(item);
  //});
  accountMaken(klanten[0]);
  console.log(klanten[0]);

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
</script>

<div class="container pt-20 mx-auto">
  <h1 class="text-xl">account maken</h1>
  <label for="email">email adres</label>
  <input type="email" placeholder="iemand@bedrijf.nl" bind:value={email} />

  <label for="password">email adres</label>
  <input type="text" placeholder="geheim!" bind:value={password} />

  <button on:click={accountMaken}>ok!</button>

  <div>
    {#if ojee}
      <p>Dit email adres is al gebruikt. Kies hieronder wat u wilt doen</p>
      <div><button on:click={() => goto('/inloggen')}>naar de inlog pagina</button></div>
      <div><button on:click={stuurInlogNaarMail}>Stuur een inlog code naar {email}</button></div>
    {/if}
  </div>
</div>
