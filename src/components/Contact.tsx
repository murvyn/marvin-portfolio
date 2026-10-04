import Reveal from "./Reveal";
import { me } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink px-5 pb-8 pt-16 text-cream md:px-[4.5%] md:pt-24">
      <Reveal as="p" className="text-[11px] uppercase tracking-wider text-cream/50">{"// got a project? a bug? doubts?"}</Reveal>
      <Reveal delay={150} className="mt-6"><a href={me.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-6 font-hero uppercase leading-none text-lime text-[clamp(4rem,15vw,14rem)]">
        Write me <span className="nudge">→</span>
      </a></Reveal>
      <p className="mt-4 max-w-md text-xs text-cream/70">WhatsApp is fastest. I usually reply within a day, whether it&apos;s a website for your shop or a role on your team.</p>
      <div className="dash-b mt-16 grid gap-3 border-t-2 border-dashed border-cream/20 pt-5 text-[11px] uppercase tracking-wider text-cream/60 md:grid-cols-4">
        <a href={`mailto:${me.email}`} className="hover:text-lime">{me.email}</a>
        <p className="flex gap-4"><a href={me.github} target="_blank" rel="noreferrer" className="hover:text-lime">GitHub</a><a href={me.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">LinkedIn</a></p>
        <p>Accra, GH · Remote worldwide</p>
        <p className="md:text-right">© {new Date().getFullYear()} Marvin Asamoah</p>
      </div>
    </section>
  );
}
