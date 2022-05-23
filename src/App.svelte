<script lang="ts">
	import Conway from './Conway.svelte'
</script>

<main>
	<Conway />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			background: #131313;
		}
	}
</style>