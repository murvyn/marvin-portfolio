export const me = {
  name: "Marvin Asamoah",
  role: "Full-Stack Developer & QA Engineer",
  location: "Accra, Ghana",
  email: "marvin.asamoah.123@gmail.com",
  phone: "+233 547 453 142",
  whatsapp: "https://wa.me/233547453142?text=Hi%20Marvin%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
  github: "https://github.com/murvyn",
  linkedin: "https://www.linkedin.com/in/marvin-asamoah-8ba47517a/",
  resume: "/Marvin-Asamoah-Resume.pdf",
};

export const services = [
  {
    title: "Websites that win trust",
    body: "Fast, responsive business sites and landing pages that explain what you do and make it easy to get in touch. Content you can edit yourself when it needs a CMS.",
    for: "Businesses, clinics, creatives, startups",
  },
  {
    title: "Web apps & dashboards",
    body: "Custom platforms with logins, roles, payments and admin back-offices. Built on Next.js, NestJS and Postgres or MongoDB, so they scale past version one.",
    for: "Founders, schools, churches, SaaS ideas",
  },
  {
    title: "Mobile apps",
    body: "Cross-platform iOS and Android apps in React Native (Expo), with push notifications, maps and real-time features, shipped to the stores.",
    for: "Startups and product teams",
  },
  {
    title: "QA & performance testing",
    body: "Automated end-to-end tests with Playwright, plus Lighthouse and Appium performance audits, so what you ship is fast and doesn't break.",
    for: "Teams that want fewer bugs in production",
  },
];

export type Product = {
  title: string;
  kind: string;
  blurb: string;
  built: string[];
  stack: string[];
  status?: string;
  url?: string;
  cta?: string;
};

export const products: Product[] = [
  {
    title: "Susu Party",
    kind: "Fintech product · Ghana",
    blurb:
      "A digital susu (ROSCA) platform. Members form circles, contribute by Mobile Money, and one member takes the pot each round.",
    built: [
      "NestJS API with BullMQ jobs for rounds and payouts",
      "Next.js landing page and staff back-office",
      "Expo member app sharing one typed contract package",
    ],
    stack: ["NestJS", "Prisma", "Next.js", "Expo", "Turborepo"],
    status: "In progress",
  },
  {
    title: "The Quiet Time",
    kind: "Habit app · iOS & Android",
    blurb:
      "A daily-devotional habit app. At a set time it takes over the phone, blocking other apps and bypassing silent mode, until you finish a 9-step session.",
    built: [
      "Two fully independent native apps built from one spec",
      "Native iOS in SwiftUI and SwiftData, plus a native Android app",
      "Scheduled device takeover with scripture-memorisation recall",
    ],
    stack: ["SwiftUI", "SwiftData", "Android"],
    status: "In progress",
  },
  {
    title: "HSK4 Companion",
    kind: "Education app · Chinese exam prep",
    blurb:
      "A study app for the HSK 4 Chinese exam: spaced-repetition vocabulary, listening, reading, writing and full mock papers, with AI grading of your answers.",
    built: [
      "1,000-word flashcards and 19 full-length mock exams",
      "AI grading and progress insights powered by Claude",
      "Installable offline PWA with optional cross-device sync",
    ],
    stack: ["Next.js", "Supabase", "Claude API", "PWA"],
    url: "https://hsk-4-seven.vercel.app",
    cta: "Open app",
  },
  {
    title: "Relay",
    kind: "SaaS · WhatsApp commerce",
    blurb:
      "Small businesses sell and take bookings over WhatsApp with an AI assistant, and run it all from one dashboard.",
    built: [
      "Dashboard for products, orders, bookings and customers",
      "WhatsApp AI configuration, analytics and billing",
      "NestJS backend with a CI-gated test suite",
    ],
    stack: ["Next.js", "NestJS", "WhatsApp API", "AI"],
    url: "https://www.getrelaytech.com",
    cta: "Visit site",
  },
  {
    title: "SchoolBridge",
    kind: "Multi-tenant SaaS · Education",
    blurb:
      "School management and parent communication for private schools, from the admin office to the parent's phone.",
    built: [
      "Admin dashboard for school leadership",
      "Mobile app for parents, teachers and students",
      "Multi-tenant NestJS API",
    ],
    stack: ["NestJS", "Next.js", "Expo"],
  },
  {
    title: "TradeIQ",
    kind: "AI product · Trading",
    blurb:
      "An AI trading coach that analyses markets across timeframes, detects regimes and keeps risk in check.",
    built: [
      "NestJS analysis API with real-time updates",
      "Next.js web app for live insights",
      "Mobile companion app",
    ],
    stack: ["NestJS", "Next.js", "React Native", "WebSockets"],
    url: "https://trade-iq-web.vercel.app",
    cta: "Open app",
  },
];

