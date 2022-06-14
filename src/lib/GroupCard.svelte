<script>
	export let grupo = [{name:'',abreviacao:'qa'}];
	export let title = '';
</script>

<div class="container">
	<div class="card-header">
		<p class="title">{title}</p>
	</div>

	<div class="times">
		{#each grupo as time}
			<p class="nome_times">
				<img
					src= https://flagcdn.com/{time.abreviacao}.svg
					alt={time.name}
                    width="40px"
                    height="24px"
                    style="margin-right: 5px;"
				/>
				{time.name}
			</p>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 300px;
		height: 270px;
		/* margin: 15px; */
		border-radius: 16px;
		background-color: rgba(250, 250, 250,0.5);
		color: black;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
        font-weight: bold;
        color:white;
	}
	.times {
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 80%;
		width: 100%;
		border-radius: 0 0 16px 16px;
	}
	.nome_times {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 93%;
		justify-content: flex-start;
		/* border: 1px solid red; */
        padding-top: 3px;
        padding-left: 10px;
	}
	.card-header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		height: 30px;
		width: 100%;
		padding:10px 0;
		font-weight: bold;
		border-bottom: 2px solid #e1b101;
	}
</style>
