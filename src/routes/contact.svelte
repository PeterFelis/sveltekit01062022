<script>
  import { onMount } from 'svelte/internal';

  onMount(() => {
    var london = ol.proj.fromLonLat([-0.12755, 51.507222]);
    var moscow = ol.proj.fromLonLat([37.6178, 55.7517]);
    var istanbul = ol.proj.fromLonLat([28.9744, 41.0128]);
    var rome = ol.proj.fromLonLat([12.5, 41.9]);
    var bern = ol.proj.fromLonLat([7.4458, 46.95]);
    //const fetum = ol.proj.fromLonLat([52.0100592, 4.2214638]);
    const fetum = ol.proj.fromLonLat([4.2214638, 52.0100592]);

    var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: fetum,
        zoom: 17
      })
    });

    console.log(map);
  });
</script>

<div id="map" />

hai!

<iframe
  title="fetum"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.8254131692074!2d4.221463816410517!3d52.010059179720905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5dac3b3643789%3A0x490ecab243450195!2sFetum!5e0!3m2!1sen!2snl!4v1655135966847!5m2!1sen!2snl"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen="true"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
/>

<style>
  #map {
    width: 800px;
    height: 800px;
  }
</style>
