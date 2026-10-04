import Reveal from "./Reveal";
const rows = [
  { n: "01", t: "Frontend", d: "Sites and apps that load fast, look right on every phone and are easy to use.", tags: ["TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui", "Vite"] },
  { n: "02", t: "Backend", d: "Logins, payments, admin panels and databases that keep working as you grow.", tags: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { n: "03", t: "Mobile", d: "iOS and Android apps from one codebase, with push notifications and maps.", tags: ["React Native", "Expo", "Firebase", "Supabase"] },
  { n: "04", t: "Testing", d: "Tests get written before a bug reaches your customers, not after.", tags: ["Playwright", "Appium", "Lighthouse", "E2E", "Unit"] },
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-14 px-5 py-16 md:px-[4.5%] md:py-20">
      <div className="flex items-end justify-between">
        <Reveal as="h2" className="font-head text-5xl font-bold uppercase leading-none md:text-7xl"><sup className="mr-3 align-baseline font-mono text-[11px] font-normal">(01)</sup>What I work with</Reveal>
        <span className="hidden text-[10px] uppercase tracking-wider text-grey md:block">{"// languages & tools"}</span>
      </div>
      <Reveal variant="draw" className="dash mt-5" />
      {rows.map((r, n) => (
        <Reveal key={r.n} delay={n * 120} className="group border-b-2 border-dashed border-lime/70 px-2 py-7 transition-colors first:mt-0 hover:bg-lime">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-6">
              <span className="font-head text-3xl font-bold text-ink/20 transition group-hover:text-ink/40">{r.n}</span>
              <div>
                <h3 className="font-head text-5xl font-bold uppercase leading-none">{r.t}</h3>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-grey group-hover:text-ink">{r.d}</p>
              </div>
            </div>
            <div className="flex max-w-lg flex-wrap gap-2 md:justify-end">
              {r.tags.map((t) => <span key={t} className="rounded-full border-2 border-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{t}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
