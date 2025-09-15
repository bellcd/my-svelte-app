import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad<{ dinosaur: { name: string; description: string } }> = async ({
	fetch,
	params
}) => {
	const res = await fetch(`/api/dinosaurs/${params.dinosaur}`);

	if (res.status === 404) {
		return error(404, 'No Dinosaur Found');
	}

	const dinosaur = (await res.json()) as { name: string; description: string };
	return { dinosaur };
};
