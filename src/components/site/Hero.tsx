export function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden grain">
      <video
        className="absolute inset-0 h-full w-full object-cover"
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
        <p className="mb-6 text-[10px] md:text-xs tracking-[0.5em] uppercase text-background/80">
          Est. 2014 — London / Tokyo
        </p>
        <h1 className="font-display font-light text-background text-[14vw] md:text-[10vw] leading-[0.9] tracking-hero">
          LAMBDA
        </h1>
        <h2 className="font-display font-light text-background/90 text-[6vw] md:text-[3.5vw] mt-2 tracking-[0.3em] italic">
          architecture
        </h2>
        <p className="mt-10 max-w-md text-sm md:text-base text-background/80 font-body leading-relaxed">
          A studio of spatial craft — sculpting environments where material, light and form
          breathe as one organism.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
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