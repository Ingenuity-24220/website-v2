<script>
    import ingenuity from '$lib/assets/logos/ingenuity.png'
    import niko88x31 from '$lib/assets/niko88x31.jpg'
</script>

<div class="footer"> <!--flex ROW most likely-->
    <div class="text"> <!-- CONTAINER FOR TEXT -->
        <div> <!-- CONTAINER FOR LOGOS, FLEX COL-->
            <img class="ingenuity-footer" src={ingenuity} alt="Ingenuity Logo">
            <p>
                Team Ingenuity has 501(c)3 status under the <a href="https://hccs-md.org" target="_blank" rel="noreferrer noopener">Howard County Chinese School</a> (EIN 52-2136227).
                <br>
                Email us at: <a href="mailto:contact@ingenuity.team">contact@ingenuity.team</a>.
            </p>
            <div>
                <a href="https://github.com/Ingenuity-24220" target="_blank" rel="noreferrer noopener" aria-label="Github">
                    <img class="icon" src="https://icons.hackclub.com/api/icons/white/github" alt="">
                </a>
                <a href="https://www.instagram.com/ingenuity24220/" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                    <img class="icon" src="https://icons.hackclub.com/api/icons/white/instagram" alt="">
                </a>
                <a href="https://www.youtube.com/@Ingenuity24220" target="_blank" rel="noreferrer noopener" aria-label="Youtube">
                    <img class="icon" src="https://icons.hackclub.com/api/icons/white/youtube" alt="">
                </a>
            </div>
        </div>
        <div class="nikosig">
            <p>
                Made with &lt;3 by:
            </p>
            <a href="https://nikoo.dev" target="_blank" rel="noreferrer noopener">
                <img src={niko88x31} alt="Niko's 88x31">
            </a>
        </div>
        <p class="license">
            This website is open sourced and licensed under the
            <a href="https://opensource.org/license/mit" target="_blank" rel="license noreferrer noopener">MIT License</a>,
            with a copy of the license available on this website's
            <a href="https://github.com/Ingenuity-24220" target="_blank" rel="noreferrer noopener">GitHub repository</a>.
            <br>
            Content (text and images) is licensed under
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noreferrer noopener">CC BY-SA 4.0</a>
            except where noted. Sponsor logos and credited photographs remain the property of their respective owners.
            <br>
            Some icons on this website provided by the
            <a href="https://icons.hackclub.com/" target="_blank" rel="noreferrer noopener">Hack Club Icon Set</a>
            licensed under the BSD-3-Clause License.
        </p>
    </div>
</div>
<!-- https://icons.hackclub.com/api/icons/white/youtube-->
<!-- https://icons.hackclub.com/api/icons/white/github -->
<!-- https://icons.hackclub.com/api/icons/white/instagram -->
<!--  -->
<style>
    .footer {
        --gutter: clamp(1rem, 4vw, 4rem);

        width: 100%;
        border-top: solid;
        border-top-color: white;
        border-top-width: 0.5px;
        display: flex;
        flex-direction: row;
        color: white;
    }

    /* .stars {
        margin-left: auto;
    } */

    .text {
        margin-left: var(--gutter);
        margin-top: clamp(1.5rem, 4vh, 3rem);
        margin-bottom: clamp(1.5rem, 4vh, 3rem);
    }

    .ingenuity-footer {
        height: clamp(3.5rem, 6vw, 5.5rem);
        width: auto;
    }

    .nikosig p {
        margin-bottom: 0.25rem;
    }
    .icon {
        height: clamp(1.25rem, 2vw, 1.75rem)
    }

    .license {
        margin-top: clamp(1.5rem, 4vh, 3rem);
        font-size: 0.75rem;
        font-weight: 300;
        opacity: 0.7;
        max-width: 60ch;
        line-height: 1.5;
    }
</style>