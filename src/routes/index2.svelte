<script context="module">
  export const prerender = true;
  import Header from '$lib/header/Header.svelte';
import { onMount } from 'svelte';

  const producten = [
    { img: '/scroller/305.png', text: 'HP-305 1 meter', toelichting:'Hoofdtelefoon met 1 meter snoer' },
    { img: '/scroller/2705.jpg', text: 'HP-2705', toelichting:'Budget hoofdtelefoon met volumeregeling'  },
    { img: '/scroller/2710.jpg', text: 'HP-2710', toelichting:'Budget hoofdtelefoon in vrolijke kleuren'  },
    { img: '/afbeeldingen/hp-136.jpg', text: 'HP-136', toelichting:'Hoofdtelefoon met 1 meter snoer'  },
    { img: '/scroller/adap.jpg', text: 'adapter', toelichting:'Hoofdtelefoon met 1 meter snoer'  },
    { img: '/scroller/blauw.jpg', text: 'blauw', toelichting:'Hoofdtelefoon met 1 meter snoer'  },
    { img: '/scroller/muis.jpg', text: 'muis', toelichting:'Hoofdtelefoon met 1 meter snoer'  },
    { img: '/scroller/305.png', text: 'HP-305 1 meter', toelichting:'Hoofdtelefoon met 1 meter snoer'  }
  ];

</script>

<div>
  <div class="top">
    <Header />
  </div>


<div id="text">
  <p
  class="w-full flex place-content-center font-sans text-blue-700 text-4xl info text-center px-32"
>
  Hoofdtelefoons en electronica voor zorg, <br />educatie en iedereen die we
  van dienst kunnen zijn.
</p>
</div>

<div class="grid grid-cols-3 w-11/12 mx-auto py-32">

  <div class="svgblob bg-blue-50 duration-300 hover:scale-110">
    <img class="w-full h-full object-contain" src="/afbeeldingen/hp188.png" alt="hp-188">
  </div>


  <div class="svgblob bg-blue-50">
    <img class="w-full h-full object-contain" src="/afbeeldingen/hp-32.png" alt="hp32">
  </div>


  <div class="svgblob bg-blue-50">
    <img class="w-full h-full object-contain" src="/afbeeldingen/i40.png" alt="i-40">
  </div>
</div>

<div class="container grid grid-rows-2 lg:grid-cols:2 mx-auto py-32">
<div class="text-blue-600 p-16 pl-32 text-left text-xl border">
  <h2 class="text-8xl">Hai! Wij zijn Fetum.</h2>
  <p class="mt-4 text-2xl">Wij leveren alles rond de computer op school.</p>
    <p class="mt-4">De nadruk ligt op hoofdtelefoons en oortjes. Van budgetuitvoeringen voor grootverbruikers tot op maat gemaakt voor het onderwijs.</p>
    <p class="mt-4 text-2xl">Muizen, adapters, hoofdtelefoons voor de zorg of musea. We kunnen u altijd van dienst zijn</p>
    <div class="w-full text-center">
    <button class="border text-white bg-blue-600 rounded-lg p-4 mt-8 mx-auto">Meer info</button>
    </div>
</div>
<div>
  <img src="./afbeeldingen/muis.png" alt="rode draadloze muis"/>
</div>

</div>


  <div class="overflow-hidden">
    <!-- The slider itself is a flex grid -->
    <div class="flex img-ticker breedt place-content-around">
      {#each producten as product}
        <div class="flex flex-col text-center mx-4" title="{product.toelichting}">
          <img alt="{product.text}" class="self-center object-contain h-40" src={product.img} />
          <h2>{product.text}</h2>
        </div>
      {/each}
    </div>
  </div>
</div>



<svg width="0" height="0">
  <defs>
    <clipPath id="clip" clipPathUnits="objectBoundingBox">
      <path transform ="scale(0.0018345, 0.00178814)" d="M 0 150 C 0 67.157 67.157 0 150 0 C 188.418 0 223.462 14.443 250 38.194 C 276.538 14.443 311.582 0 350 0 C 432.843 0 500 67.157 500 150 C 500 188.418 485.557 223.462 461.806 250 C 485.557 276.538 500 311.582 500 350 C 500 432.843 432.843 500 350 500 C 311.582 500 276.538 485.557 250 461.806 C 223.462 485.557 188.418 500 150 500 C 67.157 500 0 432.843 0 350 C 0 311.582 14.443 276.538 38.194 250 C 14.443 223.462 0 188.418 0 150 Z" style="fill: rgba(216, 216, 216,0.3); stroke: rgb(216, 216, 216);"/>
    </clipPath>
   </defs>
 </svg>



<style>
  .top {
    height: 100vh;
    width: 100vw;
    background-image: url('/afbeeldingen/hp-136.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .info{
    height: 20vh;
  }



.svgblob{
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
