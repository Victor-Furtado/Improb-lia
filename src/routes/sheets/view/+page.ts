import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import characterSheets from '$lib/data/character-sheets.json';

export const load: PageLoad = async ({ url }) => {
	// Check authentication via URL param or session
	// In a real app, you'd check the auth store server-side
	// For now, we'll handle auth client-side
	return {};
};

