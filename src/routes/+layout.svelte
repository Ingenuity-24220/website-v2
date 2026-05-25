<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}

<style>
	:global(a) {
		color: #ed2525;
		text-decoration: none;
	}

	:global(a:visited) {
		color: #af1b1b;
	}

	:global(a:hover) {
		color: darkred;
		text-decoration: underline;
	}

	:global(body, html) {
		margin: 0;
		padding: 0;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 500;
		font-style: normal;
		background-color: black;
	}
</style>
