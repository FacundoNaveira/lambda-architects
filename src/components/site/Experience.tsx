import { useEffect, useState, lazy, Suspense } from "react";
import { useProject } from "@/context/ProjectContext";

const ThreeScene = lazy(() => import("./ThreeExperience.tsx"));

const hospitalProject = {
  title: "Hospital Regional Rosario",
  place: "Rosario, Argentina",
  img: "./public/hospital.avif",
  description: "El complejo sanitario se despliega en tres niveles estructurados a partir de un núcleo central de hormigón visto. La planta baja alberga las áreas de alta complejidad y guardia médica, mientras que los pisos superiores se reservan para internación y salas quirúrgicas, optimizando los flujos de circulación técnica.\n\nEstrategia Bioclimática: Diseñado específicamente para el clima de la región de Santa Fe, el edificio incorpora parasoles verticales de madera local que mitigan la radiación solar directa del oeste. Los patios internos actúan como pulmones térmicos que fuerzan la ventilación cruzada pasiva, reduciendo un 35% el consumo energético operativo.",
  images: ["/hospital.avif", "/Azabudai Hills.jpg", "/little island.jpg"],
  technicalDetails: {
    ubicacion: "Rosario, Santa Fe, Argentina",
    programa: "Complejo sanitario regional de mediana y alta complejidad, guardia y salas de internación",
    sustentabilidad: "Estrategia bioclimática pasiva, ventilación cruzada natural y parasoles verticales de madera local",
    materiales: "Núcleo de hormigón visto, parasoles de madera sustentable y cerramientos de vidrio de control solar",
  },
};

export function Experience() {
  const [mounted, setMounted] = useState(false);
  const { setSelectedProject } = useProject();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="experience"
      className="relative bg-foreground text-background py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Column: Text & CTA */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-background/60 mb-6">
              — Rosario, Argentina
            </p>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-8">
              Nuestra presencia en Argentina
            </h2>
            <p className="font-body text-sm md:text-base leading-relaxed text-background/70 max-w-xl mb-10">
              Desarrollamos infraestructura de salud pública con un enfoque en la eficiencia lumínica y la integración urbana. Este hospital regional representa un hito en la arquitectura sanitaria de Santa Fe.
            </p>
            <button 
              onClick={() => setSelectedProject(hospitalProject)}
              className="border border-background/20 hover:border-background/60 hover:text-accent hover:bg-background/5 text-background/80 transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs px-8 py-4 w-fit cursor-pointer"
            >
              Ver el proyecto
            </button>
          </div>

          {/* Right Column: 3D Model */}
          <div className="col-span-12 md:col-span-6 w-full h-[350px] md:h-[550px] flex items-center justify-center relative">
            <div className="w-full h-full max-w-[500px] max-h-[500px]">
              {mounted && (
                <Suspense fallback={<div className="h-full w-full bg-foreground" />}>
                  <ThreeScene />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}