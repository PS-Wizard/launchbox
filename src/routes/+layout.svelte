<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import PageTransition from "$lib/components/PageTransition.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let { children } = $props();
</script>

<PageTransition />
<Navbar />
<main>
    {@render children()}
</main>

<Footer />
