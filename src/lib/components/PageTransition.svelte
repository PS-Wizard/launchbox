<script lang="ts">
    import { onMount } from "svelte";
    import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
    import { gsap } from "gsap";

    let blocks: { x: number; y: number; w: number; h: number }[] = $state([]);
    let divBlocks: HTMLElement[] = $state([]);
    let isInitialLoad = $state(true);
    let hasAnimated = $state(false);

    function calculateBlocks() {
        const cols = 5;
        const rows = 5;
        const blockW = window.innerWidth / cols;
        const blockH = window.innerHeight / rows;
        blocks = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                blocks.push({
                    x: x * blockW,
                    y: y * blockH,
                    w: blockW,
                    h: blockH,
                });
            }
        }
    }

    onMount(() => {
        calculateBlocks();

        const handleResize = () => {
            calculateBlocks();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    $effect(() => {
        if (
            isInitialLoad &&
            divBlocks.length === blocks.length &&
            !hasAnimated
        ) {
            gsap.set(divBlocks, { height: (i) => blocks[i].h });
            gsap.to(divBlocks, {
                height: 0,
                stagger: { each: 0.03, from: "random" },
                duration: 0.69,
                pointerEvents: "none",
            });
            isInitialLoad = false;
            hasAnimated = true;
        }
    });

    beforeNavigate(async (nav) => {
        if (nav.type === "link") {
            nav.cancel();
            await gsap.to(divBlocks, {
                height: (i) => blocks[i].h,
                duration: 0.69,
                stagger: { each: 0.03, from: "random" },
                pointerEvents: "auto",
                onComplete: () => {
                    if (nav.to) {
                        goto(nav.to.url);
                    }
                },
            });
        }
    });

    afterNavigate(async () => {
        gsap.to(divBlocks, {
            height: 0,
            stagger: { each: 0.03, from: "random" },
            duration: 0.69,
            pointerEvents: "none",
        });
    });
</script>

<div class="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]">
    {#each blocks as block, i}
        <div
            class="absolute bg-neutral-400"
            style="
                left: {block.x}px;
                top: {block.y}px;
                width: {block.w}px;
                height: 0px;
                overflow: hidden;
            "
            bind:this={divBlocks[i]}
        ></div>
    {/each}
</div>
