"use client";
import { useEffect, useState } from "react";

const links = [["Stack", "stack"], ["Before·After", "before-after"], ["Work", "work"], ["Process", "process"], ["Resume", "resume"]] as const;

export default function Header() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream px-5 md:px-[4.5%]">
      <div className="flex h-[50px] items-center justify-between md:h-[52px]">
        <a href="#top" className="font-head text-xl font-bold tracking-tight">MARVIN ASAMOAH<sup className="text-[9px]">®</sup></a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([t, id]) => (
            <a key={id} href={`#${id}`} className={`rounded-full border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition ${active === id ? "border-ink bg-lime" : "border-transparent text-grey hover:text-ink"}`}>{t}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border-2 border-ink bg-lime px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition hover:bg-ink hover:text-lime">Say hello →</a>
      </div>
    </header>
  );
}
