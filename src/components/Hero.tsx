export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-10 pt-12 md:px-[4.5%] md:pt-16">
      <div className="fade-up flex justify-between border-b-2 border-dashed border-lime/70 pb-3 text-[11px] uppercase tracking-wider text-grey" style={{ "--d": "100ms" } as React.CSSProperties}>
        <span>marvin.dev — fullstack</span>
        <span>Accra, GH · GMT</span>
      </div>

      <div className="relative mt-6 md:mt-8">
        <h1 className="relative z-10 font-hero uppercase leading-[0.86] tracking-tight text-[clamp(5rem,19vw,19rem)] md:text-[clamp(6rem,16.5vw,17rem)]">
          <span className="hero-line"><span style={{ "--d": "200ms" } as React.CSSProperties}>Marvin</span></span>
          <span className="hero-line md:ml-[12%] md:text-[22.5vw]"><span style={{ "--d": "380ms" } as React.CSSProperties}>Asamoah</span></span>
        </h1>

        <div className="pop-in absolute left-[28%] top-[8%] z-20 hidden md:block">
          <div className="badge grid h-[128px] w-[128px] place-items-center rounded-full border-[6px] border-ink/90 ring-8 ring-lime/40">
            <span className="font-head text-5xl font-bold">DEV</span>
          </div>
        </div>
      </div>

      <p className="fade-up relative z-10 mt-8 max-w-xl text-sm leading-relaxed text-grey md:mt-6" style={{ "--d": "900ms" } as React.CSSProperties}>
        Freelance full-stack developer &amp; QA engineer in Accra, Ghana. I turn your idea into a website, web app or mobile app that works,
        and I test it before you launch. For business owners, founders and teams, in Ghana and worldwide.
      </p>

      <div className="fade-up relative z-10 mt-6 flex flex-wrap gap-3" style={{ "--d": "1050ms" } as React.CSSProperties}>
        <a href="#contact" className="rounded-full border-2 border-ink bg-lime px-6 py-3 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5 hover:bg-ink hover:text-lime">Discuss a project →</a>
        <a href="/Marvin-Asamoah-Resume.pdf" className="rounded-full border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5 hover:bg-ink hover:text-cream">Download CV</a>
      </div>
    </section>
  );
}
