<script>
	let moving = false;
	let left=40;
  let top=20;

	function onMouseDown() {
		moving = true;
    console.log('down');
	}
	
	function onMouseMove(e) {
		if (moving) {
		  left += e.movementX;
			top += e.movementY;
      console.log('moving');
		}
	}
	
	function onMouseUp() {
		moving = false;
    console.log('up');
	}
	

</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		position: absolute;
	}
</style>


<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />




<div class="w-20 draggable" 
    style="left: {left}px; top: {top}px;"
    on:mousedown={onMouseDown}>

  <a href="https://fetum.nl">
    <img src="/fetumlogo.png" alt="Fetum ons logo" />
  </a>
  <p class="text-xs text-center">0174-769132</p>
</div>



