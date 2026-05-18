const SPONSORS = [
  "VITRA",
  "HERMAN MILLER",
  "ARTEMIDE",
  "KNOLL",
  "AUTODESK",
  "FLOS",
  "RIMADESIO"
];

export function Sponsors() {
  return (
    <section className="w-full overflow-hidden bg-background pt-16 pb-16 md:pt-24 md:pb-24 border-t border-foreground/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 mb-12">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#3C3A36]/40">
          — Trusted Partners
        </p>
      </div>
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-center items-center gap-12 md:gap-24 px-6 md:px-12 shrink-0">
            {SPONSORS.map((s, idx) => (
              <span 
                key={`${i}-${idx}`} 
                className="font-body text-xs md:text-sm font-medium tracking-[0.3em] text-[#3C3A36]/40 uppercase whitespace-nowrap"
              >
                {s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
