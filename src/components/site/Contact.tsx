export function Contact() {
  return (
    <section id="contact" className="relative bg-secondary text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p data-reveal className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              — Contact
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              data-reveal
              className="font-display font-light text-5xl md:text-8xl leading-[0.95] tracking-tight"
            >
              Begin a<br />
              <span className="italic text-accent">conversation.</span>
            </h2>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 md:col-start-4" data-reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Studio
            </p>
            <p className="font-display text-2xl leading-snug">
              42 Calvert Avenue<br />
              London E2 7JP
            </p>
          </div>
          <div className="col-span-12 md:col-span-4" data-reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Enquiries
            </p>
            <a
              href="mailto:hello@lambda-arch.studio"
              className="font-display text-2xl leading-snug hover:text-accent transition-colors"
            >
              hello@lambda-arch.studio
            </a>
            <p className="font-display text-2xl leading-snug mt-2">+44 20 7946 0021</p>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="font-display italic text-3xl md:text-5xl">Λambda</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Lambda Architecture · All work shown is studio property
          </p>
        </div>
      </div>
    </section>
  );
}