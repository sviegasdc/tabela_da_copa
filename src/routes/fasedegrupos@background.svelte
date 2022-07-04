<script>
	import GroupCard from '$lib/GroupCard.svelte';
	import '/src/app.css';
	let grupoA = [
		{ name: 'Qatar', abreviacao: 'qa' },
		{ name: 'Equador', abreviacao: 'ec' },
		{ name: 'Senegal', abreviacao: 'sn' },
		{ name: 'Holânda', abreviacao: 'nl' }
	];
	let grupoB = [
		{ name: 'Inglaterra', abreviacao: 'gb-eng' },
		{ name: 'Irã', abreviacao: 'ir' },
		{ name: 'Estados Unidos', abreviacao: 'us' },
		{ name: 'Gales', abreviacao: 'gb-wls' }
	];
	let grupoC = [
		{ name: 'Argentina', abreviacao: 'ar' },
		{ name: 'Arábia Saudita', abreviacao: 'sa' },
		{ name: 'México', abreviacao: 'mx' },
		{ name: 'Polônia', abreviacao: 'pl' }
	];
	let grupoD = [
		{ name: 'França', abreviacao: 'fr' },
		{ name: 'Austrália', abreviacao: 'au' },
		{ name: 'Dinamarca', abreviacao: 'dk' },
		{ name: 'Tunísia', abreviacao: 'tn' }
	];
	let grupoE = [
		{ name: 'Espanha', abreviacao: 'es' },
		{ name: 'Costa Rica', abreviacao: 'cr' },
		{ name: 'Alemanha', abreviacao: 'de' },
		{ name: 'Japão', abreviacao: 'jp' }
	];
	let grupoF = [
		{ name: 'Bélgica', abreviacao: 'be' },
		{ name: 'Canadá', abreviacao: 'ca' },
		{ name: 'Marrocos', abreviacao: 'ma' },
		{ name: 'Croácia', abreviacao: 'hr' }
	];
	let grupoG = [
		{ name: 'Brasil', abreviacao: 'br' },
		{ name: 'Sérvia', abreviacao: 'rs' },
		{ name: 'Suiça', abreviacao: 'ch' },
		{ name: 'Camarôes', abreviacao: 'cm' }
	];
	let grupoH = [
		{ name: 'Portugal', abreviacao: 'pt' },
		{ name: 'Gana', abreviacao: 'gh' },
		{ name: 'Uruguai', abreviacao: 'uy' },
		{ name: 'Coréia do Sul', abreviacao: 'kr' }
	];
</script>

<title> Tabela da Copa - Fase de Grupos </title>

<div class="main">
	<!-- <div class="btn-container">
		<a
			href="./"
			style="text-decoration: none; color: white;width: fit-content;"
		>
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/btn-voltar.svg"
				alt="Voltar"
				width="70px"
				height="70px"
			/>
			<span style="position: relative; z-index: 2; bottom:32px; right:44px;font-size: 12px;"
				>Voltar</span
			>
		</a>
	</div> -->
	<!-- <div class="logo">
		<img
			src="https://www.qatar2022.qa/themes/custom/sc/dist/img/svg/qatar-hero-shadow.svg"
			alt="Logo do Qatar"
			width="250px"
			height="100px"
		/>
	</div> -->

	<div class="groups-container">
		<GroupCard bind:grupo={grupoA} title="GRUPO A" />
		<GroupCard bind:grupo={grupoB} title="GRUPO B" />
		<GroupCard bind:grupo={grupoC} title="GRUPO C" />
		<GroupCard bind:grupo={grupoD} title="GRUPO D" />
		<GroupCard bind:grupo={grupoE} title="GRUPO E" />
		<GroupCard bind:grupo={grupoF} title="GRUPO F" />
		<GroupCard bind:grupo={grupoG} title="GRUPO G" />
		<GroupCard bind:grupo={grupoH} title="GRUPO H" />
	</div>
</div>

<style>
	/* .btn-container {
		display: flex;
		align-self: flex-start;
		margin-left: 10px;
		z-index: 2;
	}
	.btn-container a {
		border: none;
		background-color: transparent;
		height: fit-content;
		width: fit-content;
	} */
	/* .main {
		height: 100vh;
		width: 100vw;
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	} */
	/* .logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		border: 1px solid red;
	} */
	.groups-container {
		width: 100%;
		/* max-width: 1024px; */
		height: 80%;
		border-radius: 27px;
		background-color: transparent;
		color: #fafafa;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		overflow: auto;
		gap: 10px;
	}

	@media (max-width: 1024px) {
		.groups-container {
			margin: auto;
			width: 70%;
			height: 35%;
			overflow-y: scroll;
		}
		.main {
			background-size: contain;
			background-position: center;
			background-color: transparent;
		}
	}
</style>
