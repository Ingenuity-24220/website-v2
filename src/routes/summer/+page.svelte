<script>
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import about from '$lib/assets/images/summer.png';
    import { resolve } from '$app/paths';

</script>

<svelte:head>
    <title>Summer Camp | Ingenuity</title>
    <meta name="description" content="A week long FLL Summer Robotics Camp for students aged 6-14, hosted by Ingenuity #24220. $400, aftercare and precare available." />

    <!-- Open Graph -->
    <meta property="og:title" content="FLL Summer Robotics Camp | Ingenuity" />
    <meta property="og:description" content="A week long FLL Summer Robotics Camp for students aged 6-14, hosted by Ingenuity #24220. $400, aftercare and precare available." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/og-summer.png" />
    <meta property="og:url" content="https://ingenuity.team/summer" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="FLL Summer Robotics Camp | Ingenuity" />
    <meta name="twitter:description" content="A week long FLL Summer Robotics Camp for students aged 6-14, hosted by Ingenuity #24220." />
    <meta name="twitter:image" content="/og-summer.png" />
</svelte:head>

<Header/>
<div class="hero">
    <h1>
        FLL Summer Robotics Camp
    </h1>
    <h2>
        A week long summer camp for students, by students. 
    </h2>
    <h2>
        Cost: $400, with aftercare and precare available.
    </h2>
    <p>
        Accepting all aged 6-14 and all experience levels.
    </p>
    <div class="hero-cta">
        <!-- href removed to disable registration: https://ingenuity24220.fillout.com/t/2CNjsSxSzzus?utm_medium=website -->
        <a class="button-2 disabled" aria-disabled="true" role="link">
            Register now
        </a>
        <span class="closed-note">
            Camp registration is closed.
        </span>
        <!-- <a class="button-2" href="#about">
            Learn more
        </a> -->
    </div>
    <p class="contact-note">
        Questions? Reach out to us at <a href="mailto:contact@ingenuity.team">contact@ingenuity.team</a>.
    </p>
</div>

<div class="about" id="about">
    <div class="about-text-col">
        <h2>
            Taught by <u>FLL state champions</u> with <i>5</i>+ years of experience in FIRST.
        </h2>
        <p class="about-text">
            Join us August 3-7, 2026 from 9AM to 3PM for a hands-on robotics experience at the <u>Howard County Chinese School</u>.
            Students will work in teams to build and program LEGO robots using SPIKE Prime, 
            tackle official FIRST LEGO League missions, and develop real presentation skills. 
            All guided by mentors from FTC Team Ingenuity 24220 who have experience in FLL.
        </p>
        <h2>
            Cost? Not an issue.
        </h2>
        <p class="about-text">
            Our camp costs only $400 for the whole week. Financial aid is available. Please reach out to contact@ingenuity.team if you require this.
        </p>
        <h2>
            Need aftercare or precare? We've got it.
        </h2>
        <p class="about-text">
            We have aftercare from 3PM to 4PM for $50 for the whole week, or $15 per day. From 3PM to 5PM, it costs $65 for the whole week. or $20 per day.
            <br>
            For precare, doors open at 8AM for $50.
            <br>
            Financial aid is available for both of these. Please reach out to contact@ingenuity.team if you require this so we can discuss options.
        </p>
        <h2 id="safety">
            Your child's safety comes first.
        </h2>
        <p class="about-text">
            Team Ingenuity has a safeguarding document available at <a href={resolve("/safeguarding")}>this link</a>.
        </p>
    </div>
</div>
<figure class="about-figure">
    <figcaption><i>Our team captain, Elaine, in FLL!</i></figcaption>
    <img class="about-img-1" alt="Team Captain Elaine in FLL" src={about}>
</figure>
<Footer/>

<style>
    .about-text {
        margin: 0;
        width: 50%;
    }

    .about-figure {
        margin: 0;
        /* align-self: center;
        justify-self: end;
        text-align: right; */
    }

    .about-figure img {
        border-top: solid;
        border-top-color: white;
        border-top-width: 0.5px;
    }

    .about-img-1 {
        width: 100%;
        height: auto;
        display: block;
        -webkit-mask-image: linear-gradient(to top, black 0%, transparent 95%);
        mask-image: linear-gradient(to top, black 0%, transparent 95%);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    figcaption {
        font-weight: 300;
        margin-top: 0.5rem;
        color: white;
        margin-bottom: 0.5rem;
        margin-left: clamp(1rem, 4vw, 4rem);
        text-align: center;
    }

    .hero-cta {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 1ch;
    }

    .closed-note {
        font-style: italic;
        font-size: clamp(0.75rem, 0.85vw, 1rem);
    }

    .contact-note {
        margin-top: 0.5rem;
    }
    .hero {
        --gutter: clamp(1rem, 4vw, 4rem);

        color: white;
        background-color: black;
        text-align: left;
        margin-left: var(--gutter);
        margin-bottom: clamp(2rem, 6vh, 6rem);
        width: 50%;
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

    .button-2.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        user-select: none;
        -webkit-user-select: none;
    }

    .button-2.disabled:hover {
        color: black;
        background: white;
        outline: none;
        cursor: not-allowed;
    }

    .about {
        --gutter: clamp(1rem, 4vw, 4rem);

        margin-left: var(--gutter);
        color: white;
    }
</style>