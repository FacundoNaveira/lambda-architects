import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Proyectos — Lambda Arquitectura" },
      {
        name: "description",
        content:
          "Obras seleccionadas de Lambda Arquitectura: pabellones, viviendas y edificios culturales moldeados por la materia, la luz y la tierra.",
      },
      { property: "og:title", content: "Proyectos — Lambda Arquitectura" },
      {
        property: "og:description",
        content:
          "Obras seleccionadas de Lambda Arquitectura: pabellones, viviendas y edificios culturales moldeados por la materia, la luz y la tierra.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  place: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "Azabudai Hills",
    place: "Tokio, Japón",
    img: "/Azabudai Hills.jpg",
  },
  {
    title: "Little Island",
    place: "Nueva York, EE. UU.",
    img: "/little island.jpg",
  },
  {
    title: "Xi’an CCBD (Centre Culture Business District)",
    place: "Xi'an, China",
    img: "/Xi’an CCBD (Centre Culture Business District).jpg",
  },
  {
    title: "Zeitz MOCAA",
    place: "Ciudad del Cabo, Sudáfrica",
    img: "/Zeitz MOCAA.jpg",
  },
  {
    title: "EDEN",
    place: "Singapur",
    img: "/EDEN.jpg",
  },
  {
    title: "Bogota EAN University",
    place: "Bogotá, Colombia",
    img: "/Bogota EAN University.jpg",
  },
  {
    title: "Columbia Library",
    place: "Nueva York, EE. UU.",
    img: "/Columbia Library.jpg",
  },
  {
    title: "Google Bay View",
    place: "California, EE. UU.",
    img: "/Google Bay View.jpg",
  },
];

import { useProject } from "@/context/ProjectContext";

import { Link } from "@tanstack/react-router";

function ProjectsPage() {
  const { setSelectedProject } = useProject();
  useReveal();
  return (
    <main className="relative bg-background text-foreground antialiased animate-fade-in">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <Link
            to="/"
            className="mb-12 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2 cursor-pointer w-fit"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Volver
          </Link>
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-3"></div>
            <div className="col-span-12 md:col-span-9">
              <h1
                data-reveal
                className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-tight"
              >
                Una década de obras,
                <span className="italic text-accent"> diseñadas a medida</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 md:pb-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((p) => (
              <article
                key={p.title}
                data-reveal
                className="group flex flex-col"
              >
                <div className="h-[450px] w-full overflow-hidden flex items-center justify-center mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}