import { Project } from "@/context/ProjectContext";
import { useEffect, useState } from "react";

export function ProjectDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentIndex(0);
  }, [project]);

  const images = project.images || [];
  const hasImages = images.length > 0;
  const showControls = images.length > 1;

  const nextSlide = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased animate-fade-in pb-24">
      <div className="pt-16 md:pt-24 px-6 md:px-12 max-w-[1600px] mx-auto">
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

        {/* Gallery Label */}
        <div className="mt-20 border-t border-foreground/10 pt-12">
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4 block">
            — GALERÍA DE IMÁGENES
          </span>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-neutral-200/5 border border-foreground/5 group flex items-center justify-center">
          {hasImages ? (
            <>
              {images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />
              ))}

              {showControls && (
                <>
                  <button
                    onClick={prevSlide}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-foreground/70 hover:text-[#B0A080] z-10 cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4 top-1/2 -translate-y-1/2 p-4 text-2xl text-foreground/70 hover:text-[#B0A080] z-10 cursor-pointer"
                  >
                    →
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentIndex === index ? "bg-[#B0A080] w-4" : "bg-foreground/20 hover:bg-foreground/45"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 text-center p-8">
              <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center animate-pulse">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">λ</span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground animate-pulse">
                — Galería en preparación
              </span>
            </div>
          )}
        </div>

        {/* Technical Details Section */}
        {project.technicalDetails && Object.keys(project.technicalDetails).length > 0 && (
          <div className="mt-16 border-t border-foreground/10 pt-12">
            <h3 className="font-display font-light text-2xl md:text-3xl tracking-tight mb-6">
              Detalles Técnicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8 p-6 bg-neutral-100/50 rounded-sm">
              {Object.entries(project.technicalDetails).map(([key, value]) => {
                const labelMap: Record<string, string> = {
                  ubicacion: "Ubicación",
                  programa: "Programa",
                  sustentabilidad: "Sustentabilidad",
                  materiales: "Materiales",
                  concepto: "Concepto",
                };
                const label = labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
                return (
                  <div key={key} className="flex flex-col gap-1 border-b border-foreground/5 pb-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground font-body">
                      {label}
                    </span>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
