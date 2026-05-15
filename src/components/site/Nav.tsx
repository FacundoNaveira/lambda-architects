import { useEffect, useState } from "react";

const links = [
  { id: "vision", label: "Vision" },
  { id: "experience", label: "3D Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className={`text-xs md:text-sm tracking-[0.3em] uppercase font-body ${
            scrolled ? "text-foreground" : "text-background mix-blend-difference"
          }`}
        >
          Λ&nbsp;&nbsp;Lambda
        </a>
        <ul className="flex items-center gap-6 md:gap-12">
          {links.map((l, i) => (
            <li key={l.id} className="flex items-center gap-6 md:gap-12">
              <span
                className={`hidden md:inline text-[10px] tabular-nums ${
                  scrolled ? "text-muted-foreground" : "text-background/70 mix-blend-difference"
                }`}
              >
                0{i + 1}
              </span>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className={`text-xs md:text-sm tracking-[0.2em] uppercase font-body transition-opacity hover:opacity-60 ${
                  scrolled ? "text-foreground" : "text-background mix-blend-difference"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}