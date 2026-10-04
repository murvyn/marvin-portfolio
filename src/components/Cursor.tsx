"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current, d = dot.current;
    if (!el || !d) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY; el.style.opacity = "1";
      const hot = (e.target as Element | null)?.closest("a, button, summary");
      d.style.transform = hot ? "scale(2.6)" : "scale(1)";
    };
    const loop = () => { x += (tx - x) * 0.2; y += (ty - y) * 0.2; el.style.transform = `translate(${x - 12}px, ${y - 12}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 opacity-0 transition-opacity">
      <div ref={dot} className="h-full w-full rounded-full bg-lime/60 ring-1 ring-ink/30 mix-blend-multiply transition-transform duration-300" />
    </div>
  );
}
