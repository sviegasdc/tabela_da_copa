<script>
	import '/src/app.css';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let isOpen = false;
	let displayStadium = false;
	let displaySelecao = false;
	let displayByDate = false;
	let estadios = [
		{ name: 'Lusail Stadium' },
		{ name: 'Khalifa International Stadium' },
		{ name: 'Al Thumama Stadium' },
		{ name: 'Al Janoub Stadium' },
		{ name: 'All Bayt Stadium' },
		{ name: 'Ahmad Bin Ali Stadium' },
		{ name: 'Education City Stadium' },
		{ name: 'Stadium 974' }
	];
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
	let datas = [
		{ name: '21/11/2022' },
		{ name: '22/11/2022' },
		{ name: '23/11/2022' },
		{ name: '24/11/2022' },
		{ name: '25/11/2022' },
		{ name: '26/11/2022' },
		{ name: '27/11/2022' },
		{ name: '28/11/2022' },
		{ name: '29/11/2022' },
		{ name: '30/11/2022' },
		{ name: '01/12/2022' },
		{ name: '02/12/2022' }
	];
	let selectedStadium = '';
	let selectedTeam = '';
	let selectedData = '';

	const hdlStadiumClick = () => {
		dispatch('stadiumSelect', selectedStadium);
	};
	const hdlTeamClick = () => {
		dispatch('teamSelect', selectedTeam);
	};
	const hdlDataClick = () => {
		console.log('escolheram essa data', selectedData);
		dispatch('dataSelect', selectedData);
	};
	$: {
		selectedStadium;
		selectedTeam;
		selectedData;
	}
</script>

<button on:click={() => (isOpen = !isOpen)} class="control-button">
	<img
		src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/filter.svg"
		alt="filtrar jogos"
		width="30px"
		height="30px"
	/> Filtrar jogos
</button>
{#if isOpen}
	<div class="sideMenu">
		<button
			on:click={() => (isOpen = !isOpen)}
			class="control-button"
			style="align-self: flex-end;margin: 8px 8px 8px 30px ;"
		>
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/x-white.svg"
				alt="hamburguer"
				width="30px"
				height="30px"
			/>
		</button>

		<!-- <button on:click={() => (displayStadium = !displayStadium)} class="dropDownOppenner">
			Estadios
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 40px;"
			/>
		</button>
		{#if displayStadium} -->
		<h4 class="filtrar">Filtragem por estádio</h4>
		<select
			class="select"
			bind:value={selectedStadium}
			on:change={() => hdlStadiumClick()}
			style="width:100%;overflow: auto; overflow-X: hidden;"
		>
			{#each estadios as estadio}
				<option class="card">{estadio.name}</option>
			{/each}
		</select>
		<!-- {/if} -->
		<!-- <button on:click={() => (displaySelecao = !displaySelecao)} class="dropDownOppenner">
			Seleções
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 40px;"
			/>
		</button>
		{#if displaySelecao} -->
		<h4 class="filtrar2">Filtragem por equipe</h4>
		<select
			class="select"
			bind:value={selectedTeam}
			on:change={() => hdlTeamClick()}
			style="width: 100%;overflow: auto;"
		>
			{#each selecoes as selecao}
				<option class="card">{selecao.name}</option>
			{/each}
		</select>
		<!-- {/if} -->
		<!-- <button on:click={() => (displayByDate = !displayByDate)} class="dropDownOppenner">
			Jogos por Dia
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/triangulo.svg"
				alt="jogos por dia"
				width="12px"
				height="12px"
				style="padding-left: 15px;"
			/>
		</button>
		{#if displayByDate} -->
		<h4 class="filtrar3">Filtragem por data</h4>
		<select
			class="select"
			bind:value={selectedData}
			on:change={() => hdlDataClick()}
			style="width: 100%;overflow: auto;"
		>
			{#each datas as data}
				<option class="card">{data.name}</option>
			{/each}
		</select>
		<!-- {/if} -->
	</div>
{/if}

<style>
	h4 {
		color: white;
	}

	.card {
		color: white;
		/* border: 1px solid red; */
		height: 30px;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		overflow: auto;
		padding: 4px;
	}
	.select {
		color: white;
		font-weight: bold;
		font-size: 18px;
		background-color: #611f38;
		padding-bottom: 2px;
		outline: none;
	}

	.filtrar2 {
		padding-top: 20px;
	}

	.filtrar3 {
		padding-top: 20px;
	}

	h4 {
		font-size: 20px;
	}

	/* .dropDownOppenner {
		background-color: cadetblue;
		width: 100%;
		min-height: fit-content;
		height: 30px;
		color: white;
		font-size: 20px;
	} */
	.control-button {
		color: white;
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
