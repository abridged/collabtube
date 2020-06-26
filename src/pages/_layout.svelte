<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	// background-color: gray;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>



<main>
	<div class="w-5/4 p-8 bg-gray-400">
		<Nav {segment}/>
		<slot></slot>
	</div>
</main>