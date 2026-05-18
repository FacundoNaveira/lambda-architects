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
    title: "Xi’an CCBD (Centre Culture Business District)",
    place: "Xian, China",
    img: "https://heatherwick.com/wp-content/uploads/0437_Xi_an_CCBD_N2305_medium_1406x1125_acf_cropped-900x720.jpg",
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
    title: "EDEN",
    place: "Singapore",
    img: "https://heatherwick.com/wp-content/uploads/heatherwick-Website-Project-Page-16021_1977x2000_acf_cropped-2-890x900.jpg",
  },
    {
    title: "Azabudai Hills",
    place: "Tokyo, Japan",
    img: "https://heatherwick.com/wp-content/uploads/231117_Azabudai-Hills-opens_press-release_FINAL_1379x776_acf_cropped-2-900x506.jpg",
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
            Back
          </Link>
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-3"></div>
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
                className="group flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(p)}
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
                  <h2 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
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