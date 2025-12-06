<script lang="ts">
    // VerticalLine.svelte
    let { quantity = 1 } = $props();

    function getPositions(count: number) {
        if (count === 0) return [];
        if (count === 1) return [50]; // Center

        const positions = [];
        const spacing = 100 / (count + 1);
        for (let i = 1; i <= count; i++) {
            positions.push(spacing * i);
        }
        return positions;
    }

    const positions = $derived(getPositions(quantity));
</script>

{#each positions as position}
    <div
        class="w-px h-screen bg-neutral-900 fixed top-0 -z-10"
        style="left: {position}%"
    ></div>
{/each}