export type Client = {
  name: string;
  kind: string;
  blurb: string;
  stack: string[];
  url?: string;
  cta?: string;
  extra?: { label: string; url: string }[]; // more buttons, e.g. a second app store
};

// url = the client's main (custom) domain, verified live. Leave it out when there is no public link.
export const clients: Client[] = [
  {
    name: "Qodesh Data Collection",
    kind: "Church data platform · Ghana",
    blurb: "Data collection, reporting and analytics for The Qodesh: members and weekly services across a full ministry hierarchy, with access scoped to each leader's reach.",
    stack: ["NestJS", "Next.js"],
    url: "https://data.theqodesh.com",
    cta: "Open app",
  },
  {
    name: "CWM",
    kind: "Missions finance · First Love",
    blurb: "Seed (contribution) tracking for First Love's network of churches, organised as denomination, bishop, church and pastor.",
    stack: ["NestJS", "Next.js"],
    url: "https://cwm-frontend.vercel.app",
    cta: "Open app",
  },
  {
    name: "First Love Pastors Directory",
    kind: "Directory · First Love",
    blurb: "A directory of First Love pastors and their churches, with a Next.js front end and a GraphQL API.",
    stack: ["Next.js", "NestJS", "GraphQL", "MongoDB"],
  },
  {
    name: "FCBPI",
    kind: "Fellowship website · Accra",
    blurb: "Home of the Fellowship of Christian Business People & Professionals International, under Qodesh City Church.",
    stack: ["Next.js", "Tailwind", "shadcn/ui"],
    url: "https://qodeshfcbpi.org",
  },
  {
    name: "Collabo",
    kind: "Group savings app",
    blurb: "Users create groups and raise money through contribution campaigns with targets and due dates. I worked on the Android and React Native apps.",
    stack: ["Android", "React Native", "Expo"],
    url: "https://play.google.com/store/apps/details?id=com.groupcollabo.android",
    cta: "Google Play",
    extra: [{ label: "App Store", url: "https://apps.apple.com/app/collabo-for-groups/id6504736129" }],
  },
  {
    name: "Amegah",
    kind: "Portfolio site · Film & photography",
    blurb: "A portfolio for a director, cinematographer and photographer, edited by the client in Sanity with no developer needed.",
    stack: ["Next.js", "Sanity"],
    url: "https://www.amegah.co",
  },
  {
    name: "BNG Foods & Supplies",
    kind: "Company website · Ghana",
    blurb: "Marketing site for a frozen chicken and beef importer that supplies Ghana from Brazil, with product pages and a contact page.",
    stack: ["Next.js"],
    url: "https://www.bngfoods.com",
  },
  {
    name: "Surge DH",
    kind: "Company website · Ghana",
    blurb: "Website for a Category D certified civil engineering contractor and medical & general supplies partner.",
    stack: ["Next.js"],
    url: "https://surgedh.vercel.app",
  },
  {
    name: "J2 Healthcare",
    kind: "Healthcare website · Ohio, USA",
    blurb: "Site for a psychiatric and mental health practice: services, conditions, insurance, booking and a patient centre.",
    stack: ["Next.js"],
    url: "https://www.j2healthcare.com",
  },
  {
    name: "Rapha Home Health Care",
    kind: "Healthcare website · Ohio, USA",
    blurb: "Website for a home health care provider offering skilled nursing, aide and therapy services.",
    stack: ["Next.js", "Tailwind"],
    url: "https://www.raphahhc.com",
  },
  {
    name: "First Step Home Health Care",
    kind: "Healthcare website · Ohio, USA",
    blurb: "Website for a DODD-certified nursing provider for people with developmental disabilities.",
    stack: ["Next.js"],
    url: "https://www.firststephomehealth.com",
  },
  {
    name: "Real Estate Listings",
    kind: "Property platform",
    blurb: "A property listings site with an owner-only admin area, cached public reads and unit tests.",
    stack: ["Next.js", "Neon Postgres", "Clerk"],
  },
  {
    name: "Booksopia",
    kind: "E-commerce · Ghana",
    blurb: "Ghana's home for pre-loved books: an online bookshop where readers buy second-hand books and sellers can list with the shop.",
    stack: ["WordPress", "WooCommerce"],
    url: "https://booksopia.com",
  },
];

