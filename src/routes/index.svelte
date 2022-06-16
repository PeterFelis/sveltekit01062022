<script context="module">
  export const prerender = true;
</script>

<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Fetum web site - hoofdtelefoons en hotel tv" />
</svelte:head>

<div class="min-h-screen max-h-screen">
  <section>
    <div class="welcome">
      <picture>
        <img src="fetumlogo.png" alt="Fetum logo" />
      </picture>
    </div>
    <p>
      Onze webhoster stopte ermee. <br /><br />Niet helemaal opeens, maar dit soort zaken belanden
      altijd onder op de stapel. <br />Met andere woorden: we zijn nog al traag geweest. Vandaar
      deze uitleg. <br /><br /><br />We zijn er gewoon en business as usual. <br /><br />De website
      is er maandag (13-06-2022) weer. Even bellen of een mailtje werkt ook ;-)
    </p>
    <div class="payoff">
      Grote waard 36 | 2675 BX Honselersdijk | 0174 769 132 | verkoop@fetum.nl<br /> Fetum juni 2022
    </div>
  </section>
</div>

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
    margin-top: 10vh;
    color: rgba(73, 70, 70, 0.685);
  }

  @media only screen and (max-width: 800px) {
    .payoff {
      position: absolute;
      bottom: 5vh;
    }
  }
</style>
