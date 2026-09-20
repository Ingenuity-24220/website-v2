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
	import close from '$lib/assets/close.svg'
	
	let modalName = $state('');
	let modalAvatar = $state(niko);
	let modalRole = $state('');
	let bioText = $state('')
	function openDialog(person, avatar, role, text) {
		const dialog = document.querySelector('dialog');
		modalName = person.charAt(0).toUpperCase() + person.slice(1); // capitalize the first letter of the name
		modalAvatar = avatar;
		modalRole = role;
		bioText = text;
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
					<button type="button" class="person-button" onclick={() => openDialog("Coach Dai", coachdai, "Head Coach", "Coach Dai is in his third year coaching the Ingenuity FTC team. He earned his PhD in Electrical Engineering from Boston University and currently works as a Senior Staff Engineer at Northrop Grumman. He is passionate about circuit design, control systems, and automation, and enjoys sharing that enthusiasm with students. His goal is to guide the team through the entire engineering process—from concept and design to testing and refinement—while ensuring they have the support and resources they need to learn, grow, and succeed.")}>
						<img src={coachdai} alt="Coach Dai" class="person-avatar"/>
						<h3>Coach Dai</h3>
						<p>Head Coach</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Coach Wan", coachwan, "Assistant Coach", "John Wan is a Supervisory Data Scientist at the U.S. FDA and an experienced FIRST mentor. He coaches FTC and FLL teams with a focus on engineering design, autonomous strategy, and data-driven problem solving. John also teaches data science at UMBC and brings real-world analytics and leadership experience to youth STEM education. He holds an MBA from Georgia Tech and a B.S. in Computer Engineering.")}>
						<img src={coachwan} alt="Coach Wan" class="person-avatar"/>
						<h3>Coach Wan</h3>
						<p>Assistant Coach</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Mentor Zhang", mentorzhang, "Software Mentor", "Dr. Baoshe Zhang is a software mentor for Team Ingenuity. He holds a Ph.D. in Physics from the Hong Kong University of Science and Technology and is an Associate Professor at the University of Maryland School of Medicine. With a background in software engineering and expertise in programming and automation, he helps guide the team's software development.")}>
						<img src={mentorzhang} alt="Mentor Zhang" class="person-avatar"/>
						<h3>Mentor Zhang</h3>
						<p>Software Mentor</p>
					</button>
				</div>
				<div class="person">
					<button type="button" class="person-button" onclick={() => openDialog("Elaine", elaine, "Team Captain", "Elaine is a Junior and fourth-year team member with seven years of experience in FIRST. With past experience in hardware, software, and outreach, she is eager to assist her team in any aspect. In her free time, you can find Elaine hiding in a corner or managing her minions.")}>
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
						<button type="button" class="person-button" onclick={() => openDialog("Erik", erik, "Hardware Lead", "Erik is the Hardware Lead of Team Ingenuity, overseeing the mechanical design and construction of the robot. With a keen eye for detail and a passion for engineering, Erik ensures that the robot is built to perform at its best during competitions. Erik is currently a Junior at Gilman and enjoys playing squash in his free time.")}>
							<img src={erik} alt="Erik" class="person-avatar"/>
							<h3>Erik</h3>
							<p>Hardware Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Nathan", nathan, "Electrical Lead", "Nathan is a 4th year FTC student on team Ingenuity 24220. He also participated in 4 years of FLL, even going to nationals once. He enjoys playing soccer and spending times with his friends and family.")}>
							<img src={nathan} alt="Nathan" class="person-avatar"/>
							<h3>Nathan</h3>
							<p>Electrical Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Vincent", vincent, "Hardware Specialist", "Vincent is a member of Team Ingenuity's hardware team, where he helps with robot construction and assembly. He enjoys working hands-on with mechanical components and collaborating with teammates to bring designs to life.")}>
							<img src={vincent} alt="Vincent" class="person-avatar"/>
							<h3>Vincent</h3>
							<p>Hardware Specialist</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Sherry", sherry, "Hardware Specialist", "Sherry works on the hardware and portfolio, where she leads design initiatives, active building, and portfolio development. In her free time, she enjoys reading, fencing, and exploring cool concepts.")}>
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
						<button type="button" class="person-button" id="niko-button" onclick={() =>openDialog("niko", niko, "Software Lead", "Niko manages the software side of Team Ingenuity, having worked on the robot's vision system along with maintaining and building out the website as it stands today. In his free time, he likes to code projects, mostly in Python or Javascript, and work on running events with Hack Club.")}>
							<img src={niko} alt="Niko" class="person-avatar"/>
							<h3>Niko</h3>
							<p>Software Lead</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Justin", justin, "Software Specialist", "Justin works alongside Niko on software for Team Ingenuity. He helps with website development and the more mathematical side of robotics. He is currently a sophomore at Centennial High. In his free time, you can find him playing piano or doing math.")}>
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
						<button type="button" class="person-button" onclick={() => openDialog("Zilong", zilong, "CAD Lead", "Zilong is the CAD Lead of Team Ingenuity, specializing in computer-aided design and 3D modeling, helping out with creating parts which are not available off the shelf. His high level of CAD skill and creative problem-solving skills helps to bring the robot to life.")}>
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
						<button type="button" class="person-button" onclick={() => openDialog("Jonathan", johnathan, "Outreach Specialist", "Johnathan, a new addition to team ingenuity, focuses on the completion of various tasks necessary for the team, ranging from hardware roles to mission strategy. in his downtime, he enjoys associating with friends and family.")}>
							<img src={johnathan} alt="Jonathan" class="person-avatar"/>
							<h3>Jonathan</h3>
							<p>Outreach Specialist</p>
						</button>
					</div>
					<div class="person">
						<button type="button" class="person-button" onclick={() => openDialog("Max", max, "Outreach Specialist", "Max works on outreach for Team Ingenuity, helping to connect with the community and spread awareness about FIRST robotics. He assists with events, coordinates with sponsors, and works to inspire the next generation of engineers.")}>
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
	<button class="modal-close-button" onclick={() => document.querySelector("dialog").close()}>
		<img src={close} alt="Close" class="modal-close-image">
	</button>
	<div class="bio-flex-container">
		<div class="bio-modal-person">
			<img src={modalAvatar} alt={modalName} class="modal-avatar"/>
			<h1>{modalName}</h1>
			<p>{modalRole}</p>
		</div>
		<div class="bio-modal-bio">{bioText}</div>
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
		min-height: 100vw;
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
		font-size: large;

	}
	.non-leadership-entry{
		border-style: solid;
		border-color: #5000008c;
		background-color: #24000053;
		border-radius: 20px;
		width: 48%;
		margin-bottom: 2rem;
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
		font-size: 120%;
	}
	.person-button{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background: none;
		border: none;
		font: inherit;
		color: inherit;
		cursor:pointer;
	}
	.person-button p {
		margin: .2rem;
	}
	.person-button h3 {
		margin-bottom: 0.25rem;
	}
	.person-avatar {
		display: block;
		width: 80%;
		max-width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}
	.bio-modal {
		width: 45%;
		height: 50%;
		background-color:#040000;
		color:white;
		border-radius: 20px;
		border-color: #90000073;
		border-width: 2px;
		overflow:hidden;
		text-align: right;
	}
	.bio-modal::backdrop {
		background-color: rgba(0, 0, 0, 0.8);
	}
	.modal-close-button {
		height: 5%;
		background-color: #000000;
		border-style: none;
		cursor: pointer;
	}
	.modal-close-image {
		height: 100%;
		filter: invert(100%);
	}
	.bio-flex-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 4rem;
		padding: 1rem;
		height:90%;
		padding-top: 0;
		padding-bottom: 0;
	}
	.bio-modal-person{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:100%;
		height: 100%;
		text-align: center;
	}
	.bio-modal-person h1{
		margin-bottom: 0;
	}
	.bio-modal-person p{
		margin-top: .5rem;
	}
	.bio-modal-bio{
		height: 70%;
		width: 100%;
		font-size: 1.2rem;
		text-align: right;
		display: flex;
		align-items: center;
		margin-bottom: 4rem
	}
	.modal-avatar {
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
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
