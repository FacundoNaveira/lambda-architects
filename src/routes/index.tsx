import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Vision } from "@/components/site/Vision";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <Site mounted={mounted} />;
}

function Site({ mounted }: { mounted: boolean }) {
  useReveal();
  return (
    <main className="relative bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Vision />
      {mounted && <Experience />}
      <Contact />
    </main>
  );
}
