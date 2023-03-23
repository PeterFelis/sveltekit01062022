<script>
  import { supabase } from '$lib/supabaseClient';
  const user = supabase.auth.user();

  const producten = [
    {
      img: '/scroller/305.png',
      text: 'HP-305 1 meter',
      toelichting: 'Hoofdtelefoon met 1 meter snoer'
    },
    {
      img: '/scroller/2705.jpg',
      text: 'HP-2705',
      toelichting: 'Budget hoofdtelefoon met volumeregeling'
    },
    {
      img: '/scroller/2710.jpg',
      text: 'HP-2710',
      toelichting: 'Budget hoofdtelefoon in vrolijke kleuren'
    },
    {
      img: '/afbeeldingen/hp-136.jpg',
      text: 'HP-136',
      toelichting: 'Hoofdtelefoon met 1 meter snoer'
    },
    { img: '/scroller/adap.jpg', text: 'adapter', toelichting: 'Hoofdtelefoon met 1 meter snoer' },
    { img: '/scroller/blauw.jpg', text: 'blauw', toelichting: 'Hoofdtelefoon met 1 meter snoer' },
    { img: '/scroller/muis.jpg', text: 'muis', toelichting: 'Hoofdtelefoon met 1 meter snoer' },
    {
      img: '/scroller/305.png',
      text: 'HP-305 1 meter',
      toelichting: 'Hoofdtelefoon met 1 meter snoer'
    }
  ];

  import { page } from '$app/stores';
  const type = $page;
  let waarschuwing = true;

  if (user != null) {
    if (user.user_metadata.toegang > 9) waarschuwing = false;
    else waarschuwing = true;
  }
</script>

<svelte:head>
  <title>Hoi! start hier | Fetum</title>
</svelte:head>

{#if waarschuwing}
  <div
    class="w-6/12 absolute ml-5 mt-1 text-center  p-8 text-3xl bg-licht text-rood drop-shadow-md opacity-80 z-20"
  >
    <div class="text-5xl">Sorry!!</div>
    <div class="mt-8">
      -- Dank je nog heel even voor je geduld. --
      <br /> 28-03-2023 zijn we weer helemaal online!
      <br /> Even bellen kan ook: 0174 769-132 <br />(lossen we het meteen op)
    </div>
  </div>
{/if}

<div
  class="h-screen w-screen bg-center bg-contain bg-no-repeat lg:bg-cover"
  style="background-image: url('/afbeeldingen/hp-136.jpg')"
>
  <div class="absolute bottom-10 left-0 w-full h-1/6">
    <p class="w-full flex place-content-center text-donker text-2xl info text-center px-8">
      Hoofdtelefoons en electronica voor zorg, educatie en iedereen die we van dienst kunnen zijn.
    </p>
  </div>
</div>

<div
  class="px-16 py-32 mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 text-center container"
>
  <div class="relative">
    <div class="svgblob bg-oranje bg-opacity-30 duration-1000 hover:rotate-180">
      <img
        class="object-contain duration-1000 hover:-rotate-180"
        src="/afbeeldingen/hp188.png"
        alt="hp-188"
      />
    </div>
    <h2 class="w-full text-center text-2xl text-rood">Degelijke hoofdtelefoons</h2>
  </div>

  <div class="relative">
    <div class="svgblob bg-oranje bg-opacity-30 duration-1000 hover:rotate-180">
      <img
        class="object-contain duration-1000 hover:-rotate-180 p-20"
        src="/afbeeldingen/hp-32.png"
        alt="hp32"
      />
    </div>
    <h2 class="w-full text-center text-2xl text-rood">Oortjes</h2>
  </div>

  <div class="relative">
    <div class="svgblob bg-oranje bg-opacity-30 duration-1000 hover:rotate-180">
      <img
        class="object-contain duration-1000 hover:-rotate-180"
        src="/afbeeldingen/i40.png"
        alt="i-40"
      />
    </div>
    <h2 class="w-full text-center text-2xl text-rood">Doosjes</h2>
  </div>
</div>
<hr class="text-rood" />

<div class="container text-donker grid md:grid-cols-2 md:grid-rows-1 mx-auto my-36">
  <div class="text-xl grid place-content-center ">
    <h2 class="text-heeldonker text-7xl xl:text-9xl font-Valera">Hai!</h2>
    <h2 class="text-4xl">Wij zijn Fetum.</h2>
  </div>
  <div>
    <p class="mt-8 text-2xl">Wij leveren alles rond de computer op school.</p>
    <p class="mt-4 text-base">
      De nadruk ligt op hoofdtelefoons en oortjes. Van budgetuitvoeringen voor grootverbruikers in
      de zorg tot op maat gemaakt voor het onderwijs.
    </p>
    <p class="mt-2">We zijn u graag van dienst</p>
    <button class="border text-white bg-blue-600 rounded-lg p-4 mt-16 mx-auto"
      >Wat doen wij allemaal</button
    >
  </div>
</div>

<div class="overflow-hidden">
  <!-- The slider itself is a flex grid -->
  <div class="flex img-ticker breedt place-content-around overflow-hidden">
    {#each producten as product}
      <div class="flex flex-col text-center mx-4" title={product.toelichting}>
        <img alt={product.text} class="self-center object-contain h-40" src={product.img} />
        <h2>{product.text}</h2>
      </div>
    {/each}
  </div>
</div>

<svg width="0" height="0">
  <defs>
    <clipPath id="clip" clipPathUnits="objectBoundingBox">
      <path
        transform="scale(0.00049, 0.00049)"
        d="M 1000 2000 C 878.802 2000 767.675 1913.755 681.125 1770.278 C 518.075 1810.828 378.145 1793.33 292.282 1707.467 C 206.434 1621.619 188.927 1481.723 229.45 1318.71 C 86.135 1232.184 0 1121.122 0 1000 C 0 881.453 82.513 772.541 220.39 686.84 C 179.055 522.745 196.297 381.846 282.589 295.554 C 369.652 208.491 512.302 191.717 678.279 234.476 C 765.232 88.152 877.469 0 1000 0 C 1121.3 0 1232.512 86.39 1319.093 230.085 C 1481.527 189.995 1620.886 207.642 1706.496 293.253 C 1792.121 378.878 1809.76 518.272 1769.642 680.742 C 1913.501 767.347 2000 878.623 2000 1000 C 2000 1123.918 1909.842 1237.307 1760.534 1324.663 C 1799.893 1486.112 1782.009 1624.562 1696.803 1709.768 C 1612.399 1794.172 1475.75 1812.515 1316.252 1774.595 C 1230.086 1915.484 1119.978 2000 1000 2000 Z"
        style="fill: rgba(216, 216, 216); stroke: rgba(216, 216, 216);"
      />
    </clipPath>
  </defs>
</svg>

<div
  class="h-screen w-screen bg-center bg-cover"
  style="background-image: url('/afbeeldingen/muis.png')"
/>

<style>
  .svgblob {
    clip-path: url(#clip);
    width: 100%;
    height: auto;
  }

  @keyframes ticker-kf {
    0% {
      transform: translate3d(0%, 0, 0);
    }

    100% {
      transform: translate3d(-100vw, 0, 0);
    }
  }

  .img-ticker {
    animation: ticker-kf 20s linear infinite alternate;
  }

  .breedt {
    width: 200vw;
  }
</style>
