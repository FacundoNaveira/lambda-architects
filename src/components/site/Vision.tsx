const projects = [
  {
    no: "01",
    title: "Azabudai Hills",
    place: "Tokyo, JP",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
  },
  {
    no: "02",
    title: "Little Island",
    place: "New York, US",
    img: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1600&q=80",
  },
  {
    no: "03",
    title: "Bogota EAN University",
    place: "Bogota, Colombia",
    img: "https://heatherwick.com/wp-content/uploads/2-comp_1080x939_acf_cropped-2-900x783.jpg",
  },
];

import { useProject } from "@/context/ProjectContext";

export function Vision() {
  const { setSelectedProject } = useProject();
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

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <article
              key={p.no}
              data-reveal
              className={`group flex flex-col md:flex-row gap-12 items-center justify-between py-16 cursor-pointer ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => setSelectedProject(p)}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-none">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight group-hover:text-accent transition-colors mb-3">
                  {p.title}
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  {p.place}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[450px] overflow-hidden flex items-center justify-center order-1 md:order-none">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}