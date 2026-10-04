"use client";
import { useEffect, useState } from "react";

const links = [["Stack", "stack"], ["Before·After", "before-after"], ["Clients", "clients"], ["Products", "products"], ["Process", "process"], ["Resume", "resume"]] as const;

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
      <div className="flex h-[64px] items-center justify-between md:h-[72px] xl:h-[80px]">
        <a href="#top" className="font-head text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">MARVIN ASAMOAH<sup className="text-[11px] md:text-sm">®</sup></a>
        <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
          {links.map(([t, id]) => (
            <a key={id} href={`#${id}`} className={`rounded-full border-2 px-3 py-1.5 text-[11px] font-bold xl:px-5 xl:py-2 xl:text-[13px] uppercase tracking-wider transition ${active === id ? "border-ink bg-lime" : "border-transparent text-grey hover:text-ink"}`}>{t}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border-2 border-ink bg-lime px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:bg-ink hover:text-lime md:px-5 md:py-2.5 xl:px-6 xl:py-3 xl:text-[13px]">Say hello →</a>
      </div>
    </header>
  );
}
