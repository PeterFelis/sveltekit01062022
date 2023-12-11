<script>
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import { gebruiker } from '$lib/store.js';
  import { onDestroy } from 'svelte';

  const user = supabase.auth.user();
  let menuToegang = 1;
  let voornaam = '';

  const algemeen = `bg-paars bg-opacity-60 hover:bg-opacity-100 hover:text-white 
         transition-all duration-500 fixed z-50 pt-5 h-screen h-full text-sm flex flex-col place-items-center
         lg:h-20 w-full lg:text-base lg:block lg:left-0`;
  let ingeklapt = '-left-full';

  let unsub = gebruiker.subscribe(() => {});
  onDestroy(() => unsub());

  // deze truuk triggert functie als er iets verandert ;-)
  $: $gebruiker, ophalenVoornaam();

  // naam ophalen voor menu balk
  async function ophalenVoornaam() {
    if (!supabase.auth.user()) {
      voornaam = '';
      menuToegang = 1;
      return;
    }
    const user = supabase.auth.user();
    const id = supabase.auth.user().id;
    let { data, error } = await supabase.from('personen').select('voornaam').eq('autID', id);
    if (data) {
      voornaam = data[0]?.voornaam;
      console.log(user?.user_metadata.toegang);
      menuToegang = user.user_metadata.toegang;
    }
  }

  const inloggenIngedrukt = async () => {
    await supabase.auth.signOut();
    voornaam = '';
    gebruiker.set(false);
    console.log('uitgelogd');
  };

  let menu = [
    { url: '/admin/invoegen', text: 'invoegen producten', toegang: 10 },
    { url: '/admin/auto_accountmaken', text: 'test klantenoverdragen', toegang: 10 },
    { url: '/admin/pi', text: 'producten', toegang: 10 },
    { url: '/', text: 'home', toegang: 1 },
    { url: '/contact', text: 'contact', toegang: 1 },
    { url: '/leveringsvoorwaarden', text: 'leveringsvoorwaarden', toegang: 1 },
    { url: '/webshopinfo', text: 'webshop info', toegang: 1 }
  ];

  const functieAanroepen = (action) => {
    if (!action) return;
    action();
  };

  const toggleMobileMenu = () => (ingeklapt = ingeklapt == '-left-full' ? 'left-0' : '-left-full');
</script>

<div class="lg:hidden container flex flex-row content-around h-20 bg-paars bg-opacity-60 ">
  <button on:click={toggleMobileMenu}>Menu </button>

  <div class="w-20 fixed right-10 top-5 z-60 logo cursor-pointer">
    <a href="/">
      <img src="/fetumlogo.png" alt="Fetum ons logo" />
      <p class="text-xs text-center">0174-769132</p>
    </a>
  </div>
</div>

<nav class="{algemeen} {ingeklapt}" on:click={toggleMobileMenu}>
  <div
    class="container mx-auto flex 
        mt-20
        flex-col
        text-2xl
        place-items-center
        lg:text-base
        lg:flex-row
        lg:mt-0"
  >
    {#each menu as item}
      {#if menuToegang >= item.toegang}
        <div
          class="font-Raleway lg:mr-6 relative"
          class:active={$page.url.pathname === item.url}
          on:click={() => functieAanroepen(item.action)}
        >
          <a sveltekit:prefetch href={item.url}>
            {item.text}
          </a>
        </div>
      {/if}
    {/each}
  </div>
  <div class="w-20 fixed right-10 top-5 z-60 logo cursor-pointer invisible lg:visible">
    <a href="/">
      <img src="/fetumlogo.png" alt="Fetum ons logo" />
      <p class="text-xs text-center">0174-769132</p>
    </a>
  </div>
</nav>

<style>
  .active::after {
    position: absolute;
    width: 2rem;
    height: 2rem;
    content: '';
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid red;
    border-bottom: 0.5rem solid transparent;
    top: -0.7rem;
    left: 0rem;
    transform: translate3d(-20px, 20px, 0);
    border-radius: 8px;
  }

  @media only screen and (min-width: 1024px) {
    .active::after {
      top: -1rem;
      left: 0.7rem;
    }
  }
</style>
