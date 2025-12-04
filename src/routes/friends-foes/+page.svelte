<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
	
	const threatTranslations: Record<string, string> = {
		'high': 'Alto',
		'medium': 'Médio',
		'low': 'Baixo'
	};
	
	function translateThreat(threat: string): string {
		return threatTranslations[threat.toLowerCase()] || threat;
	}
</script>

<div class="friends-foes-page">
	<h1>Amigos & Inimigos</h1>
	
	<div class="sections">
		<section class="friends-section">
			<h2>Amigos</h2>
			{#if data.friends && data.friends.length > 0}
				<div class="character-grid">
					{#each data.friends as friend}
						<div class="character-card friend">
							{#if friend.image}
								<div class="character-image">
									<img src={friend.image} alt={friend.name} />
								</div>
							{/if}
							<div class="character-info">
								<h3>{friend.name}</h3>
								<p class="role">{friend.role}</p>
								<p class="description">{friend.description}</p>
								<p class="location">📍 {friend.location}</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="empty">Ainda não há amigos registrados.</p>
			{/if}
		</section>
		
		<section class="foes-section">
			<h2>Inimigos</h2>
			{#if data.foes && data.foes.length > 0}
				<div class="character-grid">
					{#each data.foes as foe}
						<div class="character-card foe">
							{#if foe.image}
								<div class="character-image">
									<img src={foe.image} alt={foe.name} />
								</div>
							{/if}
							<div class="character-info">
								<h3>{foe.name}</h3>
								<p class="threat">Nível de Ameaça: <span class="threat-{foe.threat.toLowerCase()}">{translateThreat(foe.threat)}</span></p>
								<p class="description">{foe.description}</p>
								<p class="location">📍 Última vez visto: {foe.lastSeen}</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="empty">Ainda não há inimigos registrados.</p>
			{/if}
		</section>
	</div>
</div>

<style>
	.friends-foes-page {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #fff;
	}
	
	.sections {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	
	section h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: #fff;
		border-bottom: 2px solid #333;
		padding-bottom: 0.5rem;
	}
	
	.friends-section h2 {
		border-color: #2a5a2a;
	}
	
	.foes-section h2 {
		border-color: #5a2a2a;
	}
	
	.character-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}
	
	.character-card {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
		transition: transform 0.2s, border-color 0.2s;
		display: flex;
		flex-direction: row;
		min-height: 150px;
	}
	
	.character-card.friend {
		border-left: 4px solid #2a5a2a;
	}
	
	.character-card.foe {
		border-left: 4px solid #5a2a2a;
	}
	
	.character-card:hover {
		transform: translateY(-2px);
		border-color: #555;
	}
	
	.character-image {
		width: 150px;
		min-width: 150px;
		overflow: hidden;
		background-color: #2a2a2a;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	.character-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.character-info {
		padding: 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.character-card h3 {
		margin-top: 0;
		color: #fff;
		font-size: 1.4rem;
	}
	
	.character-card .role,
	.character-card .threat {
		color: #888;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		font-weight: bold;
	}
	
	.character-card .threat-high {
		color: #ff4444;
	}
	
	.character-card .threat-medium {
		color: #ffaa44;
	}
	
	.character-card .threat-low {
		color: #44ff44;
	}
	
	.character-card .description {
		color: #ccc;
		margin-bottom: 1rem;
		line-height: 1.6;
	}
	
	.character-card .location {
		color: #888;
		font-size: 0.9rem;
		margin-bottom: 0;
	}
	
	.empty {
		color: #666;
		font-style: italic;
	}
</style>

