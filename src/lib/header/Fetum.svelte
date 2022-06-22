<script>
  import { goto } from "$app/navigation";

 const naarHuis =() =>
  goto('/');

</script>

<div class="w-20 fixed logo cursor-pointer" on:click={naarHuis}>
  <img src="/fetumlogo.png" alt="Fetum ons logo" />
  <p class="text-xs text-center">0174-769132</p>
</div>

<style>
  .logo {
    top: 20px;
    right: 60px;
  }
</style>
