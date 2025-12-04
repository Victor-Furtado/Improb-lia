import type { PageLoad } from './$types';
import diaryList from '$lib/data/space-diaries/diary-list.json';

export const load: PageLoad = async () => {
	return {
		diaries: diaryList
	};
};

