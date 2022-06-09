<script>
  export let product;

  let prijzen = [];
  product.prijzen.forEach((item) =>
    prijzen.push({
      prijs: parseInt(item.prijs).toFixed(2),
      aantal: item.aantal,
      prijsperstuk: (parseInt(item.prijs) / parseInt(item.aantal)).toFixed(2)
    })
  );
  product.prijzen = prijzen;
  console.log(product.prijzen);
</script>

<div
  class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />

  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {product.model}
    </h5>

    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {@html product.omschrijving}
    </p>
    <h2>prijzen</h2>
    <ul>
      {#each product.prijzen as prijs}
        <li>
          {prijs.aantal} stuks: € {prijs.prijs} (per stuk: {prijs.prijsperstuk})
        </li>
      {/each}
    </ul>
  </div>
</div>
