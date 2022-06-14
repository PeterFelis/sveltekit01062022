<script context="module">
  export const prerender = true;
  import Header from '$lib/header/Fetum.svelte';
  import { onMount } from 'svelte';

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
</script>

<div>
  <div
    class="h-screen w-screen bg-center bg-cover"
    style="background-image: url('/afbeeldingen/hp-136.jpg')"
  >
    <div class="absolute bottom-0 left-0 w-full h-1/6">
      <p class="w-full flex place-content-center text-donker text-2xl info text-center px-8">
        Hoofdtelefoons en electronica voor zorg, <br />educatie en iedereen die we van dienst kunnen
        zijn.
      </p>
    </div>
  </div>

  <div
    class="rounded-xl w-full px-52 mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 text-center pt-11 rasterRood"
  >
    <div class="relative">
      <div class="svgblob bg-licht duration-1000 hover:rotate-180">
        <img
          class="object-contain duration-1000 hover:-rotate-180"
          src="/afbeeldingen/hp188.png"
          alt="hp-188"
        />
      </div>
      <h2 class="w-full text-center text-2xl text-geel absolute bottom-10">
        Degelijke hoofdtelefoons
      </h2>
    </div>

    <div class="relative">
      <div class="svgblob bg-licht duration-1000 hover:rotate-180">
        <img
          class="object-contain duration-1000 hover:-rotate-180"
          src="/afbeeldingen/hp-32.png"
          alt="hp32"
        />
      </div>
      <h2 class="w-full text-center text-2xl text-geel absolute bottom-10">Oortjes</h2>
    </div>

    <div class="relative">
      <div class="svgblob bg-licht duration-1000 hover:rotate-180">
        <img
          class="object-contain duration-1000 hover:-rotate-180"
          src="/afbeeldingen/i40.png"
          alt="i-40"
        />
      </div>
      <h2 class="w-full text-center text-2xl text-geel absolute bottom-10">Doosjes</h2>
    </div>
  </div>

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
          >Wat doen wij allemaal</button>
    </div>
  </div>

      <div
      class="h-screen w-screen bg-center bg-cover"
      style="background-image: url('/afbeeldingen/muis.png')"
    />
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
        transform="scale(0.0018345, 0.00178814)"
        d="M 244.552 500 C 211.307 500 181.417 468.774 160.747 419.075 C 116.473 434.65 78.606 433.561 57.153 412.109 C 36.822 391.778 34.782 356.704 47.881 315.406 C 23.147 297.778 8.792 276.78 8.792 254.24 C 8.792 226.704 30.215 201.469 65.814 181.869 C 50.249 137.606 51.341 99.751 72.79 78.302 C 93.255 57.837 128.657 55.904 170.309 69.29 C 190.161 31.614 216.131 8.792 244.552 8.792 C 269.093 8.792 291.806 25.808 310.331 54.709 C 350.524 42.492 384.578 44.86 404.49 64.772 C 425.805 86.087 427.016 123.604 411.756 167.509 C 465.689 188.23 477.837 214.065 476.441 248.885 C 474.8 289.819 473.562 312.58 430.622 332.92 C 442.347 372.485 439.801 405.964 420.127 425.638 C 399.474 446.291 363.61 448.07 321.461 434.278 C 301.296 475.058 274.263 500 244.552 500 Z"
        style="fill: rgba(216, 216, 216); stroke: rgba(216, 216, 216);"
      />
    </clipPath>
  </defs>
</svg>

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


  .rasterRood{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(215,89,77,1) 30%, rgba(215,89,77,1) 70%, rgba(255,255,255,1) 100%);
  }
</style>
