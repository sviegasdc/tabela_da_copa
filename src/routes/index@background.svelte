<script>
	import GameCard from '$lib/GameCard.svelte';
	import '/src/app.css';
	//precisa pôr os dados reais!!!!
	let jogos = [
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		''
	];
	let moreThan6Games = false;
	//6 aqui é um número mágico, então tem grandes chances de dar errado, rever se possível
	$: {
		moreThan6Games = jogos.length > 6 ? true : false;
		console.log(moreThan6Games);
	}
</script>

<div class="links">
	<a href="/fasedegrupos" style="margin-right:150px">Fase de Grupos</a>
	<a href="/fasefinal" style="margin-right: 150px;">Fase Final</a>
</div>
<div class="show-games">
	<div class:spacer={moreThan6Games} />
	{#each jogos as jogo}
		<div>
			<GameCard />
		</div>
	{/each}
</div>

<style>
	.show-games {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
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
	.spacer {
		margin: 0 500px;
	}

	@media (max-width: 768px) {
		.show-games {
			flex-direction: column;
		}
	}
</style>
