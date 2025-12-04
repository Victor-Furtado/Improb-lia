<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { auth } from '$lib/stores/auth';

	let { children } = $props();
	
	onMount(() => {
		auth.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Improbália</title>
</svelte:head>

<Nav />
<main class="main-content">
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #0d0d0d;
		color: #e0e0e0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
	}
	
	.main-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		min-height: calc(100vh - 80px);
	}
</style>
