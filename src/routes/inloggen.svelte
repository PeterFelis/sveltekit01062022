<script>
  import { gebruiker } from '$lib/store.js';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  //let klant = null;
  let inLoggenNietGelukt = false;
  let ojeeAccountBestaatAL = false;
  let stuurmail = false;

  //nieuwe klant aanmaken
  let Nemail,
    Npassword = '';
  //bestaaande klant
  let email,
    password = '';

  // als ingelogd, eerst uitloggen!
  if (supabase.auth.user()) {
    const error = supabase.auth.signOut();
    gebruiker.set(false);
    console.log('uitgelogt');
  }

  // inloggen bestaande klant
  const inloggen = async () => {
    let { reply, error } = await supabase.auth.signIn({
      email: email,
      password: password
    });

    if (error !== null) {
      inLoggenNietGelukt = true;
      return;
    }
    // als inloggen wel gelukt is
    gebruiker.set(true);
    goto('/');
    return;
  };

  // opvragen password
  const stuurInlogNaarMail = async () => {
    let tmail = email;
    if (!tmail) tmail = Nemail;
    let { data, error } = await supabase.auth.api.resetPasswordForEmail(tmail, {
      redirectTo: 'http://localhost:3000/nieuwPassword'
    });
    ojeeAccountBestaatAL = false;
    showBerichtDatMailIsGezonden();
    console.log(data, error);
  };

  const showBerichtDatMailIsGezonden = function () {
    stuurmail = true;
    setTimeout(() => weghalen(), 3000);
  };

  function weghalen() {
    stuurmail = false;
    console.log('en weg');
  }

  // aanmaken nieuwe klant

  //toegan geeft aan wat iemand mag. is standaard 0, behalve bij peter@felis.nl dan is het 10 zodat ik admin kan doen
  const accountMaken = async () => {
    let vtoegang = 0;
    if (Nemail == 'peter@felis.nl') vtoegang = 10;
    let reply = await supabase.auth.signUp(
      {
        email: Nemail,
        password: Npassword
      },
      {
        data: { toegang: vtoegang }
      }
    );

    console.log(reply);
    if (reply.error) {
      if (reply.error.message == 'User already registered') {
        ojeeAccountBestaatAL = true;
        return;
      }
      goto('./');
    }
  };

  const resetPopUp = () => {
    inLoggenNietGelukt = false;
    ojeeAccountBestaatAL = false;
    stuurmail = false;
    Nemail = Npassword = email = password = '';
  };
</script>

<svelte:head>
  <title>Inloggen of klantworden | Fetum</title>
</svelte:head>

<div class="bg-achtergrond flex flex-col lg:flex-row  place-items-center w-screen py-20">
  <div class="basis-1/2">
    <h1 class="text-center text-3xl md:text-6xl font-Raleway my-4">
      Inloggen <br /> of<br /> klant worden
    </h1>
    <p class="text-center">Snel en makkelijk</p>
  </div>
  <div class="basis-1/2 p-4">
    <img src="/afbeeldingen/hp188.png" />
  </div>
</div>

<div class="container grid grid-rows-2 lg:grid-cols-2 mx-auto w-8/12">
  <div class="flex flex-col text-xl w-9/12">
    <h1 class="text-3xl rounded-md mb-4">Inloggen</h1>
    <label class="mt-2"
      >Email adres
      <input
        class="float-right bg-transparent"
        type="email"
        placeholder="iemand@bedrijf.nl"
        bind:value={email}
      />
    </label>

    <label
      >Password
      <input
        class="float-right bg-transparent"
        type="password"
        placeholder="geheim!"
        bind:value={password}
      />
    </label>
    <button class="mt-8 text-3xl text-left" on:click={inloggen}>Log in</button>
  </div>

  <div class="flex flex-col text-xl w-9/12">
    <h1 class="text-3xl rounded-md mb-4">Account maken</h1>
    <label class="mt-2"
      >Email adres
      <input
        class="float-right bg-transparent"
        type="email"
        placeholder="iemand@bedrijf.nl"
        bind:value={Nemail}
      />
    </label>
    <label
      >Password
      <input
        class="float-right bg-transparent"
        type="text"
        placeholder="geheim!"
        bind:value={Npassword}
      />
    </label>
    <button class="mt-8 text-3xl text-left" on:click={accountMaken}>Maak account</button>
  </div>
</div>

{#if ojeeAccountBestaatAL}
  <div
    class="grid h-full w-full absolute top-0 left-0 bg-heeldonker z-10 opacity-25"
    on:click={resetPopUp}
  />
  <div
    class="grid h-full w-full absolute top-0 left-0 bg-transparent z-20 place-items-center"
    on:click={resetPopUp}
  >
    <div class="w-8/12 mx-auto text-xl bg-rood text-white rounded-lg p-12 z-30">
      <p>Dit email adres is al gebruikt.</p>
      <p>Log in of</p>
      <button class="underline cursor-pointer z-30" on:click={stuurInlogNaarMail}>
        klik hier om een inlog code naar {Nemail} te sturen <br /> (check ook uw spam box)
      </button>
    </div>
  </div>
{/if}

{#if inLoggenNietGelukt}
  <div
    class="grid h-full w-full absolute top-0 left-0 bg-heeldonker z-10 opacity-25"
    on:click={resetPopUp}
  />
  <div
    class="grid h-full w-full absolute top-0 left-0 bg-transparent z-20 place-items-center"
    on:click={resetPopUp}
  >
    <div class="w-8/12 mx-auto text-xl text-center bg-rood text-white rounded-lg p-12 z-30">
      <p>Sorry, er is iets fout gegaan</p>
      <p />
      <p>U kunt drie dingen doen:</p>
      <p>Probeer het nog een keer</p>
      <p>Maak hiernaast een account aan</p>
      <button class="underline cursor-pointer z-30 mt-2" on:click={stuurInlogNaarMail}
        >klik hier om een inlog code naar {email} te sturen (check ook uw spam box)</button
      >
    </div>
  </div>
{/if}

{#if stuurmail}
  <div class="grid h-full w-full place-items-center absolute top-0 left-0 z-10 bg-transparent">
    <p class="p-12 bg-licht">Er is een mail naar het ingevulde email adres gezonden</p>
  </div>
{/if}
