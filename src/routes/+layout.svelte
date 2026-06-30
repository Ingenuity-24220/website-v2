<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Ingenuity</title>
	<meta name="description" content="Ingenuity #24220, a FIRST Tech Challenge robotics team based in Maryland." />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Ingenuity #24220" />
	<meta property="og:title" content="Ingenuity #24220" />
	<meta property="og:description" content="A FIRST Tech Challenge robotics team based in Maryland of innovators, creators, and leaders." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-image.webp" />
	<meta property="og:url" content="https://ingenuity.team/" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ingenuity #24220" />
	<meta name="twitter:description" content="A FIRST Tech Challenge robotics team based in Maryland of innovators, creators, and leaders." />
	<meta name="twitter:image" content="/og-image.webp" />

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}

<style>
	:global(a) {
		color: #ed2525;
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
