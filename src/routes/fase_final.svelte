<script>
	import '/src/app.css';
	import TeamCard from '$lib/TeamCard.svelte';
	let gamesOitavasA = ['', '', '', '', '', '', '', ''];
	let gamesOitavasB = ['', '', '', '', '', '', '', ''];
	let gamesQuartasA = ['', '', '', ''];
	let gamesQuartasB = ['', '', '', ''];
	let gamesSemifinais = ['', ''];
	let final = [''];
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
	<div class="game-tree">
		<div class="oitavas-a">
			{#each gamesOitavasA as game}
				<TeamCard />
			{/each}
		</div>

		<div class="quartas-a">
			{#each gamesQuartasA as game}
				<TeamCard />
			{/each}
		</div>

		<div class="semifinal-a">
			{#each gamesSemifinais as game}
				<TeamCard />
			{/each}
		</div>

		<div class="final">
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/copo.png"
				alt="Taça"
				height="40px"
				width="40px"
			/>
			{#each final as game}
				<TeamCard />
			{/each}
		</div>

		<div class="semifinal-b">
			{#each gamesSemifinais as game}
				<TeamCard />
			{/each}
		</div>

		<div class="quartas-b">
			{#each gamesQuartasB as game}
				<TeamCard />
			{/each}
		</div>

		<div class="oitavas-b">
			{#each gamesOitavasB as game}
				<TeamCard />
			{/each}
		</div>
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
	.logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		/* border: 1px solid red; */
	}
	.game-tree {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: nowrap;
	}
	.final{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
