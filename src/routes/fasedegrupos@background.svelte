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
		height: 100vh;
		overflow: hidden;
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

	@media (max-width: 1024px) {
		.groups-container {
			margin: auto;
			width: 100%;
			overflow: auto;
			height: 100vh;
		}
	}

</style>
