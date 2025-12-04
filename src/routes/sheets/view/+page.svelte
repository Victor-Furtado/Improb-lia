<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';
	import { marked } from 'marked';
	import characterSheets from '$lib/data/character-sheets.json';
	
	let sheetContent = $state('');
	let loading = $state(true);
	
	onMount(() => {
		auth.init();
		
		// Small delay to ensure auth store is initialized
		setTimeout(() => {
			if (!$auth.isAuthenticated || !$auth.username) {
				goto('/sheets');
				return;
			}
			
			// Find the user's sheet
			const userSheet = characterSheets.find(s => s.username === $auth.username);
			
			if (userSheet) {
				sheetContent = marked(userSheet.sheet);
				loading = false;
			} else {
				loading = false;
			}
		}, 0);
	});
	
	function handleLogout() {
		auth.logout();
		goto('/sheets');
	}
</script>

<div class="sheets-view-page">
	<div class="header">
		<h1>Ficha de Personagem</h1>
		<button class="logout-button" onclick={handleLogout}>Sair</button>
	</div>
	
	{#if loading}
		<p>Carregando...</p>
	{:else if sheetContent}
		<div class="sheet-content">
			<div class="markdown-content">
				{@html sheetContent}
			</div>
		</div>
	{:else}
		<div class="error">
			<p>Ficha de personagem não encontrada.</p>
		</div>
	{/if}
</div>

<style>
	.sheets-view-page {
		max-width: 900px;
		margin: 0 auto;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}
	
	h1 {
		font-size: 2.5rem;
		margin: 0;
		color: #fff;
	}
	
	.logout-button {
		padding: 0.5rem 1rem;
		background-color: #5a2a2a;
		color: #ff8888;
		border: 1px solid #7a3a3a;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	
	.logout-button:hover {
		background-color: #6a3a3a;
	}
	
	.sheet-content {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 2rem;
	}
	
	.markdown-content {
		color: #e0e0e0;
		line-height: 1.8;
	}
	
	.markdown-content :global(h1) {
		color: #fff;
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid #333;
		padding-bottom: 0.5rem;
	}
	
	.markdown-content :global(h2) {
		color: #fff;
		font-size: 1.6rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(h3) {
		color: #fff;
		font-size: 1.3rem;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	
	.markdown-content :global(p) {
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(li) {
		margin-bottom: 0.5rem;
		color: #ccc;
	}
	
	.markdown-content :global(code) {
		background-color: #2a2a2a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		color: #4a9eff;
	}
	
	.markdown-content :global(pre) {
		background-color: #2a2a2a;
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(pre code) {
		background-color: transparent;
		padding: 0;
	}
	
	.error {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		color: #ff8888;
	}
	
	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
		
		h1 {
			font-size: 2rem;
		}
		
		.sheet-content {
			padding: 1.5rem;
		}
		
		.markdown-content :global(h1) {
			font-size: 1.6rem;
		}
		
		.markdown-content :global(h2) {
			font-size: 1.4rem;
		}
		
		.markdown-content :global(h3) {
			font-size: 1.2rem;
		}
	}
	
	@media (max-width: 480px) {
		.header {
			gap: 0.75rem;
		}
		
		h1 {
			font-size: 1.6rem;
		}
		
		.logout-button {
			width: 100%;
			padding: 0.65rem;
			font-size: 0.9rem;
		}
		
		.sheet-content {
			padding: 1rem;
		}
		
		.markdown-content {
			font-size: 0.95rem;
		}
		
		.markdown-content :global(h1) {
			font-size: 1.4rem;
		}
		
		.markdown-content :global(h2) {
			font-size: 1.2rem;
		}
		
		.markdown-content :global(h3) {
			font-size: 1.1rem;
		}
		
		.markdown-content :global(ul),
		.markdown-content :global(ol) {
			margin-left: 1.25rem;
		}
		
		.markdown-content :global(pre) {
			padding: 0.75rem;
			font-size: 0.85rem;
		}
	}
</style>

