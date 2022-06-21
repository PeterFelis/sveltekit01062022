<script>
  import { onMount } from 'svelte';
  import { gebruiker } from '$lib/store.js';
  import { supabase } from '$lib/supabaseClient';

  let klant=null;
  let ojeeInloggen = false;
  let ojeeAccount = false;
  let stuurmail= 'hidden';

  onMount(async () => {
    const error = await supabase.auth.signOut();
    $gebruiker = false;
    console.log('uitgelogt');
  });

  let email, password='';
  // inloggen bestaande klant
  const inloggen = async () => {
    let {reply , error} = await supabase.auth.signIn({
      email: email,
      password: password
    });

    if (error!==null){
      ojeeInloggen = true;
      return
    }

    const user = supabase.auth.user();
    klant = user;
    console.log('wel goed gegaan'+user.email);
    console.log('error'+error);
    return;

  };

  // opvragen password
  const stuurInlogNaarMail = async () => {
    let { data, error } = await supabase.auth.api.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/nieuwPassword'
    });
    stuurmail='';
    show();
    console.log(data, error);
  };

  const show = function() {
    setTimeout(() => weghalen(), 3000);
  }

  function weghalen(){
    stuurmail="hidden";
  }

  let Nemail, Npassword='';
  // aanmaken nieuwe klant
  const accountMaken = async () => {
    let reply = await supabase.auth.signUp({
      email: Nemail,
      password: Npassword
    });
    console.log(reply.error);
    if (reply.error.message == 'User already registered') {
      ojeeAccount = true;
      return;
    }
  };





</script>
<div class='container grid grid-cols-2 mx-auto pt-40 w-8/12'>


  <div class="flex flex-col text-xl w-9/12">
    <h1 class="text-3xl rounded-md mb-4">Inloggen</h1>
        <label class="mt-2">Email adres
        <input class="float-right" type="email" placeholder="iemand@bedrijf.nl" bind:value={email} />
        </label>      
      
        <label for="password">Password
        <input class="float-right" type="text" placeholder="geheim!" bind:value={password} />
        </label>
    <button class="mt-8 text-3xl text-left" on:click={inloggen}>Log in</button>
  
{#if ojeeInloggen}
<div class="text-base border-2 rounded-md p-8">
  <p>Sorry, er is iets fout gegaan. <br>U kunt vier dingen doen:</p>
  
    <li>Probeer het nog een keer</li>
    <li>Maak hiernaast een account aan</li>
    <li class="cursor-pointer" on:click={stuurInlogNaarMail}>Klik hier om uw password te resetten</li>
  
</div>
{/if}


{#if klant}

  <p>  {klant.email}</p>
  <p> {klant.user_metadata.toegang}</p>
{/if}
</div>



<div class="flex flex-col text-xl w-9/12">
  <h1 class="text-3xl rounded-md mb-4">Account maken</h1>
    <label class="mt-2" >Email adres
    <input class="float-right" type="email" placeholder="iemand@bedrijf.nl" bind:value={Nemail} />
    </label>
    <label for="password">Password
    <input class="float-right" type="text" placeholder="geheim!" bind:value={Npassword} />
    </label>
    <button class="mt-8 text-3xl text-left" on:click={accountMaken}>Maak account</button>

  
    {#if ojeeAccount}
      <p>Dit email adres is al gebruikt. Kies hieronder wat u wilt doen</p>
      <div><button on:click={() => goto('/inloggen')}>naar de inlog pagina</button></div>
      <div><button on:click={stuurInlogNaarMail}>Stuur een inlog code naar {email}</button></div>
    {/if}
  </div>
</div>

<div class='grid h-full w-full place-items-center bg-heeldonker z-10 {stuurmail}'>
  <p class="p-12 bg-licht">Er is een mail naar het ingevulde email adres gezonden</p>
</div>
