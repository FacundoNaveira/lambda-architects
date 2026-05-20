const projects = [
  {
    no: "01",
    title: "Azabudai Hills",
    place: "Tokyo, JP",
    img: "/Azabudai Hills.jpg",
  },
  {
    no: "02",
    title: "Little Island",
    place: "New York, US",
    img: "/little island.jpg",
  },
  {
    no: "03",
    title: "Bogota EAN University",
    place: "Bogota, Colombia",
    img: "/Bogota EAN University.jpg",
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
              — Filosofía
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              data-reveal
              className="font-display font-light text-4xl md:text-7xl leading-[1.05] tracking-tight"
            >
              Construimos con la paciencia de la piedra y la curiosidad del agua: edificios que
              <span className="italic text-accent"> recuerdan </span>
              la tierra de la que surgen.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mb-32">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <p data-reveal className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Lambda Arquitectura es un estudio boutique compuesto por arquitectos, escultores e ingenieros. Entendemos cada sitio como una conversación silenciosa entre la materia, el clima y sus habitantes. Nuestro trabajo resiste las modas, priorizando en su lugar la gramática pausada del oficio.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p data-reveal className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Desde la piedra de cantera hasta el bronce fundido, trabajamos con las manos tanto como con el software. Cada proyecto es un prototipo: dibujado, modelado y luego ensayado en fragmentos físicos antes de tocar el suelo.
            </p>
          </div>
        </div>

        <div className="mb-12 border-t border-foreground/10 pt-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            — Obras destacadas
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <article
              key={p.no}
              data-reveal
              className={`group flex flex-col md:flex-row gap-12 items-center justify-between py-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-none">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {p.place}
                </p>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="mt-8 text-[10px] md:text-xs uppercase tracking-[0.25em] text-foreground hover:text-[#B0A080] border-b border-[#3C3A36]/20 pb-1 transition-colors cursor-pointer w-fit flex items-center gap-2 group/btn"
                >
                  Ver proyecto
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
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