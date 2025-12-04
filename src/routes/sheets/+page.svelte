<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';
	import type { PageData } from './$types';
	import characterSheets from '$lib/data/character-sheets.json';
	
	let { data }: { data: PageData } = $props();
	
	let username = $state('');
	let password = $state('');
	let error = $state('');
	
	onMount(() => {
		auth.init();
		// Redirect if already authenticated
		if ($auth.isAuthenticated) {
			goto('/sheets/view');
		}
	});
	
	function handleLogin() {
		error = '';
		
		const sheet = characterSheets.find(
			s => s.username === username && s.password === password
		);
		
		if (sheet) {
			auth.login(username);
			goto('/sheets/view');
		} else {
			error = 'Nome de usuário ou senha inválidos';
		}
	}
	
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		handleLogin();
	}
</script>

<div class="login-page">
	<div class="login-card">
		<h1>Login de Fichas de Personagem</h1>
		<p class="subtitle">Digite suas credenciais para acessar sua ficha de personagem</p>
		
		<form onsubmit={handleSubmit}>
			<div class="form-group">
				<label for="username">Nome de usuário</label>
				<input
					type="text"
					id="username"
					bind:value={username}
					required
					autocomplete="username"
				/>
			</div>
			
			<div class="form-group">
				<label for="password">Senha</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					autocomplete="current-password"
				/>
			</div>
			
			{#if error}
				<div class="error-message">{error}</div>
			{/if}
			
			<button type="submit" class="login-button">Entrar</button>
		</form>
		
		<div class="available-sheets">
			<p class="hint">Contas disponíveis:</p>
			<ul>
				{#each data.sheets as sheet}
					<li>{sheet.username}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.login-page {
		max-width: 500px;
		margin: 4rem auto;
	}
	
	.login-card {
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 2rem;
	}
	
	h1 {
		font-size: 2rem;
		margin-top: 0;
		color: #fff;
		text-align: center;
	}
	
	.subtitle {
		text-align: center;
		color: #888;
		margin-bottom: 2rem;
	}
	
	.form-group {
		margin-bottom: 1.5rem;
	}
	
	label {
		display: block;
		margin-bottom: 0.5rem;
		color: #ccc;
		font-weight: bold;
	}
	
	input {
		width: 100%;
		padding: 0.75rem;
		background-color: #2a2a2a;
		border: 1px solid #444;
		border-radius: 4px;
		color: #fff;
		font-size: 1rem;
		box-sizing: border-box;
	}
	
	input:focus {
		outline: none;
		border-color: #4a9eff;
	}
	
	.error-message {
		background-color: #5a2a2a;
		border: 1px solid #7a3a3a;
		color: #ff8888;
		padding: 0.75rem;
		border-radius: 4px;
		margin-bottom: 1rem;
	}
	
	.login-button {
		width: 100%;
		padding: 0.75rem;
		background-color: #4a9eff;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	
	.login-button:hover {
		background-color: #5ab3ff;
	}
	
	.login-button:active {
		background-color: #3a8eff;
	}
	
	.available-sheets {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
	}
	
	.hint {
		color: #666;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}
	
	.available-sheets ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.available-sheets li {
		color: #888;
		padding: 0.25rem 0;
	}
</style>

