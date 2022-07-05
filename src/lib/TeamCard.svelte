<div class="main">
	<div class="times">
		<div class="time-box">
			<img
				class="bandeira"
				src="https://www.gstatic.com/onebox/sports/logos/inverse-crest.svg"
				alt="sem time"
				width="40px"
				height="24px"
				padding-left="20px"
			/>
			<p class="time1">A determinar</p>
		</div>

		<div class="time-box">
			<img
				class="bandeira"
				src="https://www.gstatic.com/onebox/sports/logos/inverse-crest.svg"
				alt="sem time"
				width="40px"
				height="24px"
				padding-left="20px"
			/>
			<p>A determinar</p>
		</div>
	</div>
</div>

<!-- espaçamento a cada 2 tem que ser maior -->
<style>
	.main {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 10px;
		width: 200px;
		height: 100px;
		background-color: #bf533f;
		border-radius: 13px;
	}
	.times {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 100%;
		justify-content: flex-start;
		padding-top: 3px;
		padding-left: 10px;
	}

	.time1 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-bottom: 10px;
	}

	.time-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		width: 100%;
		padding-top: 10px;
	}
</style>
