<script lang="ts">
    import teamImg from '$lib/assets/team.webp'
    import arrowUp from '$lib/assets/arrowup.webp'
    import team1 from '$lib/assets/team-1.webp'
    import team2 from '$lib/assets/team-2.webp'
    import robot1 from '$lib/assets/robot-1.webp'
    import robot2 from '$lib/assets/robot-2.webp'

    const members = []
    let currMemberIndex = $state(0)
    let memberIndexes = $state([members.length-2, members.length-1, 0, 1, 2]) // cursed? yes. works? hopefully!

    // hooray learning how to use .map (and on the way .forEach :D)
    function moveMemberRight() {
        memberIndexes = memberIndexes.map((element) => {
                return (element + 1 ) % members.length
            }
        )
    }

    function moveMemberLeft() {
        memberIndexes = memberIndexes.map((element) => {
                return (element - 1 + members.length) % members.length
            }
        )
    }
</script>

<div class="hero-bg">
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
            <h2>Ingenuity is <br><u>from the community.</u></h2>
            <p>
                Ingenuity is a team based in Maryland. 
                <!-- <br> -->
                Our rookie year was 2023, and currently, our team is currently 10 members large.
            </p>
        </div>
        <div class="right image-about">
            <img class="team-img-1" src={team1}>
            <img class="team-img-2" src={team2}>
        </div>
    </div>
    <div class="block-grid">
        <div class="right robot">
            <h2>Ingenuity is <br><u>a team of makers.</u></h2>
            <p>
                This is our 2025-2026 design! We're in the process of updating our design for <a href="https://www.kyfirstrobotics.org/runfortherobots">Run for The Robots</a>, the premiere event that our team is attending! You can see our robot, Ginny, in the pictures.
            </p>
        </div>
        <div class="left image-robot">
            <img class="robot-img-1" src={robot1}>
            <img class="robot-img-2" src={robot2}>
        </div>
    </div>
    <div class="block-grid">
        <div class="left team">
            <h2>Ingenuity is <br><u>a team of all trades.</u></h2>
            <p>
                Everyone on our team has a role to play. Meet each of them, and see the faces behind Ingenuity.
            </p>
        </div>
    </div>
    <div class="block-grid">
        <!-- TODO: scrolling member list -->
    </div>
    <div class="block-grid">
        <div class="right community">
            <h2>Ingenuity is <br><u>paying it forward.</u></h2>
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
            <h2>Ingenuity is <br><u>nothing without our sponsors.</u></h2>
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
<!--Hints, no code:

The images look off-center because .team-img-2 still has left: -10% applied at mobile. That negative offset shifts the second image leftward, which makes the pair appear left-of-center inside the flex container (even though justify-content: center is doing its job on the raw layout).

Things to check/fix in your mobile media query:
1. Reset the positional offsets on .team-img-2 (and .team-img-1's top) inside @media (max-width: 48rem) — left, top, etc. from the desktop rules are still applied.
2. Remember position: relative offsets don't change the element's layout box, so the flex container centers the original positions, then the offset visually shifts them off-center. Either zero out left/top on mobile or switch to transform: translate(...) which you can also override.
3. Optional: wrap the two images in an inline-block/flex wrapper and center that wrapper, so the rotations/overlaps stay intact but the group as a whole is centered.-->