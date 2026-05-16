import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";

type NavLink = { label: string } & ({ id: string } | { to: string });

const links: NavLink[] = [
  { id: "vision", label: "Vision" },
  { id: "experience", label: "3D Experience" },
  { to: "/projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ to: "/", hash: id });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className={`text-xs md:text-sm tracking-[0.3em] uppercase font-body ${
            scrolled || !onHome ? "text-foreground" : "text-background mix-blend-difference"
          }`}
        >
          Λ&nbsp;&nbsp;Lambda
        </Link>
        <ul className="flex items-center gap-6 md:gap-12">
          {links.map((l, i) => (
            <li key={l.label} className="flex items-center gap-6 md:gap-12">
              <span
                className={`hidden md:inline text-[10px] tabular-nums ${
                  scrolled || !onHome ? "text-muted-foreground" : "text-background/70 mix-blend-difference"
                }`}
              >
                0{i + 1}
              </span>
              {"to" in l ? (
                <Link
                  to={l.to}
                  className={`text-xs md:text-sm tracking-[0.2em] uppercase font-body transition-opacity hover:opacity-60 ${
                    scrolled || !onHome ? "text-foreground" : "text-background mix-blend-difference"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleAnchor(e, l.id)}
                  className={`text-xs md:text-sm tracking-[0.2em] uppercase font-body transition-opacity hover:opacity-60 ${
                    scrolled || !onHome ? "text-foreground" : "text-background mix-blend-difference"
                  }`}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}