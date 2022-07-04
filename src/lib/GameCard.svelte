<script>
	import '/src/app.css';
	export let pais1 = 'Brasil';
	export let abrP1 = 'br';
	export let pais2 = 'Alemanha';
	export let abrP2 = 'de';
	export let golsP1 = 0;
	export let golsP2 = 0;
	// export let grupo = 'A';
	export let local = 'All Bait Stadium';
	export let data = '21/11/2022';
	export let hora = 12;
	// export let tipoJogo = 'final';
	const nomeStadiumformat = () => {
		let str = local.toLocaleLowerCase()
		return str.replace(/\s+/g,'');
	}
</script>

<div class="main-container">
	<div class="card-header">
		<span class="country toright">
			<p>{pais1}</p>
			<img
				src="https://flagcdn.com/{abrP1}.svg"
				alt={pais1}
				class="flag"
				width="30px"
				height="20px"
			/>
		</span>
		<span class="versus" />
		<span class="country toleft">
			<img
				src="https://flagcdn.com/{abrP2}.svg"
				alt={abrP2}
				class="flag"
				width="30px"
				height="20px"
			/>
			<p>{pais2}</p>
		</span>
	</div>
	<div class="card-content">
		<div class="ranking">
			<span class="rank-value"> <input value={golsP1} class="goal-input" placeholder="0" /> </span>
			<span class="rank-value"> : </span>
			<span class="rank-value"> <input value={golsP2} class="goal-input" placeholder="0" /> </span>
		</div>
	</div>
	<div class="card-footer" style="background-image: url('https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/estadios/{nomeStadiumformat()}.jpg');">
		<div class="place-date">
			<span> {local} </span>
			<span> {data} </span>
			<span> {hora}:00 </span>
		</div>
	</div>
</div>

<style>
	.country {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 120px;
		font-weight: bold;
	}
	.toright {
		display: flex;
		justify-content: right;
	}
	.toleft {
		display: flex;
		justify-content: left;
	}
	.flag {
		margin: 0 10px;
	}
	.main-container {
		width: 360px;
		height: 300px;
		border-radius: 27px;
		background-color: rgba(250, 250, 250, 0.3);
		color: #fafafa;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin: 0 10px;
		overflow: auto;
	}
	.card-header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 40%;
		width: 100%;
		padding: 10px 0;
		font-weight: bold;
	}
	.versus {
		background-image: url('https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/losango.svg');
		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
		width: 15%;
		height: 50px;
		color: #fafafa;
		font-weight: bold;
		text-align: center;
		/* border: 1px solid black; */
	}
	.card-content {
		background-color: #6b1329;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-direction: row;
		height: 20%;
		width: 100%;
		padding: 10px 0;
	}
	.card-footer {
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.ranking {
		display: flex;
		background-image: url('https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/placar.svg');
		background-repeat: no-repeat;
		background-position: center;
		width: 200px;
		justify-content: center;
		align-items: center;
		background-size: 40%;
		font-weight: bold;
		font-size: 1.35em;
	}
	.rank-value {
		/* padding: 5px; */
		margin-bottom: 5px;
	}
	.goal-input {
		width: 20px;
		text-align: center;
	}
	.place-date {
		width: 100%;
		background-color: #7b1343aa;
		height: 40%;
		color: yellow;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.18em;
	}
</style>
