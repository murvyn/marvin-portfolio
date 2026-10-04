import Reveal from "./Reveal";
import { clients } from "@/data/site";

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function Clients() {
  const live = clients.filter((c) => c.url).length;
  return (
    <section id="clients" className="scroll-mt-24 bg-ink px-5 py-16 text-cream md:px-[4.5%] md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal as="h2" className="font-hero text-[clamp(4rem,13vw,12rem)] uppercase leading-[0.9]">
          <sup className="mr-3 align-top font-mono text-[11px] font-normal tracking-wider text-cream/50">(02)</sup>
          Clients<span className="ml-3 inline-block -translate-y-[0.35em] rounded-full bg-lime px-4 py-1 align-top font-mono text-sm font-bold tracking-wider text-ink md:text-base">{clients.length}</span>
        </Reveal>
        <Reveal as="p" delay={150} className="max-w-xs text-[11px] uppercase tracking-wider text-cream/60">
          {"// "}{clients.length} clients · {live} with live links you can open
        </Reveal>
      </div>
      <Reveal variant="draw" className="mt-6 border-t-2 border-dashed border-lime/60" />
      <Reveal as="p" delay={100} className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/80">
        Churches, companies and care providers in Ghana and the US who trusted me to build their website or platform. Every link below goes
        to a live site you can open.
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c, n) => (
          <Reveal as="article" key={c.name} delay={(n % 3) * 110} className="group flex flex-col rounded-3xl border-2 border-cream bg-cream p-6 text-ink transition-colors duration-300 hover:bg-lime">
            <div className="flex items-start justify-between gap-3 text-[10px] font-bold uppercase tracking-wider">
              <span>№{String(n + 1).padStart(2, "0")}</span>
              <span className="text-right text-grey group-hover:text-ink">{c.kind}</span>
            </div>
            <h3 className="mt-8 break-words font-hero text-4xl uppercase leading-[0.95] md:text-5xl">{c.name}</h3>
            <p className="mt-4 text-xs leading-relaxed">{c.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-1.5 pb-6">
              {c.stack.map((t) => (
                <span key={t} className="rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">{t}</span>
              ))}
            </div>
            {c.url && (
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ink/40 pt-5">
                <div className="flex flex-wrap gap-2">
                  {[{ label: c.cta ?? "Visit site", url: c.url }, ...(c.extra ?? [])].map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lime px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition hover:bg-ink hover:text-lime group-hover:bg-ink group-hover:text-lime group-hover:hover:bg-cream group-hover:hover:text-ink"
                    >
                      {l.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
                {!c.extra && <span className="truncate text-[10px] text-grey group-hover:text-ink">{host(c.url)}</span>}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
