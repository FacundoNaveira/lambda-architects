const projects = [
  {
    no: "01",
    title: "Hollow Tide Pavilion",
    place: "Setouchi, JP — 2024",
    img: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    no: "02",
    title: "Brass Garden House",
    place: "Lisbon, PT — 2023",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    no: "03",
    title: "Quarry Cultural Hall",
    place: "Oslo, NO — 2022",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid grid-cols-12 gap-8 mb-24 md:mb-40">
          <div className="col-span-12 md:col-span-3">
            <p data-reveal className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              — Vision
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              data-reveal
              className="font-display font-light text-4xl md:text-7xl leading-[1.05] tracking-tight"
            >
              We build with the patience of stone and the curiosity of water — buildings that
              <span className="italic text-accent"> remember </span>
              the land they rise from.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mb-32">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <p data-reveal className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Lambda Architecture is a small studio composed of architects, sculptors and
              engineers. We see every site as a quiet conversation between material, climate
              and inhabitant. Our work resists trend, favouring instead the slow grammar of
              craft.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p data-reveal className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              From quarried stone to cast bronze, we work with our hands as often as with our
              software. Each project is a prototype — drawn, modelled, then tested in physical
              fragments before it ever meets the ground.
            </p>
          </div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((p, i) => (
            <article
              key={p.no}
              className={`grid grid-cols-12 gap-6 items-end ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                data-reveal
                className={`col-span-12 ${i % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:col-start-6"}`}
              >
                <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div
                data-reveal
                className={`col-span-12 ${
                  i % 2 === 0 ? "md:col-span-4 md:col-start-9" : "md:col-span-4 md:col-start-2"
                } pb-4`}
              >
                <p className="text-[10px] tabular-nums tracking-[0.4em] text-muted-foreground mb-4">
                  {p.no} / 03
                </p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground">
                  {p.place}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}