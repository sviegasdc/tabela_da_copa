<script>
	import '/src/app.css';
</script>

<div class="main-container">
	<div class="card-header">Aqui o header</div>
	<div class="card-content">Aqui o conteúdo</div>
	<div class="card-footer">Aqui o footer</div>
</div>

<style>
	.main-container {
		width: 300px;
		height: 300px;
		border-radius: 27px;
		background-color: rgba(250, 250, 250, 0.3);
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		margin: 0 10px;
	}
	.card-header {
		display: flex;
		flex-direction: row;
		border: 1px solid red;
		height: 33.33%;
		width: 92%;
        padding: 10px;
	}
	.card-content {
		display: flex;
		flex-direction: row;
		border: 1px solid red;
		height: 33.33%;
		width: 100%;
        padding: 10px 0 ;
	}
	.card-footer {
		display: flex;
		flex-direction: row;
		border: 1px solid red;
		height: 33.33%;
		width: 92%;
        padding: 10px;
	}
</style>
