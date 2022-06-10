<script>
  import '../app.css';
  import 'animate.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #ffffff;
  }
</style>
