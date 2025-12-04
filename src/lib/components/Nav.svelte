<script lang="ts">
	import { page } from '$app/stores';
	
	const navItems = [
		{ href: '/', label: 'Visão Geral' },
		// { href: '/images', label: 'Imagens & Memes' },
		{ href: '/diaries', label: 'Diários Espaciais' },
		{ href: '/friends-foes', label: 'Amigos & Inimigos' },
		{ href: '/sheets', label: 'Fichas de Personagem' }
	];
</script>

<nav class="nav">
	<div class="nav-container">
		<a href="/" class="nav-logo">
			<img src="/images/logo.png" alt="Logo do RPG" />
			<span class="logo-text">Improbália</span>
		</a>
		<ul class="nav-list">
			{#each navItems as item}
				<li>
					<a 
						href={item.href} 
						class="nav-link"
						class:active={$page.url.pathname === item.href}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		background-color: #1a1a1a;
		border-bottom: 2px solid #333;
		padding: 1rem 0;
	}
	
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.nav-logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		height: 50px;
		gap: 0.75rem;
	}
	
	.nav-logo img {
		height: 100%;
		width: auto;
		max-height: 50px;
		object-fit: contain;
	}
	
	.logo-text {
		font-size: 1.5rem;
		font-weight: bold;
		color: #fff;
	}
	
	.nav-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;
	}
	
	.nav-link {
		color: #ccc;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.2s;
	}
	
	.nav-link:hover {
		background-color: #333;
		color: #fff;
	}
	
	.nav-link.active {
		background-color: #444;
		color: #fff;
	}
	
	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			gap: 1rem;
			padding: 0 1rem;
		}
		
		.nav-logo {
			height: 40px;
		}
		
		.logo-text {
			font-size: 1.2rem;
		}
		
		.nav-list {
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem;
			width: 100%;
		}
		
		.nav-link {
			padding: 0.4rem 0.8rem;
			font-size: 0.9rem;
		}
	}
	
	@media (max-width: 480px) {
		.nav {
			padding: 0.75rem 0;
		}
		
		.nav-logo {
			height: 35px;
		}
		
		.logo-text {
			font-size: 1rem;
		}
		
		.nav-list {
			gap: 0.25rem;
		}
		
		.nav-link {
			padding: 0.35rem 0.6rem;
			font-size: 0.85rem;
		}
	}
</style>

