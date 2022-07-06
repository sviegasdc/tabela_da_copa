<script>
	import { browser } from "$app/env";
	import '/src/app.css';
	import jogos from '$lib/api/jogos.json';
	import GameCard from '$lib/GameCard.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
	import { persistStorage, getStorage, storageExists } from '$lib/api/persistStore.js';

	if (browser)
		if (!storageExists('jogos'))
			persistStorage('jogos', JSON.stringify(jogos));

	let showGamesAlignment = 'center';
	
	// const hdlStadiumFilter = (local)=> {
	// 	let exibitGames =  jogos.filter(j => j.local == local);
	// 	return exibitGames;
	// }

	// const hdlTeamFilter = (pais)=> {
	// 	let exibitGames =  jogos.filter(j => j.pais1 == pais || j.pais2 == pais);
	// 	return exibitGames;
	// }
	
	$: {
		showGamesAlignment = jogos.length >= 5 || jogos.length == 4 ? 'flex-start' : 'center';

		jogos;
	}
</script>

<title> Tabela da Copa - Índice </title>
<div class="main">
	<div class="layout-header">
		<div class="menu">
			<SideMenu />
		</div>
		<div class="logo">
			<a href="/">
				<img
					src="https://www.qatar2022.qa/themes/custom/sc/dist/img/svg/qatar-hero-shadow.svg"
					alt="Logo do Qatar"
					width="250px"
					height="80px"
				/>
			</a>
		</div>
	</div>
	<div class="links">
		<a href="/fasedegrupos">Fase de Grupos</a>
		<a class="fasefinal" href="/fasefinal">Fase Final</a>
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
</div>

<style>
	.main {
		/* height: 100vh; */
		background-color: rgb(126, 20, 44);
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/17a5af46055b5fc69fbbd8a4a8d868e1011e13e2/bg.svg);

		background-position: center center;
		/* border: 1px solid blue; */
		background-size: cover;
	}
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
		margin-right: 150px;
		/* border: 1px solid red; */
	}
	.layout-header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.menu {
		position: absolute;
		top: 20px;
		left: 20px;
		display: flex;
		justify-content: flex-start;
		justify-self: flex-start;
		margin-left: 20px;
	}
	.logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		align-self: center;
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
		.links a {
			font-size: 1.4rem;
			margin: 20px 0px;
			margin-left: 20px;
			margin-right: 20px;

			/* border: 1px solid red; */
		}
	}

	@media (width: 320px) {
		.links a {
			font-size: 1.4rem;
			margin: 20px 0px;
			margin-left: 5px;
			margin-right: 5px;

			/* border: 1px solid red; */
		}
		.menu {
			margin-left: auto;
		}
		.logo {
			margin-left: 30px;
		}
	}

	@media (width: 768px) {
		.links a {
			font-size: 2.4rem;
			margin: 20px 0px;
			margin-left: 60px;
			margin-right: 60px;
			/* border: 1px solid red; */
		}
	}
	@media (min-width: 1000px) {
		.main {
			height: 100vh;
			background-color: rgb(126, 20, 44);
			background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/17a5af46055b5fc69fbbd8a4a8d868e1011e13e2/bg.svg);

			background-position: center center;
			/* border: 1px solid blue; */
			background-size: cover;
		}
	}
	@media (width: 375px) {
		.menu {
			margin-left: auto;
		}
		.logo {
			margin-left: 30px;
		}
	}
</style>
