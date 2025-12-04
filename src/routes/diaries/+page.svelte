<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<div class="diaries-page">
	<h1>Diários Espaciais</h1>
	
	{#if data.diaries && data.diaries.length > 0}
		<div class="diary-list">
			{#each data.diaries as diary}
				<a href="/diaries/{diary.slug}" class="diary-card">
					<h2>{diary.title}</h2>
					<p class="date">{diary.date}</p>
				</a>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<p>Ainda não há entradas de diário. Adicione arquivos markdown em <code>src/lib/data/space-diaries/</code> e atualize <code>diary-list.json</code>.</p>
		</div>
	{/if}
</div>

<style>
	.diaries-page {
		max-width: 900px;
		margin: 0 auto;
	}
	
	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #fff;
	}
	
	.diary-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	
	.diary-card {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s, border-color 0.2s;
	}
	
	.diary-card:hover {
		transform: translateX(5px);
		border-color: #555;
	}
	
	.diary-card h2 {
		margin-top: 0;
		color: #fff;
		font-size: 1.5rem;
	}
	
	.diary-card .date {
		color: #888;
		margin-bottom: 0;
	}
	
	.empty-state {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
	}
	
	.empty-state code {
		background-color: #2a2a2a;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		color: #4a9eff;
	}
	
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		
		.diary-card {
			padding: 1rem;
		}
		
		.diary-card h2 {
			font-size: 1.3rem;
		}
		
		.empty-state {
			padding: 1.5rem;
		}
	}
	
	@media (max-width: 480px) {
		h1 {
			font-size: 1.6rem;
		}
		
		.diary-card {
			padding: 0.75rem;
		}
		
		.diary-card h2 {
			font-size: 1.1rem;
		}
		
		.diary-card .date {
			font-size: 0.9rem;
		}
		
		.empty-state {
			padding: 1rem;
			font-size: 0.9rem;
		}
	}
</style>

