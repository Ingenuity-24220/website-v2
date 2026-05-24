<script>
    import stars from '$lib/assets/stars.svg'
    import ingenuity from '$lib/assets/logos/ingenuity.png'
    import niko88x31 from '$lib/assets/niko88x31.png'
</script>

<div class="footer"> <!--flex ROW most likely-->
    <div class="text"> <!-- CONTAINER FOR TEXT -->
        <div> <!-- CONTAINER FOR LOGOS, FLEX COL-->
            <img class="ingenuity-footer" src={ingenuity} alt="Ingenuity Logo">
            <p>
                Team Ingenuity has 501(c)3 status under the <a href="https://hccs-md.org" target="_blank" rel="noreferrer noopener">Howard County Chinese School</a>.
                <br>
                Email us at: <a href="mailto:contact@ingenuity.team">contact@ingenuity.team</a>.
            </p>
        </div>
        <div class="nikosig">
            <p>
                Made with &lt;3 by:
            </p>
            <a href="https://nikoo.dev" target="_blank" rel="noreferrer noopener">
                <img src={niko88x31} alt="Niko's 88x31">
            </a>
        </div>
    </div>
    <!-- <div class="stars"> STARS
        <img src={stars} alt="">
    </div> -->
</div>

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
</style>