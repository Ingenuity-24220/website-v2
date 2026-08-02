<svelte:head>
	<title>Team | Ingenuity</title>
</svelte:head>

<script lang="ts">
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
	import Header from '$lib/components/header.svelte';
	
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
		<div class="coaches">
			<div class="left-coaches">
				<h1 class="team-title">Coaches</h1>
				<p class="team-desc">
					placeholder
				</p>
			</div>
			<div class="right-coaches">
				<div class="person">
					<img src={coachdai} alt="Coach Dai" class="person-avatar"/>
					<div>
						<h3>Coach Dai</h3>
						<p>Head Coach</p>
					</div>
				</div>
				<div class="person">
					<img src={coachwan} alt="Coach Wan" class="person-avatar"/>
					<div>
						<h3>Coach Wan</h3>
						<p>Assistant Coach</p>
					</div>
				</div>
				<div class="person">
					<img src={mentorzhang} alt="Mentor Zhang" class="person-avatar"/>
					<div>
						<h3>Mentor Zhang</h3>
						<p>Software Mentor</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
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
	.coaches {
		display: grid;

		grid-template-columns: 1fr 1fr;
	}
	.left-coaches {
		text-align: center;
		font-weight: 700;
	}
	.team-title {
		font-size: 5em;
		margin-bottom: 0.75rem;
	}
	.team-desc {
		margin-top: .75rem;
		font-size: 1.5em;
	}
	.right-coaches {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.person{
		flex: 1;
		text-align: center;
	}
	.person-avatar {
		width: 60%;
		height: auto;
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
