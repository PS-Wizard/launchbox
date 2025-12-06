<script>
    import VerticalLine from "$lib/components/VerticalLine.svelte";
</script>

<main class="relative min-h-screen w-full overflow-hidden bg-black">
    <!-- Background Spline iframe -->
    <div class="absolute inset-0 w-full h-full hidden lg:block opacity-70">
        <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-lGrFYdODnoi5SdNOqYL5Lhkz/"
            frameborder="0"
            class="w-full h-full"
            title=""
        ></iframe>
    </div>

    <!-- Content overlay -->
    <div
        class="relative z-10 min-h-screen w-full flex flex-col justify-start items-center px-6 py-10 pointer-events-none"
    >
        <!-- Badge -->
        <div class="pointer-events-auto mb-6 animate-fade-in">
            <span
                class="inline-flex items-center gap-2 bg-white/5 text-neutral-300 border border-white/10 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
            >
                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                ></span>
                Currently Taking Clients
            </span>
        </div>

        <h1
            class="text-center tracking-tight leading-tight text-5xl md:text-7xl lg:text-8xl font-bold mb-6 max-w-6xl"
        >
            We Help Businesses Reach Their
            <span class="block mt-2">
                <span
                    class="bg-gradient-to-r from-cyan-300 to-pink-400 text-black px-3 py-1 inline-block"
                >
                    Full Potential
                </span>
            </span>
        </h1>

        <!-- Subheading -->
        <p
            class="text-center text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
            Transform your digital presence with cutting-edge web solutions.
            From sleek designs to powerful functionality.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a
                href="/"
                class="group relative text-lg bg-white text-black rounded-lg px-8 py-4 font-semibold inline-flex items-center gap-2 hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl"
            >
                Contact Us
                <span class="group-hover:translate-x-1 transition-transform"
                    >→</span
                >
            </a>
            <a
                href="/"
                class="text-lg bg-white/5 text-white border border-white/10 rounded-lg px-8 py-4 font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
                View Our Work
            </a>
        </div>

        <!-- Social Proof / Stats -->
        <div class="mt-20 grid grid-cols-3 gap-8 md:gap-16 max-w-3xl w-full">
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                    50+
                </div>
                <div class="text-sm text-neutral-400">Projects Delivered</div>
            </div>
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                    98%
                </div>
                <div class="text-sm text-neutral-400">Client Satisfaction</div>
            </div>
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                    24/7
                </div>
                <div class="text-sm text-neutral-400">Support Available</div>
            </div>
        </div>
    </div>
</main>

