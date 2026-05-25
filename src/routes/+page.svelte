<script lang="ts">
    import teamImg from '$lib/assets/images/team.webp';
    import arrowUp from '$lib/assets/arrowup.webp';
    import team1 from '$lib/assets/images/team-1.webp';
    import team2 from '$lib/assets/images/team-2.webp';
    import robot1 from '$lib/assets/images/robot-1.webp';
    import robot2 from '$lib/assets/images/robot-2.webp';
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
    import msde from '$lib/assets/logos/msde.svg'
    import hccs from '$lib/assets/logos/hccs.png'
    import luxcraft from '$lib/assets/logos/luxcraft.png'
    import allstate from '$lib/assets/logos/allstate.svg'
    import craftingtable from '$lib/assets/logos/craftingtable.png'
    import costco from '$lib/assets/logos/costco.svg'
    import chipotle from '$lib/assets/logos/chipotle.svg'
    import Footer from '$lib/components/footer.svelte'
    import { resolve } from '$app/paths';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';

    const members = {
        // leadership
        'elaine': {
            img: elaine,
            name: 'Elaine',
            role: 'Team Captain',
        }, // middle on init 
        'coach-dai': {
            img: coachdai,
            name: 'Coach Dai',
            role: 'Head Coach',
        }, // 4th on init
        // hardware
        'erik': {
            img: erik,
            name: 'Erik',
            role: 'Hardware Lead',
        }, // 4th on init
        'nathan': {
            img: nathan,
            name: 'Nathan',
            role: 'Electrical Lead',
        }, 
        'sherry': {
            img: sherry,
            name: 'Sherry',
            role: 'Hardware'
        }, 
        'vincent': {
            img: vincent,
            name: 'Vincent',
            role: 'Hardware'
        }, 
        // CAD
        'zilong': {
            img: zilong,
            name: 'Zilong',
            role: 'CAD Lead'
        },
        // software
        'constance': {
            img: constance,
            name: 'Constance', 
            role: 'Software Lead'
        }, 
        'niko': {
            img: niko,
            name: 'Niko',
            role: 'Infrastructure Lead and Software'
        },
        'mentor-zhang': {
            img: mentorzhang,
            name: 'Mentor Zhang',
            role: 'Software Mentor'
        },
        // outreach
        'max': {
            img: max,
            name: 'Max',
            role: 'Outreach'
        },
        'johnathan': {
            img: johnathan,
            name: 'Johnathan',
            role: 'Outreach'
        }, // 1st on init
        // leadership (again)
        'coach-wan': {
            img: coachwan,
            name: 'Coach Wan',
            role: "Assistant Coach"
        } // 2nd on init
        };

        const Reach = {
        Local: 'local',
        Regional: 'regional',
        National: 'national',
        International: 'international'
        } as const;

        const outreachType = {
        Reach: 'reach',
        Connect: 'connect',
        ConnectExpert: 'connect-expert'
        }

        // TODO: Remove img
        const outreach = {
        'SEED': {
           name: 'SEED Presentation',
           img: '',
           people: 80,
           reach: Reach.Local,
           type: outreachType.Reach,
           alt: ''
        },
        'STEM': {
           name: 'MD STEM Festival',
           img: '',
           people: 400,
           reach: Reach.Regional,
           type: outreachType.Reach,
           alt: ''
        },
        'CHINA': {
           name: 'China Day Sale',
           img: '',
           people: 200,
           reach: Reach.Local,
           type: outreachType.Reach,
           alt: ''
        },
        'NOVATARD': {
           name: 'Novatard #24950 meetings',
           img: '',
           people: 0,
           reach: Reach.International,
           type: outreachType.Connect,
           alt: ''
        },
        'CDC': {
           name: 'CDC.zip #34148 Mentoring',
           img: '',
           people: 0,
           reach: Reach.International,
           type: outreachType.Connect,
           alt: ''
        },
        'NORTHROP': {
           name: 'Meeting with Northrop Gruman Engineer',
           img: '',
           people: 0,
           reach: Reach.Local,
           type: outreachType.ConnectExpert,
           alt: ''
        },
        'CODENINJA': {
           name: 'Meeting with VP of CodeNinjas',
           img: '',
           people: 0,
           reach: Reach.National,
           type: outreachType.ConnectExpert,
           alt: ''
        },
        'NVIDIA': {
           name: 'Meeting with NVIDIA Data Scientist',
           img: '',
           people: 0,
           reach: Reach.Local,
           type: outreachType.ConnectExpert,
           alt: ''
        },
        'USARMY': {
            name: 'Meeting with Mechanical Engineer at the US Army ERDC',
            img: '',
            people: 0,
            reach: Reach.Local,
            type: outreachType.ConnectExpert,
            alt: ''
        },
        'FLLSTATES': {
            name: 'Showcase at FLL States',
            img: '',
            people: 100,
            reach: Reach.Regional,
            type: outreachType.Connect,
            alt: ''
        },
        'FLLV5': {
            name: 'Mentoring FLL #65542 V5',
            img: '',
            people: 20,
            reach: Reach.Local,
            type: outreachType.Connect,
            alt: ''
        }
    };
    let myElement: Header = $state();
    let heroEl: HTMLDivElement | null = $state(null);
    let showInlineHeader = $state(true); // hero header starts visible
    let showStickyHeader = $state(false); // sticky header only after hero scrolls past
    const memberLength = Object.keys(members).length;
    let memberIndexes = $state([memberLength-4, memberLength-3, memberLength-2, memberLength-1, 0, 1, 2, 3, 4]); // cursed? yes. works? hopefully!
    const slots = $derived(memberIndexes.map(i => Object.entries(members)[i])); // yips

    // hooray learning how to use .map (and on the way .forEach :D)
    function moveMemberRight() {
        memberIndexes = memberIndexes.map((element) => {
                if (memberLength == 0) { // should never happen! but if it does theres this guard here
                    return 0;
                }
                return (element + 1 ) % memberLength;
            }
        )
    };

    function moveMemberLeft() {
        memberIndexes = memberIndexes.map((element) => {
                if (memberLength == 0) {
                    return 0;
                }
                return (element - 1 + memberLength) % memberLength;
                // apparently JS % acts more like a remainder so we're doing this
            }
        )
    };

    // swap headers based on whether the hero is still on screen
    onMount(() => {
        // no hero? nothing to watch
        if (!heroEl) {
            return;
        }

        // watch the hero and flip which header shows
        const observer = new IntersectionObserver(
            ([entry]) => {
                // inline header when hero is visible, sticky when it isn't
                showInlineHeader = entry.isIntersecting;
                showStickyHeader = !entry.isIntersecting;
            },
            {
                root: null, // viewport
                threshold: 0.2 // swap after ~20% of hero is out
            }
        );
        // start watching the hero
        observer.observe(heroEl);

        // cleanup observer on unmount
        return () => observer.disconnect();
    });
