"use client";
import { useEffect, useRef } from "react";

type Variant = "up" | "pop" | "left" | "right" | "wipe" | "draw";

export default function Reveal({
  children, className = "", variant = "up", delay = 0, as = "div",
}: { children?: React.ReactNode; className?: string; variant?: Variant; delay?: number; as?: "div" | "li" | "p" | "h2" | "h3" | "span" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // a fully clipped element never reports as visible, so wipes watch their parent line instead
    const target = variant === "wipe" ? (el.parentElement ?? el) : el;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [variant]);
  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`rv rv-${variant} ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
