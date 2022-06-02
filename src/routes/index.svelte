<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="welcome">
    <picture>
      <img src="Logo.png" alt="Fetum logo" />
      <source srcset="svelte-welcome.webp" type="image/webp" />
      <img src="svelte-welcome.png" alt="Welcome" />
    </picture>
  </div>
  <p>
    Onze webhoster stopte ermee. <br /><br />Niet helemaal opeens, maar dit soort zaken belanden
    altijd onder op de stapel. <br />Met andere woorden: we zijn nog al traag geweest. Vandaar deze
    uitleg. <br /><br /><br />We zijn er gewoon en business as usual. <br /><br />De website is er
    maandag weer.
  </p>
  <div class="payoff">
    Grote waard 36 | 2675 BX Honselersdijk | 0174 769 132 | verkoop@fetum.nl<br /> Fetum juni 2022
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
  }

  p {
    font-size: 16px;
    width: 60%;
    text-align: center;
  }

  img {
    width: 100%;
  }

  .payoff {
    font-size: 12px;
    width: 80%;
    text-align: center;
    position: absolute;
    bottom: 5vh;
    color: rgba(73, 70, 70, 0.685);
  }
</style>
