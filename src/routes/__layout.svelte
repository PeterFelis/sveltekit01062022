<script>
  import '../app.css';
  import 'animate.css';
  import Header from '$lib/header/Header.svelte';
  import Fetum from '$lib/header/Fetum.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&family=Varela+Round&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="font-Raleway">
  <Header />

  <Fetum />
  <div class="bg-achtergrond">
    <slot />
  </div>
</main>
