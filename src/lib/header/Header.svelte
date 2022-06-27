<script>
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import { gebruiker } from '$lib/store.js';
  import { onDestroy } from 'svelte';

  const user = supabase.auth.user();
  let volledigmenu = false;
  let voornaam = '';

  let unsub = gebruiker.subscribe(() => {});
  onDestroy(() => unsub());

  // deze truuk triggert functie als er iet verandert ;-)
  $: $gebruiker, ophalenVoornaam();

  // naam ophalen voor menu balk
  async function ophalenVoornaam() {
    if (!supabase.auth.user()) {
      voornaam = '';
      volledigmenu = false;
      return;
    }
    const user = supabase.auth.user();
    const id = supabase.auth.user().id;
    let { data, error } = await supabase.from('personen').select('voornaam').eq('autID', id);
    if (data) {
      voornaam = data[0].voornaam;
      if (user.user_metadata.toegang > 9) volledigmenu = true;
    }
  }
</script>

<nav
  class="flex items-center bg-paars h-20 bg-opacity-60 hover:bg-opacity-100 hover:text-white transition-all fixed w-full z-50"
>
  <div class="container mx-auto flex flex-row">
    {#if volledigmenu}
      <div
        class="font-Raleway text-base mr-6 relative"
        class:active={$page.url.pathname === '/admin/invoegen'}
      >
        <a sveltekit:prefetch href="/admin/auto_accountmaken">test klantenoverdragen</a>
      </div>
      <div
        class="font-Raleway text-base mr-6 relative"
        class:active={$page.url.pathname === '/admin/auto_accountmaken'}
      >
        <a sveltekit:prefetch href="/admin/invoegen">invoegen producten</a>
      </div>
      <div
        class="font-Raleway text-base mr-6 relative"
        class:active={$page.url.pathname === '/admin/pi'}
      >
        <a sveltekit:prefetch href="/admin/pi">producten</a>
      </div>
    {/if}

    <div class="font-Raleway text-base mr-6 relative" class:active={$page.url.pathname === '/'}>
      <a sveltekit:prefetch href="/">home</a>
    </div>

    <div
      class="font-Raleway text-base mr-6 relative"
      class:active={$page.url.pathname === '/contact'}
    >
      <a sveltekit:prefetch href="/contact">contact</a>
    </div>
    <div
      class="font-Raleway text-base mr-6 relative"
      class:active={$page.url.pathname === '/leveringsvoorwaarden'}
    >
      <a sveltekit:prefetch href="/leveringsvoorwaarden">leveringsvoorwaarden</a>
    </div>

    <div
      class="font-Raleway text-base mr-6 relative"
      class:active={$page.url.pathname === '/webshopinfo'}
    >
      <a sveltekit:prefetch href="/webshopinfo">web shop info</a>
    </div>

    <div
      class="font-Raleway text-base mr-6 relative"
      class:active={$page.url.pathname === '/inloggen'}
    >
      <a sveltekit:prefetch href="/inloggen">inloggen</a>
    </div>
    <div
      class="font-Raleway text-base mr-6 relative cursor-pointer"
      title="log uit"
      on:click={async function () {
        await supabase.auth.signOut();
        voornaam = '';
        gebruiker.set(false);
        console.log('uitgelogd');
        location.reload();
      }}
    >
      hai!
      {#if voornaam}
        {voornaam}
      {/if}
    </div>

    <div class="w-20 fixed right-10 logo cursor-pointer">
      <a href="/">
        <img src="/fetumlogo.png" alt="Fetum ons logo" />
        <p class="text-xs text-center">0174-769132</p>
      </a>
    </div>
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
    top: -1rem;
    left: 0.7rem;
    transform: translate3d(-20px, 20px, 0);
    border-radius: 8px;
  }
</style>
