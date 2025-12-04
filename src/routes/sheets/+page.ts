import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import characterSheets from '$lib/data/character-sheets.json';

export const load: PageLoad = async () => {
	return {
		sheets: characterSheets.map(s => ({
			username: s.username
			// Don't expose passwords or sheet content
		}))
	};
};

