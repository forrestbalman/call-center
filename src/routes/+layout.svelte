<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { onMount } from 'svelte';

	onMount(() => {
		import('bootstrap/dist/js/bootstrap.min.js');
	});
</script>

<nav class="navbar navbar-expand-lg text-light">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link text-light text-decoration-underline" href="https://forrestbalman.com"
						>forrestbalman.com</a
					>
				</li>
				<div class="vr"></div>
				<li class="nav-item">
					<a class="nav-link text-light" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-light" href="/play">Play</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-light" href="/learn">Learn</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
<div class="min-vh-100">
	<slot></slot>
</div>

<style>
	.min-vh-100,
	nav {
		background: linear-gradient(
			270deg,
			#006466,
			#065a60,
			#0b525b,
			#144552,
			#1b3a4b,
			#212f45,
			#272640,
			#312244,
			#3e1f47,
			#4d194d
		);
		background-size: 2000% 2000%;

		animation: gradient 15s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
