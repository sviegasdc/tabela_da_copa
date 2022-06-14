<script>
    import '/src/app.css';
	import TeamCard from '$lib/TeamCard.svelte'
	let games = ['','','']
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
		{#each games as game}
			<TeamCard/>
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
    .logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		/* border: 1px solid red; */
	}
</style>