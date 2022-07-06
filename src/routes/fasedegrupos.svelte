<script>
	import GroupCard from '$lib/GroupCard.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
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

<div class="main">
	<div class="layout-header">
		<div class="menu">
			<SideMenu />
		</div>
		<div class="logo">
			<a href="/">
				<img
					src="https://www.qatar2022.qa/themes/custom/sc/dist/img/svg/qatar-hero-shadow.svg"
					alt="Logo do Qatar"
					width="250px"
					height="80px"
				/>
			</a>
		</div>
	</div>
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
	.main {
		height: 100%;
		background-color: rgb(126, 20, 44);
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/17a5af46055b5fc69fbbd8a4a8d868e1011e13e2/bg.svg);
		background-size: cover;
		background-repeat: no-repeat;
		/* border: 1px solid blue; */
	}
	.groups-container {
		height: 100vh;
		border-radius: 27px;
		color: #fafafa;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		overflow-y: scroll;
		gap: 10px;
	}
	.layout-header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.menu {
		position: absolute;
		top: 20px;
		left: 20px;
		display: flex;
		justify-content: flex-start;
		justify-self: flex-start;
		margin-left: 20px;
	}
	.logo {
		height: 100px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		align-self: center;
	}
	@media (width: 375px) {
		.menu {
			margin-left: auto;
		}
		.logo {
			margin-left: 30px;
		}
	}
	@media (width: 320px) {
		.menu {
			margin-left: auto;
		}
		.logo {
			margin-left: 30px;
		}
	}
</style>
