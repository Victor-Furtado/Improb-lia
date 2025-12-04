<script lang="ts">
	import { onMount } from 'svelte';
	
	let images: string[] = [];
	let memes: string[] = [];
	let loading = true;
	
	onMount(async () => {
		// In a real implementation, you might want to list files from a directory
		// For now, we'll use a placeholder approach where images are added to static/images/ and static/memes/
		// You can manually add images and reference them here, or implement a file listing API endpoint
		
		// Example: If you have images, you would reference them like:
		// images = ['/images/example1.jpg', '/images/example2.png'];
		// memes = ['/memes/meme1.jpg', '/memes/meme2.png'];
		
		loading = false;
	});
</script>

<div class="images-page">
	<h1>Imagens & Memes</h1>
	
	{#if loading}
		<p>Carregando...</p>
	{:else if images.length === 0 && memes.length === 0}
		<div class="empty-state">
			<p>Ainda não há imagens ou memes. Adicione-os aos diretórios <code>static/images/</code> e <code>static/memes/</code>.</p>
			<p class="hint">Referencie-os neste componente para exibi-los.</p>
		</div>
	{:else}
		{#if images.length > 0}
			<section class="image-section">
				<h2>Imagens</h2>
				<div class="image-grid">
					{#each images as image}
						<div class="image-item">
							<img src={image} alt="Imagem da campanha" />
						</div>
					{/each}
				</div>
			</section>
		{/if}
		
		{#if memes.length > 0}
			<section class="image-section">
				<h2>Memes</h2>
				<div class="image-grid">
					{#each memes as meme}
						<div class="image-item">
							<img src={meme} alt="Meme da campanha" />
						</div>
					{/each}
				</div>
			</section>
		{/if}
	{/if}
</div>

<style>
	.images-page {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #fff;
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
	
	.hint {
		margin-top: 1rem;
		color: #888;
		font-size: 0.9rem;
	}
	
	.image-section {
		margin-bottom: 3rem;
	}
	
	.image-section h2 {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		color: #fff;
	}
	
	.image-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
	}
	
	.image-item {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
		transition: transform 0.2s, border-color 0.2s;
	}
	
	.image-item:hover {
		transform: scale(1.02);
		border-color: #555;
	}
	
	.image-item img {
		width: 100%;
		height: auto;
		display: block;
	}
	
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		
		.image-section h2 {
			font-size: 1.5rem;
		}
		
		.image-grid {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: 1rem;
		}
		
		.empty-state {
			padding: 1.5rem;
		}
	}
	
	@media (max-width: 480px) {
		h1 {
			font-size: 1.6rem;
		}
		
		.image-section h2 {
			font-size: 1.3rem;
		}
		
		.image-grid {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		
		.empty-state {
			padding: 1rem;
			font-size: 0.9rem;
		}
	}
</style>

