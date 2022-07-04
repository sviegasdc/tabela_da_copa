<script>
	import '/src/app.css';
	import TeamCard from '$lib/TeamCard.svelte';
	let gamesOitavasA = ['br', 'br', 'br', 'br', 'br', 'br', 'br', 'br'];
	let gamesQuartasA = ['br', 'br', 'br', 'br'];
	let gamesSemifinais = ['br', 'br'];
	let final = ['br'];
</script>

<title> Tabela da Copa - Fases Finais </title>

<div class="main">
	<div class="game-tree">
		<div class="oitavas-a">
			{#each gamesOitavasA as game}
				<TeamCard flag={game} />
			{/each}
		</div>

		<div class="quartas-a">
			{#each gamesQuartasA as game}
				<TeamCard flag={game} />
			{/each}
		</div>

		<div class="semifinal-a">
			{#each gamesSemifinais as game}
				<TeamCard flag={game} />
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
				<TeamCard flag={game} />
			{/each}
		</div>
	</div>
</div>

<style>
	.main {
		/* height: 100vh; */
		/* width: 100vw; */
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
	}
	/* .logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		border: 1px solid red;
	} */
	.game-tree {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: nowrap;
	}
	.final {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 1440px) {
		.main {
			width: 80%;
			height: 80%;
			overflow-y: scroll;
			overflow-x: hidden;
			margin: auto;
		}
	}

	/*mobile tablet*/
	@media (max-width: 768px) {
	}
</style>
