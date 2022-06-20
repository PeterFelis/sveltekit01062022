<script>
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';
  let email;
  let password;
  let ojee = false;

  const stuurInlogNaarMail = async () => {
    let { data, error } = await supabase.auth.api.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/nieuwPassword'
    });
    console.log(data, error);
  };

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
