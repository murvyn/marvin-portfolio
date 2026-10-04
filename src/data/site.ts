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

export type Project = {
  title: string;
  kind: string;
  blurb: string;
  built: string[];
  stack: string[];
  status?: string;
  link?: string;
};

export const featured: Project[] = [
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
  },
  {
    title: "First Love Church platforms",
    kind: "Client · Church network",
    blurb:
      "Internal tools for a network of affiliated churches: oversight from denomination to pastor, a pastors directory, and data collection for Qodesh.",
    built: [
      "Denomination, bishop, church and pastor hierarchy",
      "Multi-role access scoped to each leader's reach",
      "Pastors directory on a GraphQL API",
    ],
    stack: ["NestJS", "Next.js", "GraphQL", "MongoDB"],
  },
  {
    title: "Collabo",
    kind: "Client · Group savings app",
    blurb:
      "Users create groups and raise money through contribution campaigns with targets and due dates.",
    built: [
      "Worked on the Android and React Native (Expo) apps",
      "Contribution campaigns with currencies and deadlines",
    ],
    stack: ["Android", "React Native", "Expo"],
  },
];

export const sites = [
  { name: "Amegah", note: "Portfolio for a director and cinematographer, edited by the client in Sanity", stack: "Next.js · Sanity" },
  { name: "BNG Foods & Supplies", note: "Marketing site for a frozen-foods importer", stack: "Next.js" },
  { name: "Surge DH", note: "Multi-page company website", stack: "Next.js" },
  { name: "TransGhana Bookstore", note: "Second-hand bookshop storefront, pay on delivery", stack: "Next.js" },
  { name: "J2 Healthcare", note: "Behavioral health practice: services, insurance, booking", stack: "Next.js" },
  { name: "Rapha Home Health Care", note: "Home health care services website", stack: "Next.js · Tailwind" },
  { name: "Real Estate Listings", note: "Property listings with an owner-only admin", stack: "Next.js · Postgres · Clerk" },
  { name: "First Step", note: "Services, story, FAQ and blog site", stack: "Next.js" },
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
  { q: "How much does a website or app cost?", a: "It depends on what you need. After a short call I send a fixed quote for the agreed scope, so you know the price before any work starts." },
  { q: "How long will it take?", a: "A business website usually takes a few weeks. Web and mobile apps take longer depending on features. You get a timeline in the quote." },
  { q: "I'm not technical. Is that a problem?", a: "No. I explain things in plain language, and you only make the decisions that matter to your business." },
  { q: "Can I update the site myself afterwards?", a: "Yes. Where it makes sense I add a simple editor (like Sanity) so you can change text, photos and products without a developer." },
  { q: "What happens after launch?", a: "I test before going live, then stay available to fix issues and make changes. Ongoing support can be arranged if you want it." },
];
