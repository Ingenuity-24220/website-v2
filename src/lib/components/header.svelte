<script>
    import ingenuity from '$lib/assets/logos/ingenuity.png'
    import { resolve } from '$app/paths';

    const { variant = 'inline', summer = false } = $props();
</script>

<div class="header-shell" class:sticky={variant === 'sticky'}>
    {#if summer}
        <div class="summer-banner">
            <a class="summer-banner-link" href={resolve("/summer")}>
                FLL Summer Robotics Camp registration is open! | August 3rd-7th | Ages 6-14
            </a>
        </div>
    {/if}
    <div class="header"> <!-- flex ROW -->
        <div class="logo"> <!-- LOGO CONTAINER -->
            <a href={resolve("/")}>
                <img src={ingenuity} alt='Ingenuity Logo'>
            </a>
        </div>
        <div class="nav"> <!-- NAV CONTAINER, PUSH TO END-->
            <a class="nav-link" href={resolve("/summer")}>
                Summer Camp
            </a>
            <!-- <a class="nav-link" href={resolve("/about")}>
                About
            </a>
            <a class="nav-link" href={resolve("/team")}>
                Team
            </a>
            <a class="nav-link" href={resolve("/outreach")}>
                Outreach
            </a>
            <a class="nav-link" href={resolve("/blog")}>
                Blog
            </a> -->
        </div>
    </div>
</div>

<style>
    .header-shell {
        z-index: 1000;
        width: 100%;
        position: relative;
    }
    .header-shell.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .header {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: clamp(0.6rem, 1.5vw, 1.1rem) clamp(1rem, 4vw, 3rem);
        box-sizing: border-box;
        background: rgba(10, 10, 10, 0.55);
        backdrop-filter: blur(14px) saturate(140%);
        -webkit-backdrop-filter: blur(14px) saturate(140%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .summer-banner {
        width: 100%;
        padding: 0.4rem clamp(1rem, 4vw, 3rem);
        background: rgba(237, 37, 37, 0.55);
        backdrop-filter: blur(14px) saturate(140%);
        -webkit-backdrop-filter: blur(14px) saturate(140%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        text-align: center;
        box-sizing: border-box;
    }
    .header-shell.sticky .header {
        background: rgb(10, 10, 10);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }
    .header-shell.sticky .summer-banner {
        background: rgb(237, 37, 37);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }
    .summer-banner-link {
        color: white;
        text-decoration: none;
        font-size: 0.85rem;
        letter-spacing: 0.01em;
    }
    .summer-banner-link:hover {
        text-decoration: underline;
    }
    .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .logo img {
        height: clamp(1.6rem, 2.4vw, 2.6rem);
        width: auto;
    }
    .nav {
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
    }

    .nav-link {
        color: white;
        text-decoration: none;
    }
    
    .nav-link:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>