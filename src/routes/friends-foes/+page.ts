import type { PageLoad } from './$types';
import friendsFoesData from '$lib/data/friends-foes.json';

export const load: PageLoad = async () => {
	return {
		friends: friendsFoesData.friends,
		foes: friendsFoesData.foes
	};
};

