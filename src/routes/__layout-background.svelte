<script>
	import SideMenu from '$lib/SideMenu.svelte';
</script>

<div class="main">
	<div class="layout-header">
		<!--<div class="menu">
			<SideMenu />

			<

		</div> -->
		<div class="menu">
			<a href="/">
				<img
					src="https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/484ed665d074d77a64244452be9cc9a5b0f619f2/btn-voltar.svg"
					alt="Botão de voltar"
					width="80px"
					height="80px"
				/>
			</a>
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
	<slot />
</div>

<style>
	.main {
		height: 100vh;
		max-width: 100%;
		background-color: #7e142c;
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/17a5af46055b5fc69fbbd8a4a8d868e1011e13e2/bg.svg);
		background-repeat: no-repeat;
		background-position: center center;
		/* border: 1px solid blue; */
		background-size: cover;
		/* border: 1px solid red; */
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
		top: 6px;
		left: 10px;
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

	@media (max-width: 1440px) {
		.main {
			height: 100vh;
			overflow-y: hidden;
		}
	}

	@media (max-width: 768px) {
		.main {
			height: 100vh;
			overflow-y: hidden;
		}
	}

	@media (max-width: 375px) {
		.main {
			height: 100vh;
			overflow-y: hidden;
		}
		.menu {
			margin-left: 1px;
			margin-right: 2px;
		}
	}
	.logo {
		margin-left: 30px;
	}
	@media (max-width: 470px) {
		.menu {
			margin-left: auto;
		}
		.logo {
			margin-left: 30px;
		}
	}
	@media (max-width: 375px) {
		.menu {
			margin-left: auto;
		}
		.menu img {
			width: 70px;
		}
		.logo {
			margin-left: 70px;
		}
	}
</style>
