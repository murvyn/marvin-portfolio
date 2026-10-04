import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Stack from "@/components/Stack";
import BeforeAfter from "@/components/BeforeAfter";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { jsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }} />
      <Cursor />
      <Marquee />
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Manifesto />
        <Stack />
        <BeforeAfter />
        <Clients />
        <Work />
        <Process />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
