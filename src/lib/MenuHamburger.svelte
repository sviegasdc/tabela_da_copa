<script>
	export let isOpen = false;
	let estadios = [
		{ name: 'Lusail Stadium' },
		{ name: 'Khalifa International Stadium' },
		{ name: 'Al Thumama Stadium' },
		{ name: 'Al Janoub Stadium' },
		{ name: 'Al Bayt Stadium' },
		{ name: 'Al Rayyan Stadium' },
		{ name: 'Ahmad Bin Ali Stadium' },
		{ name: 'Ras Abu Aboud Stadium' }, 
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
</script>

<button on:click={() => (isOpen = !isOpen)} class="oppen-button">
	<img
		src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/hamburguer.svg"
		alt="hamburguer"
		width="100%"
		height="100%"
	/>
</button>

{#if isOpen}
	<div class="navbar">
		<a href="/" class="subnavbtn">Jogos do dia</a>

		<div class="subnav">
			<button class="subnavbtn">Estádios</button>
			<div id="nav-estadio" class="subnav-content">
				{#each estadios as estadio}
					<a href="#estadio" class="estadios">{estadio.name}</a>
				{/each}
			</div>
		</div>

		<div class="subnav">
			<button class="subnavbtn">Seleções</button>

			<div class="subnav-content">
				{#each selecoes as selecao}
					<a href="#selecao" class="selecoes">{selecao.name}</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.navbar {
		height: fit-content;
		/* width: 300px; */
		background-color: transparent;
	}
	.oppen-button {
		width: 40px;
		height: 40px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	.subnav-content {
		background-color: #3c0a1c;
		display: none;
		color: white;
		overflow: auto;
        border-radius: 10px;
		height: 350px;
		/* margin-left: 50px; */
	}

	.subnav-content#nav-estadio{
		height: 305px;
	}

	.subnav:hover .subnav-content {
		display: block;
        overflow: auto;
	}

	.estadios {
		/* padding-left: 50px; */
		padding: 10px;
		text-decoration: none;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.estadios:hover {
		background-color: rgba(250, 250, 250, 0.3);
	}
	.selecoes {
		/* margin-left: 50px; */
		background-color: #3c0a1c;
		padding: 10px;
		text-decoration: none;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* height: 100px; */
		/* overflow-y: scroll; */
	}
	.selecoes:hover {
		background-color: rgba(250, 250, 250, 0.3);
	}
	img {
		margin-left: 10px;
	}
	.navbar {
		position: fixed;
	}
	.subnavbtn {
		color: white;
		background-color: transparent;
		outline: none;
		border: none;
		font-size: 20px;
		text-decoration: none;
		color: white;
	}
</style>
