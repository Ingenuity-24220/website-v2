<script lang="ts">
    import teamImg from '$lib/assets/team.webp';
    import arrowUp from '$lib/assets/arrowup.webp';
    import team1 from '$lib/assets/team-1.webp';
    import team2 from '$lib/assets/team-2.webp';
    import robot1 from '$lib/assets/robot-1.webp';
    import robot2 from '$lib/assets/robot-2.webp';
    import elaine from '$lib/assets/elaine.png';
    import coachdai from '$lib/assets/coachdai.jpeg';
    import erik from '$lib/assets/erik.png';
    import johnathan from '$lib/assets/jonathan.jpeg';
    import nathan from '$lib/assets/nathan.jpeg';
    import max from '$lib/assets/max.jpg'
    import coachwan from '$lib/assets/john.png';
    import sherry from '$lib/assets/sherry1.png'
    import vincent from '$lib/assets/vincent.jpg'
    import zilong from '$lib/assets/zilong.jpg'
    import constance from '$lib/assets/constance.jpg'
    import mentorzhang from '$lib/assets/baoshe.jpg'
    import niko from '$lib/assets/niko.jpg'
    import { resolve } from '$app/paths';
    import { flip } from 'svelte/animate';

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
</script>

<div class="hero-bg">
    <h1>
        Ingenuity <sup class="number-sup">#24220</sup>
    </h1>
    <h2 class="hero-sub">
        We're a team of <i><u>innovators</u></i>, <br> <i><u>creators</u></i>, and <i><u>leaders</u></i>.
    </h2>
    <div class="hero-cta">
        <a type="button" class="button-1">Contact Us</a>
        <a type="button" class="button-1">Learn More</a>
    </div>
    <img src={teamImg} alt="Our team" class="hero-img">
    <p class="hero-img-sub">
        <i>This is us! <img src={arrowUp}>
            <br>
            Taken at Moorefield, WV Qualifier 1 by 
            <a href="https://sydsp1cs.mypixieset.com/">@sydsp1cs</a>
        </i>
    </p>
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
            <a class="button-2" href={resolve("/team")} aria-label="Read more">
                Read More
            </a>
        </div>
        <div class="right image-about">
            <img class="team-img-1" src={team1}>
            <!-- TODO: arrow on hover talking about how thats our mascot? -->
            <img class="team-img-2" src={team2}>
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
            <img class="robot-img-1" src={robot1}>
            <!-- TODO: same as L133 -->
            <img class="robot-img-2" src={robot2}>
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
        <div class="left marquee-community">
            <!-- TODO: scrolling stuff here, link to seperate page on hover, remember to reduce motion -->
        </div>
    </div>
    <div class="block-grid">
        <div class="left sponsor">
            <h2>Ingenuity is <br><u>nothing without you.</u></h2>
            <p>
                We couldn't do what we do without our sponsors, who provide us money to help us succeed. All of our sponsors for the 25-26 year are on the right!
            </p>
        </div>
        <div class="right sponsor-image">
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
        padding-inline: var(--gutter);
        padding-block: clamp(1rem, 4vh, 4rem);
        box-sizing: border-box;
        overflow-x: clip;
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

    :global(a) {
        color: #ed2525;
        text-decoration: none;
    }

    :global(a:visited) {
        color: #af1b1b;
    }

    :global(a:hover) {
        color: darkred;
        text-decoration: underline
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        font-style: normal;
        background-color: black;
    }

    @media (max-width: 48rem) {
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
    }
</style>

<script module>
    // TODO: FIX ALL OF THIS TO WORK WITH DICTS
    // this is more like slugs but whateverrr :bleh:
    // note to self: change into dict with image and name to use linked
    //Bugs to fix first:

    //1. memberIndexes initializer uses members.length — but members is now an object. members.length is undefined, so undefined - 2, undefined - 1 = NaN, NaN, 0, 1, 2. You already made memberLength for this — use it: [memberLength-2, memberLength-1, 0, 1, 2].
    //2. moveMemberLeft still uses members.length (which is undefined). Switch to memberLength. Also undefined % undefined is NaN — so left clicks are silently broken right now.
    //3. Stray import: import { serialize } from 'v8' at the top — that's a Node-only API that snuck in from an autocomplete. Delete it; it'll break the browser build.

    //Then plan the next step (the rendering):

    //You need to turn memberIndexes (numeric positions) into actual member data. Hint chain:
    //- Object.keys(members) → array of slugs in insertion order (['elaine', 'coach-dai', ...]).
    //- Object.entries(members) → array of [slug, data] pairs — even more useful, since each card needs both the slug (for the link /team/{slug}) and the data (for the image/name).
    //- Build a derived array: const slots = $derived(memberIndexes.map(i => Object.entries(members)[i])).
    //- In the markup, {#each slots as [slug, member]} → render card with <a href="/team/{slug}">, <img src={member.img}>, <span>{member.name}</span>.

    //Tiny extras:
    //- Object.keys(members) recomputes each call — fine for 13 members, but you could lift it to a const slugs = Object.keys(members) near the top.
    //- members is a const, so memberLength will never change — no need for $state/$derived on it.
</script>