export const experience = [
  {
    when: "Feb 2025 — Present",
    role: "QA Engineer, Performance Testing",
    org: "Hubtel Limited",
    points: [
      "Mobile performance testing with Appium: responsiveness, stability and resource use.",
      "Web audits with Lighthouse covering load time, accessibility, SEO and best practices.",
      "Performance reports with concrete optimisation recommendations.",
    ],
  },
  {
    when: "Oct 2024 — Jan 2025",
    role: "QA Engineer, End-to-End Testing",
    org: "Hubtel Limited",
    points: [
      "Automated end-to-end tests for web apps with Playwright.",
      "Published an npm package that simplifies input testing.",
      "Reusable suites for consistent, scalable coverage.",
    ],
  },
  {
    when: "Nov 2023 — Present",
    role: "Full-Stack Web Developer",
    org: "BEISTAND LTD",
    points: [
      "Responsive landing pages and dashboards with React, Next.js, Vite, Tailwind and shadcn/ui.",
      "Backend services in Node.js, Express and MongoDB.",
      "Migrated legacy dashboards from React to Next.js for speed and SEO.",
    ],
  },
  {
    when: "Aug 2023 — Dec 2023",
    role: "Frontend Developer, Intern",
    org: "First Love Center",
    points: [
      "Built and maintained the church website in React and TypeScript.",
      "Integrated Firebase for real-time data alongside the backend team.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { group: "Mobile", items: ["React Native", "Expo", "Push notifications", "Maps"] },
  { group: "Quality", items: ["Playwright", "Appium", "Lighthouse", "Unit & E2E testing"] },
  { group: "Also", items: ["Firebase", "Supabase", "Socket.IO", "Agora", "Git", "Java", "Python"] },
];

export const process = [
  { n: "01", title: "Talk", body: "A short call or WhatsApp chat about your goal, users and budget. You get a clear scope and timeline, not a vague estimate." },
  { n: "02", title: "Design", body: "Page structure and look agreed before code, so there are no surprises at the end." },
  { n: "03", title: "Build", body: "Working versions shared as I go. You see progress and can steer it." },
  { n: "04", title: "Launch & support", body: "Tested, deployed and handed over with the access and docs you need. I stay available after launch." },
];

export const faqs = [
  { q: "Who is Marvin Asamoah?", a: "Marvin Asamoah is a full-stack developer and QA engineer based in Accra, Ghana. He builds websites, web apps and mobile apps with React, Next.js, Node.js, NestJS and React Native, and tests them with Playwright, Appium and Lighthouse. He holds a BSc in Computer Science from the University of Energy and Natural Resources." },
  { q: "Is Marvin Asamoah available for freelance work?", a: "Yes. Marvin takes freelance projects from businesses, founders and individuals, and is also open to full-time roles. The fastest way to start is a WhatsApp message or an email." },
  { q: "What kinds of projects does Marvin build?", a: "Business websites and landing pages, web apps and dashboards with logins, roles and payments, cross-platform mobile apps, and automated QA and performance testing. Recent work includes church platforms, healthcare websites, a WhatsApp commerce SaaS and a Chinese exam-prep app." },
  { q: "Where is Marvin based, and does he work remotely?", a: "Marvin is based in Accra, Ghana (GMT) and works remotely with clients in Ghana, the United States and elsewhere." },
  { q: "What technologies does Marvin use?", a: "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, NestJS, Express, PostgreSQL, MongoDB, Redis, Prisma. Mobile: React Native and Expo. Testing: Playwright, Appium and Lighthouse." },
  { q: "How much does a website or app cost?", a: "It depends on what you need. After a short call I send a fixed quote for the agreed scope, so you know the price before any work starts." },
  { q: "How long will it take?", a: "A business website usually takes a few weeks. Web and mobile apps take longer depending on features. You get a timeline in the quote." },
  { q: "I'm not technical. Is that a problem?", a: "No. I explain things in plain language, and you only make the decisions that matter to your business." },
  { q: "Can I update the site myself afterwards?", a: "Yes. Where it makes sense I add a simple editor (like Sanity) so you can change text, photos and products without a developer." },
  { q: "What happens after launch?", a: "I test before going live, then stay available to fix issues and make changes. Ongoing support can be arranged if you want it." },
];
