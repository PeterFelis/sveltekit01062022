<script>
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import { gebruiker } from '$lib/store.js';

  const user = supabase.auth.user();
</script>

<nav class="flex items-center bg-paars h-20 bg-opacity-60 fixed w-full">
  <div class="container mx-auto flex flex-row">
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
    <div class="font-Raleway text-base mr-6 relative" class:active={$page.url.pathname === '/'}>
      <a sveltekit:prefetch href="/">index</a>
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
      class:active={$page.url.pathname === '/accountmaken'}
    >
      <a sveltekit:prefetch href="/accountmaken">account maken</a>
    </div>
    <div
      class="font-Raleway text-base mr-6 relative"
      class:active={$page.url.pathname === '/inloggen'}
    >
      <a sveltekit:prefetch href="/inloggen">inloggen</a>
    </div>
    <div class="font-Raleway text-base mr-6 relative">
      {#if !gebruiker == false}
        {$gebruiker.data}
      {/if}
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
    border-left: 0.5rem solid #6b9080;
    border-bottom: 0.5rem solid transparent;
    top: -1rem;
    left: 0.7rem;
    transform: translate3d(-20px, 20px, 0);
    border-radius: 8px;
  }
</style>
