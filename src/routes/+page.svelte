<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let dinosaurs = data.dinosaurs;
</script>

<main>
	<h1>Dinosaurs App</h1>
	<p>Click on a dinosaur to view more information.</p>
	{#each dinosaurs as dinosaur (dinosaur.name)}
		<a href={dinosaur.name.toLowerCase()} class="dinosaur">{dinosaur.name}</a>
	{/each}
</main>
