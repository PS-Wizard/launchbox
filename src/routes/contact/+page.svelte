<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    let headingRef: HTMLElement;
    
    let formData = $state({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    let submitStatus = $state<"idle" | "success" | "error">("idle");

    onMount(() => {
        // Animate heading on load
        gsap.from(headingRef, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });

        // Floating animation for cards
        gsap.to(".contact-card", {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.2,
            repeat: -1,
            yoyo: true
        });
    });

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company || 'N/A'}\n\n` +
            `Message:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:me@pswoyam.com.np?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Show success message
        submitStatus = "success";
        
        // Reset form
        setTimeout(() => {
            formData = { name: "", email: "", company: "", message: "" };
            submitStatus = "idle";
        }, 3000);
    }
</script>

<main class="relative min-h-screen w-full overflow-hidden bg-black">
    <!-- Animated gradient background -->
    <div class="fixed inset-0 opacity-30 -z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 animate-gradient"></div>
    </div>

    <!-- Grid lines -->
    <div class="fixed inset-0 pointer-events-none opacity-20 -z-10">
        {#each Array(5) as _, i}
            <div class="absolute h-full w-px bg-white" style="left: {(i + 1) * 16.66}%"></div>
        {/each}
    </div>

    <!-- Content -->
    <div class="relative z-10 min-h-screen w-full px-6 py-20">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="mb-20" bind:this={headingRef}>
                <div class="inline-flex items-center gap-2 bg-white/5 text-neutral-300 border border-white/10 rounded-full px-4 py-2 text-sm mb-8 backdrop-blur-sm">
                    <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Get in Touch
                </div>
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                    Let's build something
                    <span class="block mt-2">
                        <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            extraordinary
                        </span>
                    </span>
                </h1>
                <p class="text-neutral-400 text-xl max-w-2xl leading-relaxed">
                    Whether you're a startup with a vision or an enterprise ready to scale, we're here to turn your ideas into reality.
                </p>
            </div>

            <!-- Main Grid -->
            <div class="grid lg:grid-cols-2 gap-12 mb-32">
                <!-- Contact Form -->
                <div class="order-1 lg:order-1">
                    <form onsubmit={handleSubmit} class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-neutral-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                bind:value={formData.name}
                                required
                                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-neutral-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label for="company" class="block text-sm font-medium text-neutral-400 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                bind:value={formData.company}
                                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
                                placeholder="Your Company (Optional)"
                            />
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium text-neutral-400 mb-2">
                                Project Details
                            </label>
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                required
                                rows="6"
                                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-all resize-none backdrop-blur-sm"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="group relative w-full bg-white text-black rounded-xl px-8 py-4 font-semibold inline-flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all overflow-hidden text-lg"
                        >
                            {#if submitStatus === "success"}
                                <span class="success-message">✓ Opening Email Client...</span>
                            {:else}
                                <span>Send Message</span>
                                <span class="group-hover:translate-x-1 transition-transform">→</span>
                            {/if}
                        </button>
                    </form>
                </div>

                <!-- Contact Cards -->
                <div class="order-2 lg:order-2 space-y-4">
                    <!-- Email Card -->
                    <div class="contact-card border border-neutral-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all backdrop-blur-xl bg-black/40 group cursor-pointer">
                        <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all">
                            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p class="text-neutral-400 text-sm mb-4">We respond within 24 hours</p>
                        <a href="mailto:hello@agency.com" class="text-purple-400 font-medium hover:text-purple-300 transition-colors">
                            hello@agency.com
                        </a>
                    </div>

                    <!-- Schedule Card -->
                    <div class="contact-card border border-neutral-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all backdrop-blur-xl bg-black/40 group cursor-pointer">
                        <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                        <p class="text-neutral-400 text-sm mb-4">30-minute intro call</p>
                        <span class="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                            Book a time →
                        </span>
                    </div>

                    <!-- Location Card -->
                    <div class="contact-card border border-neutral-800 rounded-3xl p-8 hover:border-pink-500/50 transition-all backdrop-blur-xl bg-black/40 group cursor-pointer">
                        <div class="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-all">
                            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Visit Us</h3>
                        <p class="text-neutral-400 text-sm mb-4">Remote-first, globally distributed</p>
                        <span class="text-pink-400 font-medium">Kathmandu, Nepal</span>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="border-t border-neutral-800 pt-20">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-12">
                    Frequently Asked Questions
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="border border-neutral-800 rounded-2xl p-8 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40">
                        <h3 class="text-xl font-bold text-white mb-3">What's your typical project timeline?</h3>
                        <p class="text-neutral-400">Most projects take 2-6 weeks from kickoff to launch, depending on scope and complexity.</p>
                    </div>
                    <div class="border border-neutral-800 rounded-2xl p-8 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40">
                        <h3 class="text-xl font-bold text-white mb-3">Do you work with startups?</h3>
                        <p class="text-neutral-400">Absolutely! We offer flexible pricing and payment plans designed specifically for early-stage companies.</p>
                    </div>
                    <div class="border border-neutral-800 rounded-2xl p-8 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40">
                        <h3 class="text-xl font-bold text-white mb-3">What technologies do you use?</h3>
                        <p class="text-neutral-400">We specialize in modern web stacks: React, Next.js, TypeScript, Tailwind, and cutting-edge AI integrations.</p>
                    </div>
                    <div class="border border-neutral-800 rounded-2xl p-8 hover:border-white/20 transition-all backdrop-blur-xl bg-black/40">
                        <h3 class="text-xl font-bold text-white mb-3">Do you provide ongoing support?</h3>
                        <p class="text-neutral-400">Yes! We offer maintenance packages and 24/7 monitoring to keep your product running smoothly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    @keyframes gradient {
        0% { transform: translate(0%, 0%) rotate(0deg); }
        50% { transform: translate(10%, 10%) rotate(180deg); }
        100% { transform: translate(0%, 0%) rotate(360deg); }
    }

    .animate-gradient {
        animation: gradient 15s ease infinite;
    }
</style>
