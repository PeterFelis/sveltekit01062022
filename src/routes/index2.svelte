<script context="module">
  export const prerender = true;
  import Header from '$lib/header/Header.svelte';

  const producten = [
    { img: '/scroller/305.png', text: 'HP-305 1 meter' },
    { img: '/scroller/2705.jpg', text: 'HP-2705' },
    { img: '/scroller/2710.jpg', text: 'HP-2710' },
    { img: '/hp-136.jpg', text: 'HP-136' },
    { img: '/scroller/adap.jpg', text: 'adapter' },
    { img: '/scroller/blauw.jpg', text: 'blauw' },
    { img: '/scroller/muis.jpg', text: 'muis' },
    { img: '/scroller/305.png', text: 'HP-305 1 meter' }
  ];
</script>

<div>
  <div class="top relative">
    <Header />
    <p
      class="absolute bottom-16 w-full flex place-content-center font-sans text-purple-700 text-2xl text-center px-32 animate__bounceIn"
    >
      Hoofdtelefoons en andere (disposable) electronica voor zorg, <br />educatie en wie we verder
      van dienst kunnen zijn.
    </p>
  </div>

  <div class="overflow-hidden">
    <!-- The slider itself is a flex grid -->
    <div class="flex img-ticker breedt place-content-around">
      {#each producten as product}
        <div class="flex flex-col text-center mx-4">
          <img alt="iets" class="self-center object-contain h-40" src={product.img} />
          <h2>{product.text}</h2>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .top {
    height: 80vh;
    width: 100vw;
    background-image: url('/afbeeldingen/hp-136.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    animation: ticker-kf 3s linear infinite alternate;
  }

  .breedt {
    width: 200vw;
  }
</style>
