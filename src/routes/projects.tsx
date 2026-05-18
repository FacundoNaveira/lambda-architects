import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Lambda Architecture" },
      {
        name: "description",
        content:
          "Selected works by Lambda Architecture — pavilions, houses and cultural buildings shaped by material, light and land.",
      },
      { property: "og:title", content: "Projects — Lambda Architecture" },
      {
        property: "og:description",
        content:
          "Selected works by Lambda Architecture — pavilions, houses and cultural buildings shaped by material, light and land.",
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
    title: "Hollow Tide Pavilion",
    place: "Setouchi, JP",
    img: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Brass Garden House",
    place: "Lisbon, PT",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Quarry Cultural Hall",
    place: "Oslo, NO",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Salt Chapel",
    place: "Cádiz, ES",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Iron Loom Atelier",
    place: "Kyoto, JP",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "River Stone Library",
    place: "Porto, PT",
    img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Copper Wind House",
    place: "Reykjavík, IS",
    img: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Marble Tide Bath",
    place: "Bodrum, TR",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
];

function ProjectsPage() {
  useReveal();
  return (
    <main className="relative bg-background text-foreground antialiased animate-fade-in">
      <Nav />

      <section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-3">
              <p
                data-reveal
                className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground"
              >
                — Selected Works
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1
                data-reveal
                className="font-display font-light text-5xl md:text-7xl leading-[1.02] tracking-tight"
              >
                A decade of buildings,
                <span className="italic text-accent"> drawn slowly</span>.
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
                <div className="overflow-hidden bg-muted w-full aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="pt-5 min-h-[5.5rem]">
                  <h2 className="font-display text-2xl md:text-3xl leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    {p.place}
                  </p>
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