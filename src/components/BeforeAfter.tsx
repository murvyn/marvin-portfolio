import Reveal from "./Reveal";
const rows = [
  ["Launch", "Crossing fingers on release day", "Tested, deployed, ready"],
  ["Updates", "Waiting on a developer for every edit", "Change it yourself"],
  ["Bugs", "Customers find them first", "Caught before launch"],
  ["Orders", "Lost in DMs and notebooks", "Taken on your own site"],
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-24 bg-cream-2 px-5 py-16 md:px-[4.5%] md:py-20">
      <Reveal as="h2" className="font-hero text-[clamp(3.5rem,13vw,12rem)] uppercase leading-[0.9]">
        Before <span className="mx-2 inline-block h-[0.55em] w-[0.55em] translate-y-[0.04em] rounded-full border-[6px] border-ink bg-lime align-middle" /> After
      </Reveal>
      <Reveal as="p" delay={150} className="mt-3 text-[11px] uppercase tracking-wider text-grey">{"// what usually changes when you work with a developer who tests"}</Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal variant="left" className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink bg-ink p-6 text-cream">
          <p className="font-hero text-6xl uppercase leading-none text-cream/90 md:text-8xl">Bug.<br />Panic.<br />Repeat.</p>
          <p className="rounded-full bg-cream px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink">Before: 2 am, red logs, deadline was yesterday</p>
        </Reveal>
        <Reveal variant="right" delay={150} className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink bg-lime p-6">
          <p className="font-hero text-6xl uppercase leading-none md:text-8xl">Ship.<br />Sleep.<br />Grow.</p>
          <p className="rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider">After: releases on schedule, sleep at night</p>
        </Reveal>
      </div>

      <div className="mt-5 divide-y-2 divide-dashed divide-ink/30 overflow-hidden rounded-xl border-2 border-dashed border-ink/40 bg-yellow">
        {rows.map(([k, a, b], n) => (
          <Reveal key={k} delay={n * 120} className="grid items-center gap-2 px-5 py-4 text-xs md:grid-cols-[160px_1fr_auto_1fr] md:gap-6">
            <span className="font-bold uppercase tracking-wider">{k}</span>
            <span className="text-ink/50 line-through">{a}</span>
            <span aria-hidden className="hidden text-xl md:block">→</span>
            <span className="font-head text-xl font-semibold uppercase">{b}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
