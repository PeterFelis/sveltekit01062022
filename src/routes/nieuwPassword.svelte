<script>
  import Header from '$lib/header/Header.svelte';
  import Fetum from '$lib/header/Fetum.svelte';

  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';

  let email;
  let pwoord;
  let token;
  let ojee = false;
  let info;

  supabase.auth.onAuthStateChange((event, data) => {
    if (event === 'PASSWORD_RECOVERY') {
      info = data;
      email = data?.user.email;
      token = data?.access_token;
    }
  });

  const accountMaken = async () => {
    let reply = await supabase.auth.signUp({
      email: email,
      password: password
    });
    console.log(reply.error);
    if (reply.error.message == 'User already registered') {
      ojee = true;
      return;
    }
  };

  const passwordAanpassen = async () => {
    const { error, data } = await supabase.auth.api.updateUser(token, { password: pwoord });
    console.log('error ', error);
    console.log('data', data);
  };
</script>

<Header />

<Fetum />

<div class="bg-achtergrond container pt-20 mx-auto">
  <h1 class="text-xl">passwordVeranderen</h1>
  <label for="email">email adres</label>

  <label for="password">Nieuw Password</label>
  <input type="text" placeholder="nieuw geheim!" bind:value={pwoord} />

  <button on:click={passwordAanpassen}>aanpassen</button>

  <div>
    {#if ojee}
      <p>Password is aangepast, ga naar de login</p>
      <div><button on:click={() => goto('/inloggen')}>naar de inlog pagina</button></div>
    {/if}
  </div>
</div>
