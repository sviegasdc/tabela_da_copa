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
	<h3 class="titulo-coluna">Oitavas de Final</h3>
	<div class="primeira-coluna">
		{#each gamesOitavasA as game}
			<TeamCard />
		{/each}
	</div>

	<h3 class="titulo-coluna">Quartas de Final</h3>
	<div class="segunda-coluna">
		{#each gamesQuartasA as game}
			<TeamCard />
		{/each}
	</div>

	<h3 class="titulo-coluna">Semifinais</h3>
	<div class="terceira-coluna">
		{#each gamesSemifinais as game}
			<TeamCard />
		{/each}
	</div>

	<h3 class="titulo-coluna">Final</h3>
	<div class="quarta-coluna">
		<TeamCard />
	</div>
</div>

<style>
	.titulo-coluna {
		font-family: sans-serif;
		color: white;
		display: flex;
	}

	.game-tree {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
		flex-wrap: nowrap;
		/* background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png) ;
		background-repeat: no-repeat;
		background-size: auto auto;
		background-position: center center;
		background-attachment: fixed; */
		overflow: scroll;
		height: 85%;
		/* width: 100vw; */
	}

	.primeira-coluna {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-right: 10%;
		margin-left: 10%;
	}
	.segunda-coluna {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0px;
		padding-right: 10%;
		margin-left: 10%;
	}
	.terceira-coluna {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0px;
		padding-right: 10%;
		margin-left: 10%;
	}
	.quarta-coluna {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0px;
	}

	@media(max-width: 1440px) {
		.titulo-coluna {
			margin-left: 37%;
		}

		.game-tree {
			flex-direction: column;
			margin-left: 3%;
			height: 70%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 45%;
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

	@media(max-width: 1024px) {
		.titulo-coluna {
			margin-left: 37%;
		}

		.game-tree {
			flex-direction: column;
			margin-left: 3%;
			height: 80%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 45%;
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
		.titulo-coluna {
			margin-left: 150%;
		}

		.game-tree {
			flex-direction: column;
			margin-left: 3%;
			height: 80%;
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

	@media(max-width: 425px) {
		.titulo-coluna {
			margin-left: 340%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 350%;
		}
		.segunda-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 350%;
		} 
		.terceira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 350%;
		}
		.quarta-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 340%;
		}
	}

	@media(max-width: 375px) {
		.titulo-coluna {
			margin-left: 417%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 425%;
		}
		.segunda-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 425%;
		} 
		.terceira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 425%;
		}
		.quarta-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 417%;
		}
	}

	@media(max-width: 320px) {
		.titulo-coluna {
			margin-left: 490%;
		}

		.primeira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 500%;
		}
		.segunda-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 500%;
		} 
		.terceira-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 500%;
		}
		.quarta-coluna {
			flex-direction: row;
			gap: 0;
			margin-left: 490%;
		}
	}
</style>
