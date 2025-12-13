<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import PageTransition from "$lib/components/PageTransition.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { lenisManager } from "$lib/lenis-manager.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        lenisManager.init();

        return () => {
            lenisManager.destroy();
        };
    });

    let { children } = $props();
</script>

<PageTransition />
<Navbar />
<main>
    {@render children()}
</main>

<Footer />

<style>
    :global(html.lenis, html.lenis body) {
        height: auto;
    }

    :global(.lenis.lenis-smooth) {
        scroll-behavior: auto !important;
    }

    :global(.lenis.lenis-smooth [data-lenis-prevent]) {
        overscroll-behavior: contain;
    }

    :global(.lenis.lenis-stopped) {
        overflow: hidden;
    }

    :global(.lenis.lenis-smooth iframe) {
        pointer-events: none;
    }
</style>
