import Reveal from "./Reveal";
import { experience, skills, faqs } from "@/data/site";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 bg-cream-2 px-5 py-16 md:px-[4.5%] md:py-20">
      <div className="flex items-end justify-between">
        <Reveal as="h2" className="font-head text-5xl font-bold uppercase leading-none md:text-7xl"><sup className="mr-3 align-baseline font-mono text-[11px] font-normal">(05)</sup>Resume</Reveal>
        <a href="/Marvin-Asamoah-Resume.pdf" className="rounded-full border-2 border-ink bg-lime px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition hover:bg-ink hover:text-lime">Download CV ↓</a>
      </div>
      <Reveal variant="draw" className="dash mt-5" />

      <ol className="mt-8 divide-y-2 divide-dashed divide-ink/30">
        {experience.map((e) => (
          <Reveal as="li" key={e.role + e.when} className="grid gap-3 py-7 md:grid-cols-[200px_1fr] md:gap-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-grey">{e.when}</p>
            <div>
              <h3 className="font-head text-3xl font-semibold uppercase leading-tight">{e.role} <span className="text-grey">· {e.org}</span></h3>
              <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-grey">
                {e.points.map((p) => <li key={p}>→ {p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
        <Reveal as="li" className="grid gap-3 py-7 md:grid-cols-[200px_1fr] md:gap-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-grey">2020 — 2024</p>
          <div>
            <h3 className="font-head text-3xl font-semibold uppercase leading-tight">BSc Computer Science <span className="text-grey">· University of Energy and Natural Resources</span></h3>
            <p className="mt-3 text-xs text-grey">Software engineering, algorithms, operating systems, secure networks, AI and project management.</p>
          </div>
        </Reveal>
      </ol>

      <div className="mt-8 grid gap-6 border-t-2 border-ink pt-8 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((g, n) => (
          <Reveal key={g.group} delay={n * 90}>
            <p className="text-[11px] font-bold uppercase tracking-wider">{g.group}</p>
            <p className="mt-2 text-xs leading-relaxed text-grey">{g.items.join(", ")}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="h3" className="mt-16 font-head text-4xl font-bold uppercase">Questions people ask</Reveal>
      <div className="mt-4 border-t-2 border-ink">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b-2 border-ink py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-head text-xl font-semibold uppercase">
              {f.q}<span className="text-2xl transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-grey">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
