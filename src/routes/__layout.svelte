<script>
  import '../app.css';
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
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    background-image: radial-gradient(
      circle at 60.36% 21.54%,
      #ffffff 0,
      #ffeeff 25%,
      #f8d7f8 50%,
      #e2c1e9 75%,
      #ceafde 100%
    );
  }
</style>
