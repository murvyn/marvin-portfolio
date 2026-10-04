# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm install` — install deps
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint

No test suite.

## Architecture

Single-page personal portfolio for Marvin Asamoah (Next.js 16 App Router, React 19, Tailwind v4, TypeScript). No backend. It replaced an older Create React App site on the same repo.

- `src/app/page.tsx` composes the sections in order: `Marquee`, `Header`, `Hero`, `Manifesto`, `Stack`, `BeforeAfter`, `Work`, `Process`, `Resume`, `Contact`. Components are in `src/components/`.
- Content lives in `src/data/site.ts` (contact details, services, featured projects, client websites, experience, skills, process steps, FAQs). Edit text there rather than in the components. `Stack`, `BeforeAfter` and `Hero` hold their own copy inline.
- Design tokens (cream, ink, lime, mint, yellow) and all keyframes are in `src/app/globals.css`. Fonts (Anton, Oswald, JetBrains Mono) load in `src/app/layout.tsx`.
- Motion: `Reveal.tsx` adds an `in` class when an element scrolls into view, and CSS does the rest (variants `up`, `pop`, `left`, `right`, `wipe`, `draw`). `wipe` observes its parent, because a fully clipped element never reports as visible. Hero load-in is pure CSS. Everything is disabled under `prefers-reduced-motion`.
- `Work.tsx` is a horizontal scroller with arrow buttons and mouse drag-to-scroll. Its vertical padding stops the hover lift from being clipped, so keep it.
- The resume PDF is `public/Marvin-Asamoah-Resume.pdf`, linked from the Hero and Resume sections.
- Project cards have no links yet; the data type has no link field.
