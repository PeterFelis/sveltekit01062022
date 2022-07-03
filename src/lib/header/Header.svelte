<script>
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import { gebruiker } from '$lib/store.js';
  import { onDestroy } from 'svelte';
 
  const user = supabase.auth.user();
  let menuToegang=1;
  let voornaam = '';

  const algemeen=`bg-paars bg-opacity-60 hover:bg-opacity-100 hover:text-white 
         transition-all fixed z-50 pt-5 h-screen w-3/6 h-full text-sm flex flex-col place-items-center
         lg:h-20 lg:w-full lg:text-base lg:block`;
  let ingeklapt=`hidden`;

  let unsub = gebruiker.subscribe(() => {});
  onDestroy(() => unsub());

  // deze truuk triggert functie als er iets verandert ;-)
  $: $gebruiker, ophalenVoornaam();

  // naam ophalen voor menu balk
  async function ophalenVoornaam() {
    if (!supabase.auth.user()) {
      voornaam = '';
      menuToegang=1;
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

const inloggenIngedrukt = async () =>{
                  await supabase.auth.signOut();
                  voornaam = '';
                  gebruiker.set(false);
                  console.log('uitgelogd');
                  }

  let menu=[
    {url:"/admin/invoegen",text:"invoegen producten",toegang:10},
    {url:"/admin/auto_accountmaken",text:"test klantenoverdragen",toegang:10},
    {url:"/admin/pi", text:"producten",toegang:10},
    {url:"/", text:"home",toegang:1},
    {url:"/contact", text:"contact",toegang:1,},
    {url:"/leveringsvoorwaarden",text:"leveringsvoorwaarden",toegang:1},
    {url:"/webshopinfo", text:"webshop info",toegang:1},
    {url:"/inloggen", text:"inloggen",toegang:1, action:inloggenIngedrukt}
  ]


const functieAanroepen=(action)=>{
  if (!action) return;
  action();
}



</script>

<button 
    on:click={()=>ingeklapt = ingeklapt=='hidden'?"":'hidden'}
    class="lg:hidden">Menu
  </button>


{#each menu as item}
  {#if menuToegang >= item.toegang}
    <div 
          class="font-Raleway text-base mr-6 relative"
          class:active={$page.url.pathname === item.url} 
          on:click = {()=> functieAanroepen(item.action)}
          >
          <a sveltekit:prefetch href={item.url}>
              {item.text}
          </a>
         
    </div>
  {/if}

{/each}




<nav class="{algemeen} {ingeklapt}">
 
  <div class="w-10/12 mx-auto flex 
        flex-col
        lg:flex-row">
  

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
      title="log uit"
      on:click={async function () {
        await supabase.auth.signOut();
        voornaam = '';
        gebruiker.set(false);
        console.log('uitgelogd');
      }}
    >
      <a sveltekit:prefetch href="/inloggen">inloggen</a>
    </div>

    <div>
      <div class="group font-Raleway text-base mr-6 relative cursor-pointer">
        {#if gebruiker}
          hai
          {#if voornaam}
            {voornaam}
          {/if}
          <ul
            class="invisible group-hover:visible bg-paars px-5 mt-5 rounded-md shadow-md transition-all"
          >
            <a href="/klantInfo">Klantinfo, verzendadres bijwerken</a>
          </ul>
        {/if}
      </div>
    </div>
    </div>
  </nav>
    <div class="w-20 fixed right-10 top-5 z-60 logo cursor-pointer">
      <a href="/">
        <img src="/fetumlogo.png" alt="Fetum ons logo" />
        <p class="text-xs text-center">0174-769132</p>
      </a>
    </div>



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
