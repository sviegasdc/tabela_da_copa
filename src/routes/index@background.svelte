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
	<a href="/fasedegrupos">Fase de Grupos</a>
	<a class="fasefinal"href="/fasefinal">Fase Final</a>
</div>
<div class="show-games" style="justify-content: {showGamesAlignment};">
	{#each jogos as jogo}
		<div class="game">
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
		/* border: 1px solid red; */
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
		padding: 20px 0;
		max-width: 100%;
		/* border: 1px solid red; */
	}
	.links a {
		color: white;
		text-decoration: none;
		font-size: 3rem;
		margin: 20px 50px;
		border: 2px solid white;
		border-radius: 8px;
		padding: 5px 10px;
		margin-right:150px;
		/* border: 1px solid red; */
	}
	@media (max-width: 768px) {
		.show-games {
			flex-direction: column;
			overflow-y: scroll;
			height: 100vh;
			/* border: 1px solid red; */
		}
		.game {
			margin-bottom: 10px;
		}
		.links a{
			font-size: 1.4rem;
			margin: 20px 0px;
			margin-left:20px;
			margin-right:20px;;

			/* border: 1px solid red; */
		}
	}

	@media (width: 320px) {
		.links a{
			font-size: 1.4rem;
			margin: 20px 0px;
			margin-left:5px;
			margin-right:5px;;

			/* border: 1px solid red; */
		}
	}

	@media (width: 768px) {
		.links a{
			font-size: 2.4rem;
			margin: 20px 0px;
			margin-left:60px;
			margin-right:60px;
			/* border: 1px solid red; */
		}
	}

</style>
