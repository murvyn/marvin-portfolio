import Reveal from "./Reveal";
import { process } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-16 md:px-[4.5%] md:py-20">
      <div className="flex items-end justify-between">
        <Reveal as="h2" className="font-head text-5xl font-bold uppercase leading-none md:text-7xl"><sup className="mr-3 align-baseline font-mono text-[11px] font-normal">(04)</sup>How the work goes</Reveal>
        <span className="hidden text-[10px] uppercase tracking-wider text-grey md:block">{"// 4 steps, no magic"}</span>
      </div>
      <Reveal variant="draw" className="dash mt-5" />
      <div className="relative mt-12 grid gap-10 md:grid-cols-4">
        <Reveal variant="draw" delay={300} className="pointer-events-none absolute left-[12%] right-[12%] top-[58px] hidden border-t-2 border-dashed border-lime md:block" />
        {process.map((s, n) => (
          <div key={s.n} className="relative text-center">
            <Reveal variant="pop" delay={400 + n * 180} className="mx-auto grid h-[116px] w-[116px] place-items-center rounded-full border-[5px] border-ink bg-cream font-hero text-5xl transition hover:bg-lime">{String(n + 1).padStart(2, "0")}</Reveal>
            <Reveal delay={550 + n * 180}><h3 className="mt-5 font-head text-2xl font-bold uppercase">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-[240px] text-xs leading-relaxed text-grey">{s.body}</p></Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
