<script>
	import '/src/app.css';
	let isOpen = false;
	let displayStadium = false;
	let displaySelecao = false;
	let displayByDate = false;
	let selecoes = [
		{ name: 'Catar' },
		{ name: 'Equador' },
		{ name: 'Senegal' },
		{ name: 'Holanda' },
		{ name: 'Inglaterra' },
		{ name: 'Irã' },
		{ name: 'EUA' },
		{ name: 'País de Gales' },
		{ name: 'Argentina' },
		{ name: 'Arábia Saudita' },
		{ name: 'México' },
		{ name: 'Polônia' },
		{ name: 'França' },
		{ name: 'Dinamarca' },
		{ name: 'Tunísia' },
		{ name: 'Espanha' },
		{ name: 'Alemanha' },
		{ name: 'Japão' },
		{ name: 'Bélgica' },
		{ name: 'Canadá' },
		{ name: 'Marrocos' },
		{ name: 'Croácia' },
		{ name: 'Brasil' },
		{ name: 'Sérvia' },
		{ name: 'Suíça' },
		{ name: 'Camarões' },
		{ name: 'Portugal' },
		{ name: 'Gana' },
		{ name: 'Uruguai' },
		{ name: 'Coreia do Sul' }
	];
</script>

<button on:click={() => (isOpen = !isOpen)} class="control-button">
	<img
		src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/hamburguer.svg"
		alt="hamburguer"
		width="30px"
		height="30px"
	/>
</button>
{#if isOpen}
	<div class="sideMenu">
		<button
			on:click={() => (isOpen = !isOpen)}
			class="control-button"
			style="align-self: flex-end;margin: 8px 8px 8px 30px ;border: 1px solid red;"
		>
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/x-white.svg"
				alt="hamburguer"
				width="30px"
				height="30px"
			/>
		</button>
		<!-- lista de links massa -->
		<button on:click={() => (displayStadium = !displayStadium)} class="dropDownOppenner">
			Estadios
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 40px;"
			/>
		</button>
		{#if displayStadium}
			<a href="sas">Estádio</a>
		{/if}
		<button on:click={() => (displaySelecao = !displaySelecao)} class="dropDownOppenner">
			Seleções
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 40px;"
			/>
		</button>
		{#if displaySelecao}
			<div style="width: 100%;overflow: auto; padding-bottom: 100px;">
				{#each selecoes as selecao}
					<div class="card">{selecao.name}</div>
				{/each}
			</div>
		{/if}
		<button on:click={() => (displayByDate = !displayByDate)} class="dropDownOppenner">
			Jogos por Dia
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 15px;"
			/>
		</button>
		{#if displayByDate}
			<a href="sas">masssa</a>
		{/if}
	</div>
{/if}

<style>
	.card {
		color: white;
		border: 1px solid red;
		height: 30px;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		overflow: auto;
		padding: 10px;
	}
	.dropDownOppenner {
		background-color: cadetblue;
		width: 100%;
		min-height: fit-content;
		height: 30px;
		color: white;
	}
	.control-button {
		width: 40px;
		height: 40px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	.sideMenu {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		width: 300px;
		height: 800px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: #3c0a1c;
	}
</style>
