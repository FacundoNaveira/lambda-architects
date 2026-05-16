import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThreeScene = lazy(() => import("./ThreeExperience.tsx"));

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Expand canvas as user scrolls in
      gsap.fromTo(
        canvasWrapRef.current,
        { width: "60%", height: "60vh", borderRadius: "12px" },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.8,
          },
        }
      );

      gsap.to(headingRef.current, {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=40%",
          scrub: true,
          pin: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-foreground text-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          ref={canvasWrapRef}
          className="relative overflow-hidden bg-foreground"
          style={{ width: "60%", height: "60vh" }}
        >
          {mounted && (
            <Suspense fallback={<div className="h-full w-full bg-foreground" />}>
              <ThreeScene />
            </Suspense>
          )}
        </div>

        <div
          ref={headingRef}
          className="pointer-events-none absolute top-10 md:top-16 left-0 right-0 px-6 md:px-12 z-10"
        >
          <div className="mx-auto max-w-[1600px] flex items-start justify-between">
            <p className="text-[10px] tracking-[0.4em] uppercase text-background/70">
              — 3D Experience
            </p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-background/70">
              Drag · Zoom
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-0 right-0 px-6 md:px-12 z-10">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="font-display font-light text-3xl md:text-5xl text-background/95 max-w-2xl leading-tight">
              Form, in conversation with light.
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll runway so the pin/expand has length */}
      <div className="h-[80vh]" />
    </section>
  );
}