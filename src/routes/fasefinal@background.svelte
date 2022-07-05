<script>
	import '/src/app.css';
	import TeamCard from '$lib/TeamCard.svelte';
	let gamesOitavasA = ['br', 'br', 'br', 'br', 'br', 'br', 'br', 'br'];
	let gamesQuartasA = ['br', 'br', 'br', 'br'];
	let gamesSemifinais = ['br', 'br'];
	let final = 'br';
</script>

<title> Tabela da Copa - Fases Finais </title>

<div class="game-tree">
	<div class="primeira-coluna">
		{#each gamesOitavasA as game}
			<TeamCard />
		{/each}
	</div>
	<div class="segunda-coluna">
		{#each gamesQuartasA as game}
			<TeamCard />
		{/each}
	</div>
	<div class="terceira-coluna">
		{#each gamesSemifinais as game}
			<TeamCard />
		{/each}
	</div>
	<div class="quarta-coluna">
		<!-- final -->
		<TeamCard />
	</div>
</div>

<style>
	.game-tree {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		/* background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png) ;
		background-repeat: no-repeat;
		background-size: auto auto;
		background-position: center center;
		background-attachment: fixed; */
		overflow: scroll;
		height: 85%;
	}

	.primeira-coluna {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-right: 10%;
	}
	.segunda-coluna {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		padding-right: 10%;
	}
	.terceira-coluna {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 220px;
		padding-right: 10%;
	}
	.quarta-coluna {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 100px;
	}
	@media(max-width: 1024px) {
		.game-tree {
			flex-direction: column;
			margin-left: 3%;
			height: 60%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
		}
		.segunda-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 45%;
		} 
		.terceira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 45%;
		}
		.quarta-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 37%;
		}
	
	}

	@media(max-width: 768px) {
		.game-tree {
			flex-direction: column;
			margin-left: 3%;
			height: 60%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 160%;
		}
		.segunda-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 160%;
		} 
		.terceira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 160%;
		}
		.quarta-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 150%;
		}
	}
</style>