<!-- Bento Grid Section -->
<section class="mt-20 relative overflow-hidden">
    <div class="mx-auto relative z-10">
        <!-- Header -->
        <div class="mb-20">
            <h2
                class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                A Creative Web Agency From Nepal.<br />
                <span class="text-neutral-500">Designed for impact.</span>
            </h2>
        </div>

        <!-- Bento Grid -->
        <div
            class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-fr"
        >
            <!-- Large Feature - Spanning 2 rows -->
            <div
                class="md:col-span-6 lg:col-span-7 md:row-span-2 border border-neutral-800 rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-all min-h-[400px] backdrop-blur-xl"
            >
                <div class="relative z-10">
                    <div
                        class="inline-flex items-center gap-2 bg-white/5 text-neutral-300 rounded-full px-4 py-2 text-sm mb-6 border border-white/10"
                    >
                        Revenue Growth
                    </div>
                    <h3 class="text-4xl font-bold text-white mb-4">
                        Turn visitors into customers
                    </h3>
                    <p
                        class="text-neutral-400 text-lg leading-relaxed max-w-lg"
                    >
                        Strategic design and development that converts. We focus
                        on metrics that matter—engagement, retention, and
                        revenue.
                    </p>
                </div>
                <div class="mt-8 flex items-center gap-12 text-sm">
                    <div>
                        <div class="text-3xl font-bold text-white">3.2x</div>
                        <div class="text-neutral-500">Avg conversion lift</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-white">$500k+</div>
                        <div class="text-neutral-500">Revenue generated</div>
                    </div>
                </div>
            </div>

            <!-- Medium Feature -->
            <div
                class="md:col-span-3 lg:col-span-5 border border-neutral-800 rounded-3xl p-8 hover:border-white/20 transition-all min-h-[200px] flex flex-col justify-between backdrop-blur-xl"
            >
                <div>
                    <h3 class="text-2xl font-bold text-white mb-3">
                        Ship faster, scale smarter
                    </h3>
                    <p class="text-neutral-400 leading-relaxed">
                        From MVP to Series A. We build products that grow with
                        you, not against you.
                    </p>
                </div>
                <div class="text-neutral-500 text-sm mt-4">
                    2-4 week delivery
                </div>
            </div>

            <!-- Small Feature - Tech Stack -->
            <div
                class="md:col-span-3 lg:col-span-5 border border-neutral-800 rounded-3xl p-8 hover:border-white/20 transition-all min-h-[200px] backdrop-blur-xl"
            >
                <h3 class="text-2xl font-bold text-white mb-4">
                    Built with the best
                </h3>
                <p class="text-neutral-400 text-sm mb-4">
                    Industry-standard stack. Zero vendor lock-in.
                </p>
                <div class="flex flex-wrap gap-2">
                    <span
                        class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
                        >React</span
                    >
                    <span
                        class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
                        >Next.js</span
                    >
                    <span
                        class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
                        >TypeScript</span
                    >
                    <span
                        class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
                        >Tailwind</span
                    >
                </div>
            </div>

            <!-- Metric Card -->
            <div
                class="md:col-span-3 lg:col-span-4 border border-neutral-800 rounded-3xl p-8 hover:border-white/20 transition-all min-h-[200px] flex flex-col justify-between backdrop-blur-xl"
            >
                <div>
                    <div class="text-6xl font-bold text-white mb-2">$0</div>
                    <div class="text-neutral-400">Upfront cost</div>
                </div>
                <div class="text-neutral-500 text-sm">
                    Pay as you grow. Flexible pricing for startups.
                </div>
            </div>

            <!-- Feature with gradient border -->
            <div
                class="md:col-span-3 lg:col-span-3 border border-neutral-800 rounded-3xl p-8 hover:border-white/20 transition-all relative overflow-hidden min-h-[200px] backdrop-blur-xl"
            >
                <div class="relative z-10">
                    <h3 class="text-xl font-bold text-white mb-2">
                        Launch ready
                    </h3>
                    <p class="text-neutral-400 text-sm">
                        Full deployment, monitoring, and support included.
                    </p>
                </div>
            </div>
            <div
                class="md:col-span-3 lg:col-span-5 border border-neutral-800 rounded-3xl p-8 hover:border-white/20 transition-all relative overflow-hidden min-h-[200px] bg-slate-200 backdrop-blur-xl"
            >
                <div class="relative z-10">
                    <h3 class="text-xl font-bold text-black mb-2">
                        Launch ready
                    </h3>
                    <p class="text-neutral-400 text-sm">
                        Full deployment, monitoring, and support included.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="bg-transparent py-32 relative">
    <div class="mx-auto">
        <div class="mb-20">
            <h2
                class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-right"
            >
                How we work.<br />
                <span class="text-neutral-500">Simple. Fast. Effective.</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Step 1 -->
            <div
                class="border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl"
            >
                <div class="text-6xl font-bold text-neutral-800 mb-6">01</div>
                <h3 class="text-3xl font-bold text-white mb-4">Discovery</h3>
                <p class="text-neutral-400 leading-relaxed mb-6">
                    We dive deep into your business goals, target audience, and
                    competitive landscape. No generic templates—every project
                    starts with research.
                </p>
                <div class="text-neutral-500 text-sm">Week 1</div>
            </div>

            <!-- Step 2 -->
            <div
                class="border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl"
            >
                <div class="text-6xl font-bold text-neutral-800 mb-6">02</div>
                <h3 class="text-3xl font-bold text-white mb-4">
                    Design & Build
                </h3>
                <p class="text-neutral-400 leading-relaxed mb-6">
                    Rapid prototyping to production. We design in the browser,
                    ship fast iterations, and keep you in the loop every step of
                    the way.
                </p>
                <div class="text-neutral-500 text-sm">Week 2-3</div>
            </div>

            <!-- Step 3 -->
            <div
                class="border border-neutral-800 rounded-3xl p-10 hover:border-white/20 transition-all backdrop-blur-xl"
            >
                <div class="text-6xl font-bold text-neutral-800 mb-6">03</div>
                <h3 class="text-3xl font-bold text-white mb-4">
                    Launch & Scale
                </h3>
                <p class="text-neutral-400 leading-relaxed mb-6">
                    Deploy with confidence. We handle hosting, monitoring, and
                    post-launch optimization. Your success is our success.
                </p>
                <div class="text-neutral-500 text-sm">Week 4+</div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="bg-transparent py-32 px-6 relative">
    <div class="max-w-4xl mx-auto text-center">
        <div
            class="border border-neutral-800 rounded-3xl p-16 hover:border-white/20 transition-all backdrop-blur-xl"
        >
            <h2
                class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
                Ready to ship something great?
            </h2>
            <p class="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Let's talk about your project. No sales pitch, just a real
                conversation about what you're building.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/"
                    class="group relative text-lg bg-white text-black rounded-lg px-8 py-4 font-semibold inline-flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all"
                >
                    Schedule a call
                    <span class="group-hover:translate-x-1 transition-transform"
                        >→</span
                    >
                </a>
            </div>
        </div>
    </div>
</section>
<VerticalLine quantity={4} />

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.6s ease-out;
    }
</style>
