<script>
	import GameCard from '$lib/GameCard.svelte';
	import MenuHamburger from '$lib/MenuHamburger.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
	import '/src/app.css';
	let jogos = ['', '', ''];
	let isOpen = false;
</script>

<div class="main">
	<div class="menu">
		<!-- <MenuHamburger/> -->
		<SideMenu />
	</div>
	<div class="logo">
		<img
			src="https://www.qatar2022.qa/themes/custom/sc/dist/img/svg/qatar-hero-shadow.svg"
			alt="Logo do Qatar"
			width="250px"
			height="250px"
		/>
	</div>
	<div class="links">
		<a href="/fasedegrupos" style="margin-right:150px">Fase de Grupos</a>
		<a href="/fasefinal" style="margin-right: 150px;">Fase Final</a>
	</div>
	<div class="show-games">
		{#each jogos as jogo}
			<GameCard />
		{/each}
	</div>
</div>

<style>
	.main {
		height: 100vh;
		width: 100vw;
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
	}
	.show-games {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		overflow: auto;
	}
	.logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		/* border: 1px solid red; */
	}
	.links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}
	.links a {
		color: white;
		text-decoration: none;
		font-size: 50px;
		/*top e bottom -  left e right*/
		margin: 20px 50px;
	}
	/* media queary */
	@media (max-width: 768px) {
		.show-games {
			flex-direction: column;
		}
	}
</style>
