<script lang="ts">
	import elaine from '$lib/assets/team/elaine.jpg';
	import coachdai from '$lib/assets/team/coachdai.jpeg';
	import erik from '$lib/assets/team/erik.jpg';
	import johnathan from '$lib/assets/team/jonathan.jpeg';
	import nathan from '$lib/assets/team/nathan.jpeg';
	import max from '$lib/assets/team/max.jpg';
	import coachwan from '$lib/assets/team/john.jpg';
	import sherry from '$lib/assets/team/sherry1.jpg';
	import vincent from '$lib/assets/team/vincent.jpg';
	import zilong from '$lib/assets/team/zilong.jpg';
	import mentorzhang from '$lib/assets/team/baoshe.jpg';
	import niko from '$lib/assets/team/niko.jpg';
	import justin from '$lib/assets/team/justin.jpg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import close from '$lib/assets/close.svg';

	type Member = {
		img: string;
		name: string;
		role: string;
		bio: string;
	};

	// groups flow onto the same row as their neighbours when there's room
	const groups: { name: string; members: Member[] }[] = [
		{
			name: 'Leadership',
			members: [
				{
					img: coachdai,
					name: 'Coach Dai',
					role: 'Head Coach',
					bio: 'Coach Dai is in his third year coaching the Ingenuity FTC team. He earned his PhD in Electrical Engineering from Boston University and currently works as a Senior Staff Engineer at Northrop Grumman. He is passionate about circuit design, control systems, and automation, and enjoys sharing that enthusiasm with students. His goal is to guide the team through the entire engineering process—from concept and design to testing and refinement—while ensuring they have the support and resources they need to learn, grow, and succeed.'
				},
				{
					img: coachwan,
					name: 'Coach Wan',
					role: 'Assistant Coach',
					bio: 'John Wan is a Supervisory Data Scientist at the U.S. FDA and an experienced FIRST mentor. He coaches FTC and FLL teams with a focus on engineering design, autonomous strategy, and data-driven problem solving. John also teaches data science at UMBC and brings real-world analytics and leadership experience to youth STEM education. He holds an MBA from Georgia Tech and a B.S. in Computer Engineering.'
				},
				{
					img: mentorzhang,
					name: 'Mentor Zhang',
					role: 'Software Mentor',
					bio: "Dr. Baoshe Zhang is a software mentor for Team Ingenuity. He holds a Ph.D. in Physics from the Hong Kong University of Science and Technology and is an Associate Professor at the University of Maryland School of Medicine. With a background in software engineering and expertise in programming and automation, he helps guide the team's software development."
				},
				{
					img: elaine,
					name: 'Elaine',
					role: 'Team Captain',
					bio: 'Elaine is a Junior and fourth-year team member with seven years of experience in FIRST. With past experience in hardware, software, and outreach, she is eager to assist her team in any aspect. In her free time, you can find Elaine hiding in a corner or managing her minions.'
				}
			]
		},
		{
			name: 'Hardware',
			members: [
				{
					img: erik,
					name: 'Erik',
					role: 'Hardware Lead',
					bio: 'Erik is the Hardware Lead of Team Ingenuity, overseeing the mechanical design and construction of the robot. With a keen eye for detail and a passion for engineering, Erik ensures that the robot is built to perform at its best during competitions. Erik is currently a Junior at Gilman and enjoys playing squash in his free time.'
				},
				{
					img: nathan,
					name: 'Nathan',
					role: 'Electrical Lead',
					bio: 'Nathan is a 4th year FTC student on team Ingenuity 24220. He also participated in 4 years of FLL, even going to nationals once. He enjoys playing soccer and spending times with his friends and family.'
				},
				{
					img: vincent,
					name: 'Vincent',
					role: 'Hardware Specialist',
					bio: "Vincent is a member of Team Ingenuity's hardware team, where he helps with robot construction and assembly. He enjoys working hands-on with mechanical components and collaborating with teammates to bring designs to life."
				},
				{
					img: sherry,
					name: 'Sherry',
					role: 'Hardware Specialist',
					bio: 'Sherry works on the hardware and portfolio, where she leads design initiatives, active building, and portfolio development. In her free time, she enjoys reading, fencing, and exploring cool concepts.'
				}
			]
		},
		{
			name: 'Software',
			members: [
				{
					img: niko,
					name: 'Niko',
					role: 'Software Lead',
					bio: "Niko manages the software side of Team Ingenuity, having worked on the robot's vision system along with maintaining and building out the website as it stands today. In his free time, he likes to code projects, mostly in Python or Javascript, and work on running events with Hack Club."
				},
				{
					img: justin,
					name: 'Justin',
					role: 'Software Specialist',
					bio: 'Justin works alongside Niko on software for Team Ingenuity. He helps with website development and the more mathematical side of robotics. He is currently a sophomore at Centennial High. In his free time, you can find him playing piano or doing math.'
				}
			]
		},
		{
			name: 'CAD',
			members: [
				{
					img: zilong,
					name: 'Zilong',
					role: 'CAD Lead',
					bio: 'Zilong is the CAD Lead of Team Ingenuity, specializing in computer-aided design and 3D modeling, helping out with creating parts which are not available off the shelf. His high level of CAD skill and creative problem-solving skills helps to bring the robot to life.'
				}
			]
		},
		{
			name: 'Outreach',
			members: [
				{
					img: johnathan,
					name: 'Jonathan',
					role: 'Outreach Specialist',
					bio: 'Johnathan, a new addition to team ingenuity, focuses on the completion of various tasks necessary for the team, ranging from hardware roles to mission strategy. in his downtime, he enjoys associating with friends and family.'
				},
				{
					img: max,
					name: 'Max',
					role: 'Outreach Specialist',
					bio: 'Max works on outreach for Team Ingenuity, helping to connect with the community and spread awareness about FIRST robotics. He assists with events, coordinates with sponsors, and works to inspire the next generation of engineers.'
				}
			]
		}
	];

	let dialog: HTMLDialogElement | null = $state(null);
	let selected: Member | null = $state(null);

	function openDialog(member: Member) {
		selected = member;
		dialog?.showModal();
	}

	// backdrop clicks land on the dialog itself rather than its contents
	function closeOnBackdrop(event: MouseEvent) {
		if (event.target === dialog) {
			dialog?.close();
		}
	}
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
		{#each groups as group (group.name)}
			<section class="group">
				<h2><u>{group.name}</u></h2>
				<div class="member-grid">
					{#each group.members as member (member.name)}
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

<dialog class="bio-modal" bind:this={dialog} onclick={closeOnBackdrop}>
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
