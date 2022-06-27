<script context="module">
  import '../app.css';
</script>

<script>
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/header/Footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&family=Varela+Round&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="font-Raleway overflow-x-hidden">
  <Header />
  <div class="w-full h-6" />
  <slot />
  <Footer />
</main>
