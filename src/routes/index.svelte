<script>
	import GameCard from '$lib/GameCard.svelte';
	import '/src/app.css';
	let jogos = ['', '', ''];
</script>

<div class="main">
	<div class="logo">
		<img
			src="https://www.qatar2022.qa/themes/custom/sc/dist/img/svg/qatar-hero-shadow.svg"
			alt="Logo do Qatar"
            width="250px"
            height="250px"
		/>
	</div>
    <div class="links">
        <a href="/">Fase de Grupos</a>
        <a href="/">Fase Final</a>
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
		height: 150px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		/* border: 1px solid red; */
	}
	.links{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}
    .links a{
        color:white;
        text-decoration: none;
        font-size: 50px;
		margin: 20px;
        
    }
	@media (max-width: 768px){
		.show-games{
			flex-direction: column;
		}
	}
</style>
