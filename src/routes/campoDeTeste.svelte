<script>
	import GroupCard from '$lib/GroupCard.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
	import jogos from '$lib/api/jogos.json';
	

	const hdlStadiumFilter = (local)=> {
		let exibitGames =  jogos.filter(j => j.local == local);
		return exibitGames;
	}

	const hdlTeamFilter = (pais)=> {
		let exibitGames =  jogos.filter(j => j.pais1 == pais || j.pais2 == pais);
		return exibitGames;
	}

	// const hdlDateFilter = (data)=> {
	// 	let exibitGames =  jogos.filter(j => j.data == data);
	// }

	let selectedStadium = '';
	
	// $:{
	// 	selectedStadium
	// 	console.log('TESTANDO',hdlTeamFilter(selectedStadium))
	// }
</script>

<div class="main">
	{selectedStadium}
	<select bind:value = {selectedStadium}>
		<option>Brasil</option>
		<option>23/11/2022</option>
		<option>24/11/2022</option>
	</select>
</div>

<style>
	.main {
		height: 100%;
		background-color: rgb(126, 20, 44);
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/17a5af46055b5fc69fbbd8a4a8d868e1011e13e2/bg.svg);
		background-size: cover;
		background-repeat: no-repeat;
		border: 1px solid blue;
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
</style>
