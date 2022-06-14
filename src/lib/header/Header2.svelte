<script>
  import { page } from '$app/stores';
</script>

<header class="flex flex-row h-12" >
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/admin/invoegen'}>
        <a sveltekit:prefetch href="/admin/invoegen">invoegen producten</a>
      </li>
      <li class:active={$page.url.pathname === '/admin/pi'}>
        <a sveltekit:prefetch href="/admin/pi">producten</a>
      </li>
    </ul>

  <div style="">
    <a href="https://fetum.nl">
      <img class="bg-contain h-fit" alt="Fetum logo" src="/fetumlogo.png"/>
    <p>0174-769132</p>
    </a>
  </div>
  </nav>
</header>


<style>
  header {
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: purple;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  .corner {
    width: 14em;
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    right: 5em;
    top: 5em;
    padding: 2em;
    font-size: 0.6em;
    text-align: center;
    border-radius: 5px;
  }

  .corner img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 2em;
  }
</style>
