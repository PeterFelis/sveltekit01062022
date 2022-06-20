<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { gebruiker } from '$lib/store.js';
  
  onMount(async () => {
    const error = await supabase.auth.signOut();
    $gebruiker=false;
    console.log('uitgelogt')
  });
  

let email, password,antwoord;


const inloggen = async () =>{
  antwoord = await supabase.auth.signIn({
  email: email,
  password: password
  })
  
  
  const user= supabase.auth.user();
  console.log(user?.email)

  
  gebruiker.set(user.email);
  console.log('ingelogd '.$gebruiker)

  if (!antwoord.error){
    goto('infoBijwerken')
  }
}
</script>




<div class="container pt-20 mx-auto">
  <h1 class='text-xl'>inloggen</h1>
<label for="email">email adres</label>
<input type="email" placeholder="iemand@bedrijf.nl" bind:value={email}/>

<label for="password">email adres</label>
<input type="text" placeholder="geheim!" bind:value={password}/>

<button on:click={inloggen}>ok!</button>

</div>

{#if antwoord}
<p>poehh. iets fout gegaan met inloggen, sorry</p>
{/if}

