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
    class="rounded-xl w-8/12 mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 bg-rood text-center pt-11 mask"
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

  <div class="text-donker grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 mx-auto mt-20">
    <div class="p-16 lg:p-32 xl:p-48 text-right text-xl grid place-content-center ">
      <h2 class="text-heeldonker text-7xl xl:text-9xl font-Valera">Hai!</h2>
      <h2 class="text-4xl">Wij zijn Fetum.</h2>
      <p class="mt-8 text-2xl">Wij leveren alles rond de computer op school.</p>
      <p class="mt-4 text-base">
        De nadruk ligt op hoofdtelefoons en oortjes. Van budgetuitvoeringen voor grootverbruikers in
        de zorg tot op maat gemaakt voor het onderwijs.
      </p>
      <p class="mt-2">We zijn u graag van dienst</p>
      <div class="w-full">
        <button class="border text-white bg-blue-600 rounded-lg p-4 mt-16 mx-auto"
          >Wat doen wij allemaal</button
        >
      </div>
    </div>
    <div class="bg-cover bg-center" style="background-image:url('./afbeeldingen/muis.png')" />
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
</div>

<svg width="0" height="0">
  <defs>
    <clipPath id="clip" clipPathUnits="objectBoundingBox">
      <path
        transform="scale(0.0018345, 0.00178814)"
        d="M 52.77 414.876 C -9.426 384.693 -4.466 271.812 63.848 162.747 C 132.162 53.684 237.959 -10.26 300.154 19.923 C 324.8 31.884 338.901 56.83 342.692 89.379 C 375.985 74.829 407.479 72.009 432.123 83.969 C 494.318 114.153 489.357 227.034 421.043 336.098 C 352.73 445.161 246.932 509.105 184.738 478.922 C 160.092 466.962 145.991 442.015 142.2 409.466 C 108.907 424.016 77.415 426.836 52.77 414.876 Z"
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

  .mask {
    -webkit-mask-image: linear-gradient(
      transparent -40%,
      rgba(0, 0, 0, 0.8),
      black 50%,
      rgba(0, 0, 0, 0.8),
      transparent 140%
    );
    mask-image: linear-gradient(
      transparent -20%,
      rgba(0, 0, 0, 0.8),
      black 50%,
      rgba(0, 0, 0, 0.8),
      transparent 120%
    );
  }
</style>
