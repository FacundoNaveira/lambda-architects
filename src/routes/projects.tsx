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
    title: "Azabudai Hills",
    place: "Tokyo, JP",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Little Island",
    place: "New York, US",
    img: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Coal Drops Yard",
    place: "London, UK",
    img: "https://images.unsplash.com/photo-1568659585060-d63ae5d4b71d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Zeitz MOCAA",
    place: "Cape Town, ZA",
    img: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "1000 Trees",
    place: "Shanghai, CN",
    img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Vessel",
    place: "New York, US",
    img: "https://images.unsplash.com/photo-1583335026242-394755527f95?auto=format&fit=crop&w=1400&q=80",
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