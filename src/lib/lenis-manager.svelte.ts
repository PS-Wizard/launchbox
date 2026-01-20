// src/lib/lenis-manager.svelte.ts
// This runs ONCE in your layout and never re-renders
import Lenis from 'lenis';
import gsap from 'gsap';

import ScrollTriggerPlugin from 'gsap/ScrollTrigger';
const ScrollTrigger = ScrollTriggerPlugin;
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

class LenisManager {
    lenis: Lenis | null = $state(null);
    private rafId: number | null = null;
    private tickerFunc: ((time: number) => void) | null = null;

    init() {
        if (this.lenis) return; // Already initialized

        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Sync Lenis with GSAP ScrollTrigger
        this.lenis.on('scroll', ScrollTrigger.update);

        // Sync GSAP ticker with Lenis
        this.tickerFunc = (time: number) => {
            this.lenis?.raf(time * 1000);
        };
        gsap.ticker.add(this.tickerFunc);
        gsap.ticker.lagSmoothing(0);
    }

    destroy() {
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }

        if (this.tickerFunc) {
            gsap.ticker.remove(this.tickerFunc);
            this.tickerFunc = null;
        }

        this.lenis?.destroy();
        this.lenis = null;

        ScrollTrigger.getAll().forEach((t) => t.kill());
    }

    scrollTo(target: string | number, options?: any) {
        this.lenis?.scrollTo(target, options);
    }

    stop() {
        this.lenis?.stop();
    }

    start() {
        this.lenis?.start();
    }
}

export const lenisManager = new LenisManager();

