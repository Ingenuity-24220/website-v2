<script>
    import ingenuity from '$lib/assets/logos/ingenuity.png'
    import { resolve } from '$app/paths';

    const { variant = 'inline' } = $props();
</script>

<div class="header" class:sticky={variant === 'sticky'}> <!-- flex ROW -->
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

<style>
    .header {
        display: flex;
        z-index: 1000;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: clamp(0.6rem, 1.5vw, 1.1rem) clamp(1rem, 4vw, 3rem);
        position: relative;
        box-sizing: border-box;
        background: rgba(10, 10, 10, 0.55);
        backdrop-filter: blur(14px) saturate(140%);
        -webkit-backdrop-filter: blur(14px) saturate(140%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .header.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
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