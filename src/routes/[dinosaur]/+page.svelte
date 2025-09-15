<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let dinosaur = (data as any).dinosaur as { name: string; description: string };
</script>

<div>
	<h1>{dinosaur.name}</h1>
	<p>{dinosaur.description}</p>
	<a href="/">Back to all dinosaurs</a>
</div>
