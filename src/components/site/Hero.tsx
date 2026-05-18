import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.set("[data-hero-item]", { opacity: 0, y: 30 });
      gsap.set("[data-hero-media]", { opacity: 0, scale: 1.08 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to("[data-hero-media]", { opacity: 1, scale: 1, duration: 2, ease: "power2.out" })
        .to("[data-hero-item='eyebrow']", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
        .to("[data-hero-item='title']", { opacity: 1, y: 0, duration: 1.1 }, "-=0.7")
        .to("[data-hero-item='subtitle']", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
        .to("[data-hero-item='body']", { opacity: 1, y: 0, duration: 1 }, "-=0.7")
        .to("[data-hero-item='scroll']", { opacity: 1, y: 0, duration: 0.9 }, "-=0.6");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative h-screen w-full overflow-hidden grain">
      <video
        data-hero-media
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-architectural-details-of-a-modern-building-3947/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p data-hero-item="eyebrow" className="mb-6 text-[10px] md:text-xs tracking-[0.5em] uppercase text-background/80">
          Est. 2014 — London / Tokyo
        </p>
        <h1 data-hero-item="title" className="font-display font-light text-background text-[14vw] md:text-[10vw] leading-[0.9] tracking-hero">
          LAMBDA
        </h1>
        <h2 data-hero-item="subtitle" className="font-display font-light text-background/90 text-[6vw] md:text-[3.5vw] mt-2 tracking-[0.3em] italic">
          architecture
        </h2>
        <p data-hero-item="body" className="mt-10 max-w-md text-sm md:text-base text-background/80 font-body leading-relaxed">
          A studio of spatial craft — sculpting environments where material, light and form
          breathe as one organism.
        </p>
      </div>

      <div data-hero-item="scroll" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.4em] uppercase text-background/70">
          Scroll to explore
        </span>
        <div className="relative h-12 w-[1px] overflow-hidden bg-background/20">
          <span className="scroll-dot absolute left-1/2 top-0 h-2 w-[1px] -translate-x-1/2 bg-background" />
        </div>
      </div>
    </section>
  );
}