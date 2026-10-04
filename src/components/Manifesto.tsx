import Reveal from "./Reveal";
export default function Manifesto() {
  const row = "relative flex flex-wrap items-center gap-x-5 font-hero uppercase leading-[0.95] text-[clamp(3.2rem,10vw,9rem)]";
  const mark = "relative -my-1 inline-block px-4 text-ink";
  return (
    <section className="bg-ink px-5 py-16 text-cream md:px-[4.5%] md:py-24">
      <Reveal as="p" className="mb-8 text-[11px] uppercase tracking-wider text-cream/50">{"// manifesto"}</Reveal>
      <div>
        <Reveal as="p" className={row}>I build <Reveal as="span" variant="wipe" delay={300} className={`${mark} bg-lime`}>Front.</Reveal></Reveal>
        <Reveal as="p" delay={200} className={`${row} -mt-2 md:-mt-4`}>I build <Reveal as="span" variant="wipe" delay={600} className={`${mark} ml-[6%] bg-mint`}>Back.</Reveal></Reveal>
        <Reveal as="p" delay={400} className={`${row} -mt-2 md:-mt-4`}>I test <Reveal as="span" variant="wipe" delay={900} className={`${mark} -ml-[2%] bg-yellow`}>Everything.</Reveal></Reveal>
      </div>
      <Reveal as="p" delay={500} className="mt-10 max-w-md text-sm leading-relaxed text-cream/80">
        One person instead of a distributed team: interface, API, database, deployment and tests, in a single pair of hands. Nothing gets
        lost between departments, because there are no departments.
      </Reveal>
    </section>
  );
}
