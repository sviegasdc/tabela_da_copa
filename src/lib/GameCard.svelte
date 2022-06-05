<script>
	import '/src/app.css';
</script>

<div class="main-container">
	<div class="card-header">
		<span class="country">
			Brasil
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/brasil.png"
				alt="Brasil"
				class="flag"
				width="30px"
				height="20px"
			/>
		</span>
		<span class="versus">
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/losango.svg"
				alt="versus"
				width="20px"
				height="20px"
			/>
		</span>
		<span class="country">
			<img
				src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/alemanha.png"
				alt="Alemanha"
				class="flag"
				width="30px"
				height="20px"
			/>
			Alemanha
		</span>
	</div>
	<div class="card-content">Aqui o conteúdo</div>
	<div class="card-footer">Aqui o footer</div>
</div>

<style>
	.country{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 30%;
	}
	.flag{
		margin: 0 10px;
	}
	.main-container {
		width: 300px;
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
		height: 33.33%;
		width: 92%;
		padding: 10px;
		font-weight: bold;
	}
	.versus {
		width: 30%;
		height: 20px;
		color: #fafafa;
		font-weight: bold;
		text-align: center;
		/* border: 1px solid black; */
	}
	.card-content {
		display: flex;
		flex-direction: row;
		height: 33.33%;
		width: 99%;
		padding: 10px 0;
	}
	.card-footer {
		display: flex;
		flex-direction: row;
		height: 33.33%;
		width: 92%;
		padding: 10px;
	}
	@media (max-width: 768px) {
	}
</style>
