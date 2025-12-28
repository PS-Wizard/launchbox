<script lang="ts">
    let items = [
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact" },
    ];

    let activeIndex: number = $state(0);
    let hoveredIndex: number | null = $state(null);

    function handleClick(index: number) {
        activeIndex = index;
    }

    function handleMouseEnter(index: number) {
        hoveredIndex = index;
    }

    function handleMouseLeave() {
        hoveredIndex = null;
    }

    $effect(() => {
        // Optional: Set active based on current URL
        const currentPath = window.location.pathname;
        const index = items.findIndex((item) => item.href === currentPath);
        if (index !== -1) {
            activeIndex = index;
        }
    });
</script>

<nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <div class="bg-transprent backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl" >
        <div class="relative flex items-center gap-2">
            <!-- Background indicator -->
            <div
                class="absolute bg-white rounded-lg transition-all duration-300 ease-out pointer-events-none"
                style="
                    left: calc({hoveredIndex !== null
                    ? hoveredIndex
                    : activeIndex} * (100% / {items.length}));
                    width: calc(100% / {items.length} - 8px);
                    height: calc(100% - 12px);
                    top: 6px;
                    margin-left: 4px;
                "
            ></div>
            {#each items as item, index}
                <a
                    href={item.href}
                    class="relative z-10 px-8 py-4 text-lg font-medium transition-colors duration-300 rounded-lg uppercase"
                    class:text-black={hoveredIndex === index ||
                        (hoveredIndex === null && activeIndex === index)}
                    class:text-white={hoveredIndex !== index &&
                        (hoveredIndex !== null || activeIndex !== index)}
                    onclick={() => handleClick(index)}
                    onmouseenter={() => handleMouseEnter(index)}
                    onmouseleave={handleMouseLeave}
                    ontouchstart={() => handleClick(index)}
                >
                    {item.label}
                </a>
            {/each}
        </div>
    </div>
</nav>

<style>
    a {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }
</style>

