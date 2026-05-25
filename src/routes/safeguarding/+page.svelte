<script lang="ts">
    import Safeguarding from '$lib/assets/documents/safeguarding.md';
    import Footer from '$lib/components/footer.svelte';
    import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
    <title>Safeguarding | Ingenuity</title>
</svelte:head>

<Header />

<div class="content">
    <div class="doc">
        <Safeguarding />
    </div>
</div>

<Footer />

<style>
    .content {
        --gutter: clamp(1rem, 4vw, 4rem);

        display: flex;
        flex-direction: column;
        background: black;
        min-height: 100vh;
        margin: 0;
        color: white;
        padding-inline: var(--gutter);
        padding-block: clamp(1rem, 4vh, 4rem);
        box-sizing: border-box;
        overflow-x: clip;
    }

    .doc {
        text-align: left;
        max-width: 80ch;
        width: 100%;
        line-height: 1.6;
    }

    .doc :global(h1) {
        font-size: clamp(1.75rem, 3.5vw, 3rem);
        line-height: 1.15;
        margin-block: 1rem;
    }

    .doc :global(h2) {
        font-size: clamp(1.4rem, 2.5vw, 2rem);
        line-height: 1.2;
        margin-block: 1rem;
    }

    .doc :global(h3) {
        font-size: clamp(1.15rem, 1.8vw, 1.5rem);
        margin-block: 0.75rem;
    }

    .doc :global(p),
    .doc :global(li) {
        font-size: clamp(1rem, 1.15vw, 1.25rem);
    }

    .doc :global(ul),
    .doc :global(ol) {
        padding-left: 1.5rem;
    }
</style>
