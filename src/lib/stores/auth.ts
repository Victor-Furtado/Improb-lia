import { writable } from 'svelte/store';

export interface AuthState {
	isAuthenticated: boolean;
	username: string | null;
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthState>({
		isAuthenticated: false,
		username: null
	});

	return {
		subscribe,
		login: (username: string) => {
			set({
				isAuthenticated: true,
				username
			});
			// Store in sessionStorage for persistence
			if (typeof window !== 'undefined') {
				sessionStorage.setItem('auth', JSON.stringify({ username, isAuthenticated: true }));
			}
		},
		logout: () => {
			set({
				isAuthenticated: false,
				username: null
			});
			if (typeof window !== 'undefined') {
				sessionStorage.removeItem('auth');
			}
		},
		init: () => {
			if (typeof window !== 'undefined') {
				const stored = sessionStorage.getItem('auth');
				if (stored) {
					try {
						const auth = JSON.parse(stored);
						if (auth.isAuthenticated && auth.username) {
							set({
								isAuthenticated: true,
								username: auth.username
							});
						}
					} catch (e) {
						// Invalid stored data, ignore
					}
				}
			}
		}
	};
}

export const auth = createAuthStore();

