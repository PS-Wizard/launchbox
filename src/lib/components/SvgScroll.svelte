<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let {
        svgPath = "M115.283 25.0007C115.283 25.0007 -44.7166 220.001 61.2834 328.001C167.283 436.001 1013.28 870.001 1007.28 494.001C1001.28 118.001 -10.2167 219.001 38.2833 817.001C86.7834 1415 470.783 1578.5 529.283 1261.5C587.783 944.501 296.783 995.501 421.783 1177",
        viewBox = "0 0 1033 1446",
    } = $props();

    let containerRef: HTMLElement;
    let pathRef = $state<SVGPathElement>();
    let isMobile = $state(false);

    onMount(() => {
        if (!pathRef) return;

        // Check if mobile on mount
        isMobile = window.innerWidth < 768;

        // Update on resize
        const handleResize = () => {
            isMobile = window.innerWidth < 768;
        };
        window.addEventListener("resize", handleResize);

        const pathLength = pathRef.getTotalLength();

        // Set initial state - path is hidden
        gsap.set(pathRef, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Animate the path drawing as you scroll - starts sooner
        gsap.to(pathRef, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === containerRef) {
                    trigger.kill();
                }
            });
        };
    });
</script>

<section class="bg-transparent py-32 relative" bind:this={containerRef}>
    <div class="mx-auto px-6">
        <div class="mb-20">
            <h2
                class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-right"
            >
                How we work.<br />
                <span class="text-neutral-500">Simple. Fast. Effective.</span>
            </h2>
        </div>

        <!-- Grid Container with SVG Overlay -->
        <div class="relative min-h-[200vh]">
            <!-- SVG Path connecting the cards - hidden on mobile -->
            {#if !isMobile}
                <svg
                    class="absolute inset-0 w-full h-full pointer-events-none"
                    {viewBox}
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Zigzag path connecting three points -->
                    <path
                        bind:this={pathRef}
                        d={svgPath}
                        fill="none"
                        stroke="url(#gradient)"
                        stroke-width="60"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />

                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                style="stop-color:#10b981;stop-opacity:1"
                            />
                            <stop
                                offset="25%"
                                style="stop-color:#06b6d4;stop-opacity:1"
                            />
                            <stop
                                offset="50%"
                                style="stop-color:#6366f1;stop-opacity:1"
                            />
                            <stop
                                offset="75%"
                                style="stop-color:#d946ef;stop-opacity:1"
                            />
                            <stop
                                offset="100%"
                                style="stop-color:#f97316;stop-opacity:1"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            {/if}

            <!-- Cards positioned in zigzag pattern -->
            <div class="relative md:space-y-[400px] space-y-32">
                <!-- Card 1 - Top Left -->
                <div class="flex md:justify-start justify-center">
                    <div
                        class="w-full max-w-md border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40"
                    >
                        <div class="text-6xl font-bold text-neutral-800 mb-6">
                            01
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Discovery
                        </h3>
                        <p class="text-neutral-400 leading-relaxed mb-6">
                            We dive deep into your business goals, target
                            audience, and competitive landscape. No generic
                            templates—every project starts with research.
                        </p>
                        <div class="text-neutral-500 text-sm">Week 1</div>
                    </div>
                </div>

                <!-- Card 2 - Middle Right -->
                <div class="flex md:justify-end justify-center">
                    <div
                        class="w-full max-w-md border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40"
                    >
                        <div class="text-6xl font-bold text-neutral-800 mb-6">
                            02
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Design & Build
                        </h3>
                        <p class="text-neutral-400 leading-relaxed mb-6">
                            Rapid prototyping to production. We design in the
                            browser, ship fast iterations, and keep you in the
                            loop every step of the way.
                        </p>
                        <div class="text-neutral-500 text-sm">Week 2-3</div>
                    </div>
                </div>

                <!-- Card 3 - Bottom Left -->
                <div class="flex md:justify-start justify-center">
                    <div
                        class="w-full max-w-md border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40"
                    >
                        <div class="text-6xl font-bold text-neutral-800 mb-6">
                            03
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Launch & Scale
                        </h3>
                        <p class="text-neutral-400 leading-relaxed mb-6">
                            Deploy with confidence. We handle hosting,
                            monitoring, and post-launch optimization. Your
                            success is our success.
                        </p>
                        <div class="text-neutral-500 text-sm">Week 4+</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    path {
        filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
    }
</style>
