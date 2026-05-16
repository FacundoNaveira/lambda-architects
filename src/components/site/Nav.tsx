import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor =
    scrolled || !onHome
      ? "text-foreground"
      : "text-background mix-blend-difference";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className={`text-xs md:text-sm tracking-[0.3em] uppercase font-body ${linkColor}`}
        >
          Λ&nbsp;&nbsp;Lambda
        </Link>

        <Link
          to="/projects"
          className={`text-xs md:text-sm tracking-[0.2em] uppercase font-body transition-opacity hover:opacity-60 ${linkColor}`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
