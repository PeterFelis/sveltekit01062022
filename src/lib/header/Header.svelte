<script>
  import { page } from '$app/stores';
</script>

<nav class="container mx-auto flex flex-row">
  <div
    class="font-Raleway text-base mr-6 relative"
    class:active={$page.url.pathname === '/admin/invoegen'}
  >
    <a sveltekit:prefetch href="/admin/invoegen">invoegen producten</a>
  </div>
  <div
    class="font-Raleway text-base mr-6 relative"
    class:active={$page.url.pathname === '/admin/pi'}
  >
    <a sveltekit:prefetch href="/admin/pi">producten</a>
  </div>
  <div class="font-Raleway text-base mr-6 relative" class:active={$page.url.pathname === '/index2'}>
    <a sveltekit:prefetch href="/index2">index</a>
  </div>
  <div
    class="font-Raleway text-base mr-6 relative"
    class:active={$page.url.pathname === '/contact'}
  >
    <a sveltekit:prefetch href="/contact">contact</a>
  </div>
  <div
    class="font-Raleway text-base mr-6 relative"
    class:active={$page.url.pathname === '/leveringsvoorwaarden'}
  >
    <a sveltekit:prefetch href="/leveringsvoorwaarden">leveringsvoorwaarden</a>
  </div>
</nav>

<style>
  .active::after {
    position: absolute;
    width: 2rem;
    height: 2rem;
    content: '';
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid red;
    border-bottom: 0.5rem solid transparent;
    top: -1rem;
    left: 0.7rem;
    transform: translate3d(-20px, 20px, 0);
    border-radius: 8px;
  }
</style>
