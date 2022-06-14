<script>
	import '/src/app.css';
</script>

<div class="main-container">
	<div class="card-header">
		<span class="country toright">
			<p>
				Brasil
			</p>
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/brasil.png"
				alt="Brasil"
				class="flag"
				width="30px"
				height="20px"
			/>
		</span>
		<span class="versus">
		</span>
		<span class="country toleft">
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/alemanha.png"
				alt="Alemanha"
				class="flag"
				width="30px"
				height="20px"
			/>
			<p>
				Alemanha
			</p>
		</span>
	</div>
	<div class="card-content">
		<div class="ranking">
			<span class="rank-value">
				0
			</span>
			<span class="rank-value">
				:
			</span>
			<span class="rank-value">
				0
			</span>
		</div>
	</div>
	<div class="card-footer">
		<div class='place-date'>
			<span>
				Al Bayt Stadium
			</span>
			<span>
				23/11
			</span>
		</div>
	</div>
</div>

<style>
	.country{
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
	.flag{
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
		background-color: #6B1329;
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
		background-image: url('https://s2.glbimg.com/pnyfacy0drc425hEg_fEcATTuw8=/620x455/e.glbimg.com/og/ed/f/original/2021/12/07/al-bayt-stadium-casaejardim.jpeg');
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
		padding: 5px;
	}
	.place-date {
		width: 100%;
		background-color: #7B1343AA;
		height: 30%;
		color: yellow;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.18em;
	}

	@media (max-width: 768px) {
	}
</style>
