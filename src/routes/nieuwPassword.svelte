<script>
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';

  let email;
  let pwoord;
  let token;
  let gelukt = false;
  let info;

  supabase.auth.onAuthStateChange((event, data) => {
    if (event === 'PASSWORD_RECOVERY') {
      info = data;
      email = data?.user.email;
      token = data?.access_token;
    }
  });

  const passwordAanpassen = async () => {
    const { error, data } = await supabase.auth.api.updateUser(token, { password: pwoord });
    gelukt = true;
    console.log('error ', error);
    console.log('data', data);
  };
</script>

<div class="bg-achtergrond container pt-20 mx-auto">
  <h1 class="text-xl">passwordVeranderen</h1>
  <label for="email">Hai {email}</label>

  <label for="password">Maak hier uw nieuwe password (minimaal 6 karakters)</label>
  <input type="text" placeholder="nieuw geheim!" bind:value={pwoord} />

  <button on:click={passwordAanpassen}>aanpassen</button>

  <div>
    {#if gelukt}
      <p>Password is aangepast, ga naar de login</p>
      <div><button on:click={() => goto('/inloggen')}>naar de inlog pagina</button></div>
    {/if}
  </div>
</div>
