<script lang="ts">
	import { onMount } from 'svelte';
	
	const allFeatures = [
		{
			title: 'Gravidade Emocional',
			description: 'Planetas cuja gravidade varia conforme o humor local. Seja simpático ou você pode colapsar em direção ao solo a 12 Gs.'
		},
		{
			title: 'Buracos Negros Introvertidos',
			description: 'Preferem não interagir, mas sugam tudo quando ficam nervosos. Evite contato visual.'
		},
		{
			title: 'Naves com Personalidade',
			description: 'Algumas são colaborativas. Outras têm complexos de superioridade. Outras dão conselhos ruins.'
		},
		{
			title: 'Probabilidade Desobediente',
			description: 'Coisas com 0% de chance acontecem diariamente. Coisas com 100% de chance geralmente não.'
		},
		{
			title: 'Anomalias Dramáticas',
			description: 'Fenômenos que surgem apenas para aumentar a tensão narrativa. Não tente explicá-los.'
		},
		{
			title: 'Espectro de Idiotice Cósmica',
			description: 'Regiões onde decisões ruins se tornam estatisticamente atraentes. A tripulação deve ser monitorada.'
		},
		{
			title: 'Temporalmente Inconsistente',
			description: 'O tempo anda, para, recua ou vai pegar café. Tenha sempre um relógio que você não confia.'
		},
		{
			title: 'Formas de Vida',
			description: 'Encontrada em diversos planetas. Infelizmente nenhuma realmente inteligente.'
		},
		{
			title: 'Estrelas com Humor',
			description: 'Algumas estrelas mudam de cor baseado no que assistem. Evite reality shows perto delas.'
		},
		{
			title: 'Cometas Desorganizados',
			description: 'Viajam em rotas completamente aleatórias. GPS não funciona aqui. Confie na sorte.'
		},
		{
			title: 'Nebulosas Tagarelas',
			description: 'Absorvem e repetem conversas antigas. Você pode ouvir discussões de séculos atrás.'
		},
		{
			title: 'Planetas com Complexo de Inferioridade',
			description: 'Tentam se comparar com outros planetas. Frequentemente entram em depressão cósmica.'
		},
		{
			title: 'Asteroides Sensíveis',
			description: 'Se ofendem facilmente. Um comentário ruim pode fazer eles mudarem de rota para te acertar.'
		},
		{
			title: 'Buracos de Minhoca com Fome',
			description: 'Exigem pedágio em forma de snacks. Sem comida, você pode ficar preso no meio do caminho.'
		},
		{
			title: 'Sistemas Solares Competitivos',
			description: 'Competem entre si para ver quem tem mais planetas. Frequentemente "roubam" planetas uns dos outros.'
		}
	];
	
	let displayedFeatures = $state<typeof allFeatures>([]);
	
	function shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}
	
	function selectFeatures() {
		if (typeof window === 'undefined') return;
		
		const isMobile = window.innerWidth <= 480;
		const count = isMobile ? 1 : 3;
		
		const shuffled = shuffleArray(allFeatures);
		displayedFeatures = shuffled.slice(0, count);
	}
	
	onMount(() => {
		selectFeatures();
		
		// Re-selecionar ao redimensionar a janela
		let resizeTimeout: ReturnType<typeof setTimeout>;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(selectFeatures, 150);
		};
		
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(resizeTimeout);
		};
	});
</script>

<div class="overview">
	<h1>Guia de Sobrevivência da Borda Irresponsável do Universo</h1>

	<p class="intro">
		Em algum ponto estatisticamente improvável da galáxia, existe um lugar onde
		a física tira férias, a lógica bebe mais do que deveria e o espaço-tempo
		funciona exclusivamente por teimosia. Este é o setor onde sua campanha se passa.
		Se você está lendo isto, parabéns: você ainda não explodiu, evaporou ou virou
		um pequeno mamífero translúcido por acidente quântico.
	</p>

	<section class="features">
		<h2>Propriedades Conhecidas (e Desconhecidas) do Universo</h2>

		<div class="feature-grid">
			{#each allFeatures as feature}
				<div class="feature-card">
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.overview {
		max-width: 900px;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.4rem;
		margin-bottom: 1rem;
		color: #fff;
	}
	.intro {
		font-size: 1.2rem;
		margin-bottom: 3rem;
		color: #ccc;
		line-height: 1.6;
	}
	.features h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #fff;
	}
	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}
	.feature-card {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1.5rem;
		transition: transform 0.2s, border-color 0.2s;
	}
	.feature-card:hover {
		transform: translateY(-2px);
		border-color: #555;
	}
	.feature-card h3 {
		margin-top: 0;
		color: #fff;
		font-size: 1.3rem;
	}
	.feature-card p {
		color: #bbb;
		margin-bottom: 0;
		line-height: 1.4;
	}
	
	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		
		.intro {
			font-size: 1.1rem;
		}
		
		.features h2 {
			font-size: 1.6rem;
		}
		
		.feature-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
	
	@media (max-width: 480px) {
		h1 {
			font-size: 1.6rem;
		}
		
		.intro {
			font-size: 1rem;
		}
		
		.features h2 {
			font-size: 1.4rem;
		}
		
		.feature-card {
			padding: 1rem;
		}
		
		.feature-card h3 {
			font-size: 1.1rem;
		}
	}
</style>