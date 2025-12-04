<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<div class="diary-page">
	<a href="/diaries" class="back-link">← Voltar aos Diários</a>
	
	<div class="diary-content">
		<h1>{data.diary.title}</h1>
		<p class="date">{data.diary.date}</p>
		
		<div class="markdown-content">
			{@html data.diary.content}
		</div>
	</div>
</div>

<style>
	.diary-page {
		max-width: 900px;
		margin: 0 auto;
	}
	
	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		color: #4a9eff;
		text-decoration: none;
		transition: color 0.2s;
	}
	
	.back-link:hover {
		color: #6bb3ff;
	}
	
	.diary-content {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 2rem;
	}
	
	h1 {
		font-size: 2.5rem;
		margin-top: 0;
		color: #fff;
	}
	
	.date {
		color: #888;
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}
	
	.markdown-content {
		color: #e0e0e0;
		line-height: 1.8;
	}
	
	.markdown-content :global(h1),
	.markdown-content :global(h2),
	.markdown-content :global(h3),
	.markdown-content :global(h4) {
		color: #fff;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(h1) {
		font-size: 2rem;
	}
	
	.markdown-content :global(h2) {
		font-size: 1.6rem;
	}
	
	.markdown-content :global(h3) {
		font-size: 1.3rem;
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
	
	.markdown-content :global(blockquote) {
		border-left: 4px solid #555;
		padding-left: 1rem;
		margin-left: 0;
		color: #bbb;
	}
	
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		
		.diary-content {
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
		
		.markdown-content :global(ul),
		.markdown-content :global(ol) {
			margin-left: 1.5rem;
		}
	}
	
	@media (max-width: 480px) {
		h1 {
			font-size: 1.6rem;
		}
		
		.diary-content {
			padding: 1rem;
		}
		
		.date {
			font-size: 1rem;
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

