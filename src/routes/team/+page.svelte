<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import close from '$lib/assets/close.svg';
	import { teamGroups, members, type Member } from '$lib/team';

	let dialog: HTMLDialogElement | null = $state(null);
	let selected: Member | null = $state(null);

	function openDialog(member: Member) {
		selected = member;
		dialog?.showModal();
		// keep the url in sync so a bio can be shared
		replaceState(resolve(`/team#${member.slug}`), {});
	}

	function clearHash() {
		replaceState(resolve('/team'), {});
	}

	// backdrop clicks land on the dialog itself rather than its contents
	function closeOnBackdrop(event: MouseEvent) {
		if (event.target === dialog) {
			dialog?.close();
		}
	}

	// /team#slug (e.g. from the home page) opens that person's bio straight away
	onMount(() => {
		const member = members.find((m) => m.slug === page.url.hash.slice(1));
		if (member) {
			openDialog(member);
		}
	});
</script>

<svelte:head>
	<title>Team | Ingenuity</title>
</svelte:head>

<div class="hero-bg">
	<Header />
	<div class="hero-content">
		<h1>Meet the Team</h1>
		<h2 class="hero-sub">We are <i><u>Ingenuity.</u></i></h2>
	</div>
</div>

<div class="content">
	<div class="groups">
		{#each teamGroups as group (group.name)}
			<section class="group">
				<h2><u>{group.name}</u></h2>
				<div class="member-grid">
					{#each group.members as member (member.slug)}
						<button type="button" class="member-item" onclick={() => openDialog(member)}>
							<div class="member-container">
								<img src={member.img} alt={member.name} />
								<div class="member-hover" aria-hidden="true">
									<span class="button-2">Meet {member.name}</span>
								</div>
							</div>
							<p>{member.name}</p>
							<p class="member-subtitle">{member.role}</p>
						</button>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<Footer />

<dialog class="bio-modal" bind:this={dialog} onclick={closeOnBackdrop} onclose={clearHash}>
	{#if selected}
		<button type="button" class="modal-close" onclick={() => dialog?.close()} aria-label="Close">
			<img src={close} alt="" />
		</button>
		<div class="bio-grid">
			<div class="bio-person">
				<img src={selected.img} alt={selected.name} class="modal-avatar" />
				<h2>{selected.name}</h2>
				<p class="member-subtitle">{selected.role}</p>
			</div>
			<p class="bio-text">{selected.bio}</p>
		</div>
	{/if}
</dialog>

<style>
	.hero-bg {
		--gutter: clamp(1rem, 4vw, 4rem);

		background-image: linear-gradient(#841515, #000);
		margin: 0;
		color: white;
		box-sizing: border-box;
		overflow-x: clip;
	}

	.hero-content {
		padding-inline: var(--gutter);
		padding-block: clamp(2rem, 8vh, 6rem);
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 4.5vw, 3.75rem);
		line-height: 1.1;
	}

	.hero-sub {
		font-weight: 300;
		font-size: clamp(1.75rem, 3vw, 3.25rem);
		margin-block: clamp(0.5rem, 2vh, 2rem) 0;
		line-height: 1.2;
	}

	.content {
		--gutter: clamp(1rem, 4vw, 4rem);
		--member-size: clamp(8rem, 14vw, 13rem);

		display: flex;
		flex-direction: column;
		background: black;
		min-height: 100vh;
		margin: 0;
		color: white;
		padding-inline: var(--gutter);
		padding-block: clamp(1rem, 4vh, 4rem);
		box-sizing: border-box;
		gap: 5rem;
		overflow-x: clip;
	}

	.content h2,
	.bio-modal h2 {
		margin: 0;
		font-size: clamp(1.75rem, 3.5vw, 3rem);
		line-height: 1.15;
	}

	.content p,
	.bio-modal p {
		font-size: clamp(1rem, 1.15vw, 1.25rem);
		line-height: 1.5;
	}

	/* groups sit side by side when they fit and wrap when they don't */
	.groups {
		display: flex;
		flex-wrap: wrap;
		column-gap: clamp(2rem, 6vw, 6rem);
		row-gap: 5rem;
	}

	.group {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		gap: clamp(1rem, 2vh, 2rem);
		min-width: 0;
	}

	.member-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.member-item {
		all: unset;
		display: flex;
		flex-direction: column;
		width: var(--member-size);
		cursor: pointer;
	}

	.member-item:focus-visible {
		outline: 2px solid white;
		outline-offset: 4px;
		border-radius: 0.25rem;
	}

	.member-item p {
		margin-bottom: 0;
	}

	.member-container {
		position: relative;
		transition: transform 0.2s ease;
	}

	.member-item:hover .member-container,
	.member-item:focus-visible .member-container {
		transform: translateY(-6px);
	}

	.member-container img {
		display: block;
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.member-hover {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.member-item:hover .member-hover,
	.member-item:focus-visible .member-hover {
		opacity: 1;
	}

	.member-subtitle {
		font-weight: 300;
		margin-top: 0.25rem;
		margin-bottom: 0;
		min-height: 2lh;
	}

	.button-2 {
		background: white;
		color: black;
		border-radius: 50rem;
		padding: clamp(0.35rem, 0.75vh, 0.6rem) clamp(0.75rem, 1.5vw, 1.25rem);
		font-weight: 400;
		font-size: clamp(0.75rem, 0.85vw, 1rem);
		white-space: nowrap;
	}

	.bio-modal {
		--gutter: clamp(1rem, 4vw, 4rem);

		width: min(56rem, calc(100% - var(--gutter) * 2));
		max-height: min(40rem, 85vh);
		padding: clamp(1.5rem, 3vw, 3rem);
		box-sizing: border-box;
		background-color: #040000;
		color: white;
		border: 2px solid #90000073;
		border-radius: 20px;
		overflow-y: auto;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease,
			overlay 0.2s ease allow-discrete,
			display 0.2s ease allow-discrete;
	}

	.bio-modal:not([open]) {
		opacity: 0;
		transform: translateY(12px);
	}

	@starting-style {
		.bio-modal[open] {
			opacity: 0;
			transform: translateY(12px);
		}
	}

	.bio-modal::backdrop {
		background-color: rgba(0, 0, 0, 0.8);
	}

	.modal-close {
		all: unset;
		position: absolute;
		top: clamp(0.75rem, 1.5vw, 1.25rem);
		right: clamp(0.75rem, 1.5vw, 1.25rem);
		display: flex;
		cursor: pointer;
		transition: transform 0.15s ease;
	}

	.modal-close:hover {
		transform: scale(1.1);
	}

	.modal-close:active {
		transform: scale(0.92);
	}

	.modal-close:focus-visible {
		outline: 2px solid white;
		outline-offset: 4px;
		border-radius: 0.25rem;
	}

	.modal-close img {
		width: clamp(1.5rem, 2vw, 2rem);
		filter: invert(100%);
	}

	.bio-grid {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: clamp(1.5rem, 4vw, 4rem);
	}

	.bio-person {
		display: flex;
		flex-direction: column;
	}

	.modal-avatar {
		display: block;
		width: clamp(8rem, 18vw, 16rem);
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border: 10px solid white;
		box-sizing: border-box;
		margin-bottom: 1rem;
	}

	.bio-text {
		margin: 0;
		text-align: right;
	}

	@media (max-width: 48rem) {
		.hero-bg,
		.group {
			text-align: center;
		}
		.member-grid {
			justify-content: center;
		}
		.member-hover {
			display: none;
		}
		.bio-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.bio-person {
			align-items: center;
		}
		.bio-text {
			text-align: center;
		}
	}
</style>
