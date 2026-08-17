<svelte:head>
	<title>Team | Ingenuity</title>
</svelte:head>

<script lang="ts">

    import elaine from '$lib/assets/team/elaine.jpg';
	import coachdai from '$lib/assets/team/coachdai.jpeg';
    import erik from '$lib/assets/team/erik.jpg';
    import johnathan from '$lib/assets/team/jonathan.jpeg';
    import nathan from '$lib/assets/team/nathan.jpeg';
    import max from '$lib/assets/team/max.jpg'
    import coachwan from '$lib/assets/team/john.jpg';
    import sherry from '$lib/assets/team/sherry1.jpg'
    import vincent from '$lib/assets/team/vincent.jpg'
    import zilong from '$lib/assets/team/zilong.jpg'
    import constance from '$lib/assets/team/constance.jpg'
    import mentorzhang from '$lib/assets/team/baoshe.jpg'
    import niko from '$lib/assets/team/niko.jpg'
	import justin from '$lib/assets/team/justin.jpg'
	import Header from '$lib/components/header.svelte';
	
	let modalName = $state('');
	let modalAvatar = $state(niko);
	let modalRole = $state('');
	function openDialog(person, avatar, role) {
		const dialog = document.querySelector('dialog');
		modalName = person.charAt(0).toUpperCase() + person.slice(1); // capitalize the first letter of the name
		modalAvatar = avatar;
		modalRole = role;
		dialog?.showModal();
	}
</script>
<div class="header-container">
	<Header/>
</div>
<div class="content">
	<div class="title">
		<h1 id="meet-the-team">Meet the Team</h1>
		<h3 id="we-are-ingenuity">We are Ingenuity.</h3>
	</div>
	<div class="team-members">
		<div class="leadership">
			<h1>Leadership</h1>
			<div class="leadership-people">
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Coach Dai", coachdai, "Head Coach")}>
						<img src={coachdai} alt="Coach Dai" class="person-avatar"/>
						<h3>Coach Dai</h3>
						<p>Head Coach</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Coach Wan", coachwan, "Assistant Coach")}>
						<img src={coachwan} alt="Coach Wan" class="person-avatar"/>
						<h3>Coach Wan</h3>
						<p>Assistant Coach</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Mentor Zhang", mentorzhang, "Software Mentor")}>
						<img src={mentorzhang} alt="Mentor Zhang" class="person-avatar"/>
						<h3>Mentor Zhang</h3>
						<p>Software Mentor</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Elaine", elaine, "Team Captain")}>
						<img src={elaine} alt="Elaine" class="person-avatar"/>
						<h3>Elaine</h3>
						<p>Team Captain</p>
					</button>
				</div>
			</div>
		</div>
		<div class="non-leadership">
			<div class="non-leadership-entry">
				<h1>Hardware</h1>
				<div class="non-leadership-people">
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Erik", erik, "Hardware Lead")}>
							<img src={erik} alt="Erik" class="person-avatar"/>
							<h3>Erik</h3>
							<p>Hardware Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Nathan", nathan, "Electrical Lead")}>
							<img src={nathan} alt="Nathan" class="person-avatar"/>
							<h3>Nathan</h3>
							<p>Electrical Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Vincent", vincent, "Hardware Specialist")}>
							<img src={vincent} alt="Vincent" class="person-avatar"/>
							<h3>Vincent</h3>
							<p>Hardware Specialist</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Sherry", sherry, "Hardware Specialist")}>
							<img src={sherry} alt="Sherry" class="person-avatar"/>
							<h3>Sherry</h3>
							<p>Hardware Specialist</p>
						</button>
					</div>
				</div>
			</div>
			<div class="non-leadership-entry">
				<h1>Software</h1>
				<div class="non-leadership-people">
					<div class="person">
						<button type="button" class="person-button" id="niko-button" onclick={() =>openDialog("niko", niko, "Software Lead")}>
							<img src={niko} alt="Niko" class="person-avatar"/>
							<h3>Niko</h3>
							<p>Software Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Justin", justin, "Software Specialist")}>
							<img src={justin} alt="Justin" class="person-avatar"/>
							<h3>Justin</h3>
							<p>Software Specialist</p>
						</button>
					</div>
				</div>
			</div>
			<div class="non-leadership-entry">
				<h1>CAD</h1>
				<div class="non-leadership-people">
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Zilong", zilong, "CAD Lead")}>
							<img src={zilong} alt="Zilong" class="person-avatar"/>
							<h3>Zilong</h3>
							<p>CAD Lead</p>
						</button>
					</div>
				</div>
			</div>
			<div class="non-leadership-entry">
				<h1>Outreach</h1>
				<div class="non-leadership-people">
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Jonathan", johnathan, "Outreach Specialist")}>
							<img src={johnathan} alt="Jonathan" class="person-avatar"/>
							<h3>Jonathan</h3>
							<p>Outreach Specialist</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Max", max, "Outreach Specialist")}>
							<img src={max} alt="Max" class="person-avatar"/>
							<h3>Max</h3>
							<p>Outreach Specialist</p>
						</button>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<dialog class="bio-modal">
	<div class="bio-flex-container">
		<div class="bio-modal-person">
			<img src={modalAvatar} alt={modalName} class="person-avatar" style="width:50%;"/>
			<h1>{modalName}</h1>
			<p>{modalRole}</p>
		</div>
		<p class="bio-modal-bio">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>
</dialog>

<style>
	.header-container {
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	.content {
		display: flex;
		color: white;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		height: 100vw;
	}
	.title {
		text-align: center;
		margin-bottom: 2rem;
	}
	.team-members {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.leadership {
		text-align: center;
		font-size: large;
		border-radius: 20px;
		width:90%;
		border-style: solid;
		border-color: #500000bd;
		background-color: #24000053;
	}
	.leadership-people {
		display: flex;
		justify-content: center;
		padding: 2rem;
		padding-top: 0;
	}
	.non-leadership {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3%;
		width:  80%;
		row-gap: 2rem;
	}
	.non-leadership-entry{
		border-style: solid;
		border-color: #5000008c;
		background-color: #24000053;
		border-radius: 20px;
		width: 48%;

		text-align: center;
		font-size: large;

	}
	.non-leadership-people{
		display: flex;
		justify-content: space-evenly;
		font-size: 80%;
		padding: 2rem;
		padding-top: 0;
	}
	.person{
		flex: 0 0 25%;
		text-align: center;
	}
	.person-button{
		background: none;
		border: none;
		font: inherit;
		color: inherit;
		cursor:pointer;
	}
	.person-avatar {
		width: 80%;
		height: auto;
		border-radius: 50%;
	}
	.bio-modal {
		width: 50%;
		height: 50%;
		background-color:#040000;
		color:white;
		border-radius: 20px;
		border-color: #90000073;
		border-width: 2px;
	}
	.bio-modal::backdrop {
		background-color: rgba(0, 0, 0, 0.8);
	}
	.bio-flex-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 2rem;
	}
	.bio-modal-person{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.bio-modal-bio{
		height: 60%;
	}
	#meet-the-team {
		margin-bottom: 0.1rem;
		color: white;
		font-weight: 1000;
		font-size: clamp(2rem, 6vw, 4rem);
	}
	#we-are-ingenuity {
		margin-top: 0.1rem;
		color: white;
		font-weight: 500;
		font-size: clamp(1rem, 3vw, 2rem);
	}
</style>
