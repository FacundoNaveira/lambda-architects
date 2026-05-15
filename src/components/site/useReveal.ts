import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const tweens = els.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    );

    return () => {
      tweens.forEach((t) => t.scrollTrigger?.kill());
      tweens.forEach((t) => t.kill());
    };
  }, []);
}