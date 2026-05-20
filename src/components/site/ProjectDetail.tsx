import { Project } from "@/context/ProjectContext";
import { Nav } from "./Nav";
import { useEffect } from "react";

export function ProjectDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased animate-fade-in pb-24">
      <Nav />
      <div className="pt-32 md:pt-44 px-6 md:px-12 max-w-[1600px] mx-auto">
        <button
          onClick={onBack}
          className="mb-12 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2 cursor-pointer"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Volver
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-8 order-2 md:order-1">
            <div
              className="w-full overflow-hidden aspect-[4/3] md:aspect-auto md:h-[75vh]"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div
            className="md:col-span-4 flex flex-col justify-center order-1 md:order-2"
          >
            <h1 className="font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8 border-l border-foreground/20 pl-4 py-1">
              {project.place}
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              {project.description ||
                "Una descripción arquitectónica a medida para este proyecto singular, moldeada por la materia, la luz y la tierra. Planteamos este sitio como un diálogo silencioso entre el entorno y sus habitantes."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
