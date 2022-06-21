<script>
  import { onMount } from 'svelte';
  import { gebruiker } from '$lib/store.js';
  import { supabase } from '$lib/supabaseClient';

  let gast;

  onMount(async () => {
    const error = await supabase.auth.signOut();
    $gebruiker = false;
    console.log('uitgelogt');
  });

  let email, password, antwoord;

  const inloggen = async () => {
    antwoord = await supabase.auth.signIn({
      email: email,
      password: password
    });

    const user = supabase.auth.user();
    console.log(user);
    gebruiker.set(user.email);
    gast = user;
    return;

    //if (inloggen) {
    //  goto('infoBijwerken');
    //}
  };
</script>

<div class="container pt-20 mx-auto">
  <h1 class="text-xl">inloggen</h1>
  <label for="email">email adres</label>
  <input type="email" placeholder="iemand@bedrijf.nl" bind:value={email} />

  <label for="password">email adres</label>
  <input type="text" placeholder="geheim!" bind:value={password} />

  <button on:click={inloggen}>ok!</button>
</div>

{#if gast}
  --{gast.user_metadata.toegang}--
{/if}
