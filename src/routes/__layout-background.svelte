<script>
	import SideMenu from '$lib/SideMenu.svelte';
</script>

<div class="main">
	<div class="layout-header">
		<div class="menu">
			<!-- <MenuHamburger/> -->
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
	<slot />
</div>

<style>
	.main {
		height: 100vh;
		width: 100vw;
		background-image: url(https://raw.githubusercontent.com/ArnoldSGR/icons_tabela_da_copa/main/background.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
	}
	.layout-header {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.menu {
		/* border: 1px solid red; */
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
		/* border: 1px solid red; */
	}
</style>
