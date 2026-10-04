const words = ["Frontend", "Backend", "Mobile apps", "Testing", "Writing code", "Breaking code", "Fixing code", "Covering with tests"];

export default function Marquee() {
  const row = words.map((w) => (
    <span key={w} className="flex items-center gap-6 px-3">
      <span>{w}</span><span aria-hidden>✶</span>
    </span>
  ));
  return (
    <div className="relative z-30 overflow-hidden bg-lime py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider" aria-hidden>
      <div className="marquee-track flex w-max whitespace-nowrap">
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  );
}
