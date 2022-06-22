<script context="module">
  import '../app.css';
  import 'animate.css';

  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';
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
  <slot />
</main>
