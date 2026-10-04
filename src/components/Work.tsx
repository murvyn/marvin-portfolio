"use client";
import Reveal from "./Reveal";
import { useRef, useState } from "react";
import { products } from "@/data/site";

const colors = ["bg-lime", "bg-mint", "bg-yellow"];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ down: false, x: 0, left: 0 });

  const step = () => {
    const card = ref.current?.children[0] as HTMLElement | undefined;
    return card ? card.offsetWidth + 20 : 440;
  };
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setI(end ? products.length - 1 : Math.round(el.scrollLeft / step()));
    setAtEnd(end);
  };
  const go = (n: number) => ref.current?.scrollTo({ left: n * step(), behavior: "smooth" });
  const by = (d: number) => ref.current?.scrollBy({ left: d * step(), behavior: "smooth" });

  // mouse drag-to-scroll (touch and trackpad already scroll natively)
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { down: true, x: e.clientX, left: ref.current.scrollLeft };
    ref.current.style.scrollSnapType = "none";
    ref.current.classList.add("cursor-grabbing");
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !ref.current) return;
    ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    if (!drag.current.down || !ref.current) return;
    drag.current.down = false;
    const target = Math.round(ref.current.scrollLeft / step());
    ref.current.classList.remove("cursor-grabbing");
    ref.current.style.scrollSnapType = "";
    go(target);
  };

  return (
    <section id="products" className="scroll-mt-24 px-5 py-16 md:px-[4.5%] md:py-20">
      <div className="flex items-end justify-between">
        <Reveal as="h2" className="font-head text-5xl font-bold uppercase leading-none md:text-7xl"><sup className="mr-3 align-baseline font-mono text-[11px] font-normal">(03)</sup>Products</Reveal>
        <span className="hidden text-[10px] uppercase tracking-wider text-grey md:block">{"// drag, scroll or use the arrows →"}</span>
      </div>
      <Reveal variant="draw" className="dash mt-5" />

      <div
        ref={ref}
        onScroll={onScroll}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="no-scrollbar -mx-5 mt-5 flex cursor-grab snap-x snap-mandatory select-none gap-5 overflow-x-auto scroll-pl-5 px-5 py-3 md:-mx-[4.5vw] md:scroll-pl-[4.5vw] md:px-[4.5vw]"
      >
        {products.map((p, n) => (
          <Reveal as="article" variant="right" delay={n * 90} key={p.title} className={`${colors[n % 3]} flex min-h-[420px] w-[82vw] shrink-0 snap-start flex-col rounded-3xl border-2 border-ink p-6 transition-transform hover:-translate-y-1 md:w-[420px]`}>
            <div className="flex items-start justify-between text-[10px] font-bold uppercase tracking-wider">
              <span>№{String(n + 1).padStart(2, "0")} — {p.kind}</span>
              {p.status && <span className="rounded-full border-2 border-ink px-2 py-0.5">{p.status}</span>}
            </div>
            <h3 className="mt-10 break-words font-hero text-5xl uppercase leading-[0.9] md:text-6xl">{p.title}</h3>
            <p className="mt-5 text-xs leading-relaxed">{p.blurb}</p>
            <ul className="mt-3 space-y-1 pb-4 text-xs">
              {p.built.map((b) => <li key={b}>→ {b}</li>)}
            </ul>
            <div className="pb-6">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition hover:bg-ink hover:text-cream"
                >
                  {p.cta ?? "Visit site"} <span aria-hidden>↗</span>
                </a>
              )}
            </div>
            <div className="mt-auto border-t-2 border-dashed border-ink pt-3 text-[10px] font-bold uppercase tracking-wider">{p.stack.join(" · ")}</div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="-ml-1.5 flex items-center">
          {products.map((p, n) => (
            <button key={p.title} aria-label={`Go to ${p.title}`} onClick={() => go(n)} className="grid h-6 w-6 place-items-center">
              <span className={`h-3 w-3 rounded-full border-2 border-ink transition ${i === n ? "bg-ink" : ""}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button aria-label="Previous project" onClick={() => by(-1)} disabled={i === 0} className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-lg transition hover:bg-lime disabled:opacity-30 disabled:hover:bg-transparent">←</button>
          <button aria-label="Next project" onClick={() => by(1)} disabled={atEnd} className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-lg transition hover:bg-lime disabled:opacity-30 disabled:hover:bg-transparent">→</button>
        </div>
      </div>
    </section>
  );
}