</script>

{#if showStickyHeader}
    <div transition:fade={{ duration: 180 }}>
        <Header variant="sticky" />
    </div>
{/if}

<div class="hero-bg" bind:this={heroEl}>
    {#if showInlineHeader}
        <Header />
    {/if}
    <div class="hero-content">
        <h1>
            Ingenuity <sup class="number-sup">#24220</sup>
        </h1>
        <h2 class="hero-sub">
            We're a team of <i><u>innovators</u></i>, <br> <i><u>creators</u></i>, and <i><u>leaders</u></i>.
        </h2>
        <div class="hero-cta">
            <button type="button" class="button-1">Contact Us</button>
            <button type="button" class="button-1">Learn More</button>
        </div>
        <img src={teamImg} alt="Our team" class="hero-img">
        <p class="hero-img-sub">
            <i>This is us! <img src={arrowUp} alt="">
                <br>
                Taken at Moorefield, WV Qualifier 1 by 
                <a href="https://sydsp1cs.mypixieset.com/">@sydsp1cs</a>
            </i>
        </p>
    </div>
</div>

<div class="content">
    <!-- <h2 class="center question">
        What is Ingenuity?
    </h2> -->
    <div class="block-grid">
        <div class="left about">
            <h2>Ingenuity is <br><u>community, as team and at heart.</u></h2>
            <p>
                Ingenuity is a tight knit team based in Maryland. 
                <!-- <br> -->
                Our rookie year was 2023, and we've gone to Regionals as well as winning multiple Inspire awards during our 2025-26 season. Our team is currently 10 members large, with 2 coaches and 1 mentor.
            </p>
            <a class="button-2" href={resolve("/about")} aria-label="Read more">
                Read More
            </a>
        </div>
        <div class="right image-about">
            <img class="team-img-1" src={team1} alt="Team Ingenuity's mascot worn by Johnathan">
            <!-- TODO: arrow on hover talking about how thats our mascot? -->
            <img class="team-img-2" src={team2} alt="Team Ingenuity members at the hotel before an event">
        </div>
    </div>
    <div class="block-grid">
        <div class="right robot">
            <h2>Ingenuity is <br><u>a team of makers that experiment.</u></h2>
            <p>
                This is our 2025-2026 design! We're in the process of updating our design for <a href="https://www.kyfirstrobotics.org/runfortherobots">Run for The Robots</a>, the premiere event that our team is attending! You can see our robot, Ginny, in the pictures.
            </p>
        </div>
        <div class="left image-robot">
            <img class="robot-img-1" src={robot1} alt="Our 2025-2026 robot, Ginny, next to Erik">
            <!-- TODO: for one w/o erik cite author (@sydsp1cs)-->
            <img class="robot-img-2" src={robot2} alt="Our robot Ginny during a practice round">
        </div>
    </div>
    {#if memberLength > 0} <!-- can't believe im doing this but just in case -->
        <div class="block-grid">
            <div class="left team">
                <h2>Ingenuity is <br><u>a team of all trades.</u></h2>
                <p>
                    Everyone on our team has a role to play. Meet each of them, and see the faces behind Ingenuity.
                </p>
                <a class="button-2" href={resolve("/team")} aria-label="Meet the Team">
                    Meet the Team
                </a>
            </div>
        </div>
        <div class="member-section">
            <div class="member-row">
                <button type="button" class="strip-nav" onclick={moveMemberLeft} aria-label="Previous members">
                    <img src="https://icons.hackclub.com/api/icons/white/view-back" alt="">
                </button>
                <div class="member-strip">
                    <!-- TODO: scrolling member list -->
                    {#each slots as [slug, member] (slug)}
                        <div class="member-item" animate:flip={{ duration: 400 }}>
                            <div class="member-container">
                                <img src={member.img} alt={member.name}>
                                <!-- <div class="member-hover" aria-hidden="true">
                                    <a class="button-1" href={resolve(`/team/${slug}`)}>Meet {member.name}</a>
                                </div> -->
                            </div>
                            <p>
                                {member.name}
                            </p>
                            <p class="member-subtitle">
                                {member.role}
                            </p>
                        </div>
                    {/each}
                </div>
                <button type="button" class="strip-nav" onclick={moveMemberRight} aria-label="Next members">
                    <img src="https://icons.hackclub.com/api/icons/white/right-caret" alt="">
                </button>
            </div>
        </div>
    {/if}
    <div class="block-grid">
        <div class="right community">
            <h2>Ingenuity is <br><u>dedicated to giving back.</u></h2>
            <p>
                From community events to open sourcing our code, Team Ingenuity is dedicated to giving back more to the community than we take.
            </p>
        </div>
    </div>
    <div class="marquee-community">
        <div class="outreach-grid">
            {#each Object.entries(outreach) as [slug, item] (slug)}
                <div class="outreach-card">
                    <span class="outreach-reach">{item.reach}</span>
                    <p class="outreach-name">{item.name}</p>
                    {#if item.people > 0}
                        <p class="outreach-people"><u><i>{item.people}</i></u>+ people</p>
                    {/if}
                </div>
            {/each}
            {#each Object.entries(outreach) as [slug, item] (slug)}
                <div class="outreach-card">
                    <span class="outreach-reach">{item.reach}</span>
                    <p class="outreach-name"><u>{item.name}</u></p>
                    {#if item.people > 0}
                        <p class="outreach-people"><u><i>{item.people}</i></u>+ people</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <div class="block-grid">
        <div class="left sponsor">
            <h2>Ingenuity is <br><u>nothing without you.</u></h2>
            <p>
                We couldn't do what we do without our sponsors, who provide us money to help us succeed. All of our sponsors for the 25-26 year are <span class="sponsor-position-wide">on the right!</span><span class="sponsor-position-narrow">below! Click the logos to navigate to their respective websites.</span>
            </p>
        </div>
        <div class="right image-sponsor">
            <div class="div1">
                <a href="https://marylandpublicschools.org/about/pages/ofpos/gac/mdroboticsfy26/index.aspx" target="_blank" rel="noreferrer noopener">
                    <img src={msde} alt="Maryland State Department of Education">
                </a>
            </div>
            <div class="div2"> 
                <a href="https://www.allstate.com" target="_blank" rel="noreferrer noopener">
                    <img src={allstate} alt="Allstate">
                </a>
            </div>
            <div class="div3"> 
                <a href="https://www.hccs-md.org/en/" target="_blank" rel="noreferrer noopener">
                    <img src={hccs} alt="Howard County Chinese School">
                </a>
            </div>
            <div class="div4"> 
                <a href="https://luxcraft.com" target="_blank" rel="noreferrer noopener">
                    <img src={luxcraft} alt="Luxcraft">
                </a>
            </div>
            <div class="div5">
                <a href="https://costco.com" target="_blank" rel="noreferrer noopener">
                    <img src={costco} alt="Costco">
                </a>
            </div>
            <div class="div6">
                <!-- TODO: get the actual URL for this -->
                <!-- <a href="https://luxcraft.com" target="_blank" rel="noreferrer noopener"> -->
                    <img src={craftingtable} alt="Crafting Table">
                <!-- </a> -->
            </div>
            <div class="div7"> 
                <a href="https://chipotle.com" target="_blank" rel="noreferrer noopener">
                    <img src={chipotle} alt="Chipotle">
                </a>
            </div>
            <!-- TODO: ADD SPONSOR IMAGES HERE -->
        </div>
    </div> 
    <div class="center contact">
        <h2>Interested?</h2>
        <p>
            We'd be happy to hear from you for anything from sponsorships to questions about what we do. Contact us at the form below, or email <a href="mailto:contact@ingenuity.team">contact@ingenuity.team</a>
        </p>
        <!-- TODO: ADD FILLOUT HERE -->
    </div>
</div>

<Footer />
<!-- TODO: FOOTER -->

<style>

    .member-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .member-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .member-item {
        display: flex;
        flex-direction: column;
    }

    .strip-nav {
        all: unset;
        position: relative;
        z-index: 999;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        height: clamp(8rem, 18vw, 16rem);
        opacity: 0;
        cursor: pointer;
        transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .strip-nav:hover {
        transform: scale(1.1);
    }

    .strip-nav:active {
        transform: scale(0.92);
    }

    .strip-nav:focus-visible {
        outline: 2px solid white;
        outline-offset: 4px;
        border-radius: 0.25rem;
    }

    .strip-nav img {
        width: clamp(1.5rem, 3vw, 2.5rem);
    }

    .member-row:hover .strip-nav {
        opacity: 1
    }

    .member-strip {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        overflow: hidden;
        mask-image: linear-gradient(
            to right, 
            transparent 0%,
            black 30%,
            black 70%, 
            transparent 100%
        );
        width: calc(100% + (var(--gutter) * 2));
        margin-left: calc(var(--gutter) * -1);
    }

    .member-hover {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
    }

    .member-container:hover .member-hover,
    .member-container:focus-within .member-hover {
        opacity: 1;
        pointer-events: auto;
    }

    .member-container {
        position: relative;
        flex: 0 0 auto;
    }

    .member-subtitle {
        font-weight: 300;
        margin-top: 0.25rem;
        margin-bottom: 0;
        min-height: 2lh;
    }

    .member-container img {
        display: block;
        width: clamp(8rem, 18vw, 16rem);
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    .block-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 1ch;
    }
    .left {
        display: block;
        text-align: left;
    }
    .right {
        display: block;
        text-align: right;
    }

    .center {
        display: block;
        text-align: center;
    }

    .robot, .community {
        grid-column: 2;
        grid-row: 1;
    }

    .image-robot, .marquee-community {
        grid-column: 1;
        grid-row: 1;
    }

    .marquee-community {
        width: calc(100% + (var(--gutter) * 2));
        margin-left: calc(var(--gutter) * -1);
        overflow-x: auto;
        mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
        );
    }

    @keyframes marquee-content {
        from {
            transform: translateX( 0% );
        }
        to {
            transform: translateX( -50% );
        }
    }

    .outreach-grid {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding-right: 1rem;
        padding-block: 0.5rem;
        width: max-content;
        animation: 40s infinite marquee-content linear;
        user-select: none;
    }

    .outreach-card {
        flex: 0 0 auto;
        width: clamp(10rem, 14vw, 14rem);
        padding: 1rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        transition: transform 0.2s ease, border-color 0.2s ease;
        text-align: center;
    }

    .outreach-reach {
        font-size: 0.7rem;
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.6;
    }

    .outreach-name {
        font-weight: 500;
        font-size: 0.95rem;
        margin: 0;
        line-height: 1.3;
    }

    .outreach-people {
        font-size: 0.8rem;
        font-weight: 400;
        opacity: 0.7;
        margin: 0;
    }

    .about {
        padding-right: 1ch;
    }

    .team-img-1 {
        position: relative;
        rotate: -20deg;
        top: 5%;
        left: 20%;
        width: clamp(10rem, 16vw, 18rem);
        /* padding-left: 1rem; */
    }

    .team-img-2 {
        position: relative;
        top: 10%;
        left: 5%;
        rotate: 15deg;
        width: clamp(10rem, 16vw, 18rem);
    }

    .robot-img-1 {
        position: relative;
        rotate: -20deg;
        top: -10%;
        right: -5%;
        width: clamp(10rem, 16vw, 18rem);
    }
    
    .robot-img-2 {
        position: relative;
        top: -15%;
        rotate: 15deg;
        width: clamp(10rem, 16vw, 18rem);
    }

    .image-about {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        gap: 1rem;
        padding-left: 2rem;
        min-width: 0;
        padding-left: 2ch;
        padding-bottom: 10ch;
    }

    .image-about > img {
        border: solid;
        border-color: white;
        border-width: 10px;
    }

    .sponsor-position-narrow {
        display: none;
    }

    .image-sponsor {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 1rem;
        align-items: center;
        justify-items: center;
        padding: 1rem;
    }

    .image-sponsor > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        cursor: pointer;
    }

    .image-sponsor a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .image-sponsor img {
        max-width: 100%;
        max-height: 6rem;
        object-fit: contain;
        transition: transform 0.2s ease;
    }

    .image-sponsor > div:hover img {
        transform: translateY(-6px);
    }

    .div1 { grid-area: 1 / 2 / 2 / 3; }
    .div2 { grid-area: 2 / 1 / 3 / 2; }
    .div3 { grid-area: 2 / 3 / 3 / 4; }
    .div4 { grid-area: 3 / 2 / 4 / 3; }
    .div5,
    .div6,
    .div7 { display: none; }

    .image-robot {
        grid-column: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        gap: 1rem;
        padding-right: 1rem;
        min-width: 0;
        padding-right: 2ch;
        /* padding-bottom: 10ch; */
    }

    .image-robot > img {
        border: solid;
        border-color: white;
        border-width: 10px;
    }

    .content {
        --gutter: clamp(1rem, 4vw, 4rem);

        display: flex; /* probably a better way to do this but :pf:*/
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
    .hero-bg {
        --gutter: clamp(1rem, 4vw, 4rem);

        background-image: linear-gradient(#841515, #000);
        /* min-height: 100vh; */
        margin: 0;
        color: white;
        padding-inline: 0;
        padding-block: 0;
        box-sizing: border-box;
        overflow-x: clip;
    }

    .hero-content {
        padding-inline: var(--gutter);
        padding-block: clamp(1rem, 4vh, 4rem);
    }

    .block-grid {
        min-width: 0;
    }

    .block-grid > * {
        min-width: 0;
    }

    .image {
        min-width: 0;
        padding-left: 10ch;
        padding-bottom: 10ch;
    }

    h1 {
        margin: 0;
        font-size: clamp(2rem, 4.5vw, 3.75rem);
        line-height: 1.1;
    }

    .content h2 {
        margin: 0;
        font-size: clamp(1.75rem, 3.5vw, 3rem);
        line-height: 1.15;
    }

    .content p {
        font-size: clamp(1rem, 1.15vw, 1.25rem);
        line-height: 1.5;
    }

    .number-sup {
        font-weight: 300;
        font-size: clamp(0.7rem, 0.9vw, 1rem);
        top: clamp(-1.75rem, -2vw, -0.75rem);
        margin-left: 0.1ch;
    }

    .hero-sub {
        font-weight: 300;
        font-size: clamp(1.75rem, 3vw, 3.25rem);
        margin-block: clamp(0.5rem, 2vh, 2rem);
        line-height: 1.2;
    }

    .hero-cta {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(0.5rem, 1vw, 1.5rem);
        margin-top: clamp(0.5rem, 2vh, 2rem);
    }

    .button-1 {
        all: unset;
        background: #fff;
        color: black;
        border-radius: 50rem;
        padding: clamp(0.5rem, 1vh, 0.875rem) clamp(1rem, 2vw, 1.75rem);
        font-weight: 400;
        font-size: clamp(0.875rem, 1vw, 1.125rem);
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .button-1:hover {
        color: white;
        background: rgb(0, 0, 0);
        cursor: pointer;
    }

    .button-1:focus {
        outline: revert;
    }

    .button-2 {
        all: unset;
        display: block;
        width: fit-content;
        margin-top: 0.5rem;
        background: white;
        color: black;
        border-radius: 50rem;
        padding: clamp(0.35rem, 0.75vh, 0.6rem) clamp(0.75rem, 1.5vw, 1.25rem);
        font-weight: 400;
        font-size: clamp(0.75rem, 0.85vw, 1rem);
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, outline 0.3s ease-in-out;
    }

    .button-2:hover {
        color: white;
        background: black;
        outline: solid;
        outline-color: white;
        cursor: pointer;
    }

    .button-2:focus {
        outline: revert;
    }

    .hero-img {
        display: block;
        width: 100vw;
        margin-left: calc(var(--gutter) * -1);
        margin-right: calc(var(--gutter) * -1);
        margin-top: clamp(3rem, 8vh, 7rem);
        -webkit-mask-image: linear-gradient(
            to bottom, 
            transparent 0%,
            black 20%,
            black 80%, 
            transparent 100%
        );
        mask-image: linear-gradient(
            to bottom, 
            transparent 0%,
            black 20%,
            black 80%, 
            transparent 100%
        );
        /* max-height: 100rem */
    }

    .hero-img-sub {
        font-weight: 300;
    }

    @media (max-width: 48rem) {
        .sponsor-position-wide {
            display: none;
        }
        .sponsor-position-narrow {
            display: inline;
        }
        .strip-nav {
            opacity: 1;
            transition: none;
        }
        .block-grid {
            grid-template-columns: 1fr;
        }
        .robot, .community {
            grid-column: 1;
            grid-row: auto;
        }
        .image-robot, .marquee-community {
            grid-column: 1;
            grid-row: auto;
        }
        .robot-img-1, .robot-img-2 {
            left: 0%;
        }
        .left,
        .right {
            text-align: center;
        }
        .about {
            padding-right: 0;
        }
        .image-about, .image-robot {
            justify-content: center;
            padding-left: 0;
            padding-bottom: 0;
        }
        .team-img-1,
        .team-img-2 {
            width: clamp(8rem, 35vw, 14rem);
            left: 0%;
            top: 10%;
            right: 0%;
            bottom: 0%;
        }

        .robot-img-1,
        .robot-img-2 {
            top: 10%;
        }
        .hero-bg {
            text-align: center;
        }
        .hero-img-sub {
            text-align: left;
        }
        .hero-cta {
            justify-content: center;
        }
        .hero-img {
            margin-top: clamp(1.5rem, 4vh, 3rem);
        }
        .button-2 {
            align-self: center;
            justify-self: center;
        }
    }
</style>