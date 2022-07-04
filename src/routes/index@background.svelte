<script>
	import GameCard from '$lib/GameCard.svelte';
	import '/src/app.css';
	import jogos from '$lib/api/jogos.json';
	console.log(jogos);

	let showGamesAlignment = 'center';
	//6 aqui é um número mágico, então tem grandes chances de dar errado, rever se possível
	$: {
		showGamesAlignment = jogos.length >= 5 || jogos.length == 4 ? 'flex-start' : 'center';

		jogos;
	}
</script>

<title> Tabela da Copa - Índice </title>

<div class="links">
	<a href="/fasedegrupos" style="margin-right:150px">Fase de Grupos</a>
	<a href="/fasefinal" style="margin-right: 150px;">Fase Final</a>
</div>
<div class="show-games" style="justify-content: {showGamesAlignment};">
	{#each jogos as jogo}
		<div>
			<GameCard
				pais1={jogo.pais1}
				abrP1={jogo.abrP1}
				pais2={jogo.pais2}
				abrP2={jogo.abrP2}
				golsP1={jogo.golsP1}
				golsP2={jogo.golsP2}
				local={jogo.local}
				data={jogo.data}
				hora={jogo.hora}
			/>
		</div>
	{/each}
</div>

<style>
	.show-games {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		overflow: auto;
		padding: 20px 0;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
		padding: 20px 0;
	}
	.links a {
		color: white;
		text-decoration: none;
		font-size: 50px;
		margin: 20px 50px;
		border: 2px solid white;
		border-radius: 8px;
		padding: 5px 10px;
	}
	@media (max-width: 768px) {
		.show-games {
			flex-direction: column;
		}
	}
</style>
