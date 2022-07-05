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
		background: rgb(126,20,44);
		background: linear-gradient(145deg, rgba(126,20,44,1) 0%, rgba(94,16,38,1) 46%, rgba(56,11,26,1) 79%);
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
	}

	@media (max-width: 1920px) {
		.main {
			background: rgb(126,20,44);
			background: linear-gradient(145deg, rgba(126,20,44,1) 0%, rgba(94,16,38,1) 46%, rgba(56,11,26,1) 79%);
			width: 100vw;
		}
	}

	@media (max-width: 1440px) {
		.main {
			width: 100vw;
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
	}   .logo {
		margin-left: 30px;
		}
</style>
