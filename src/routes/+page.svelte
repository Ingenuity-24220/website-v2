<script lang="ts">
    import teamImg from '$lib/assets/team.png'
    import arrowUp from '$lib/assets/arrowup.png'
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
    <h1 class="center question">
        What else is Ingenuity?
    </h1>
    <div class="left about">
        <h1>Ingenuity is <br><u>From the community.</u></h1>
    </div>
    <div class="right robot">
        <h1>Ingenuity is <br><u>a team of makers.</u></h1>
    </div>
    <div class="left team">
        <h1>Ingenuity is <br><u>a team of all trades.</u></h1>
    </div>
    <div class="right community">
        <h1>Ingenuity is <br><u>paying it forward.</u></h1>
    </div>
    <div class="left sponsor">
        <h1>Ingenuity is <br><u>nothing without sponsors.</u></h1>
    </div>
    <div class="center contact">
        <h1>Interested?</h1>
    </div>
</div>

<style>
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
    }
    .hero-bg {
        --gutter: clamp(1rem, 4vw, 4rem);

        background-image: linear-gradient(#CD2121, #000);
        /* min-height: 100vh; */
        margin: 0;
        color: white;
        padding-inline: var(--gutter);
        padding-block: clamp(1rem, 4vh, 4rem);
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        font-size: clamp(2rem, 4.5vw, 3.75rem);
        line-height: 1.1;
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
        margin-top: clamp(1rem, 4vh, 4rem);
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
        color: #CD2121;
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
    }
</style>
