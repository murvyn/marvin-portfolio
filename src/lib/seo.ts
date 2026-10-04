import { clients, faqs, me, products, services, skills } from "@/data/site";

// Permanent canonical address of the site.
export const SITE_URL = "https://marvin.getrelaytech.com";
export const SITE_NAME = "Marvin Asamoah";
export const TITLE = "Marvin Asamoah — Freelance Full-Stack Developer & QA Engineer in Accra, Ghana";
export const DESCRIPTION =
  "Marvin Asamoah is a freelance full-stack developer and QA engineer in Accra, Ghana. He builds fast, tested websites, web apps and mobile apps with React, Next.js, Node.js and React Native for businesses, founders and teams worldwide. Open to freelance projects and full-time roles.";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const serviceId = `${SITE_URL}/#service`;

const sameAs = [me.github, me.linkedin];
const knowsAbout = [...new Set(skills.flatMap((g) => g.items))];

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: me.name,
        url: SITE_URL,
        jobTitle: me.role,
        description: DESCRIPTION,
        email: `mailto:${me.email}`,
        address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "University of Energy and Natural Resources" },
        knowsAbout,
        sameAs,
        mainEntityOfPage: SITE_URL,
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: "Marvin Asamoah — Freelance Web & Mobile Development and QA",
        url: SITE_URL,
        description:
          "Freelance website, web app and mobile app development, plus automated QA and performance testing, from Accra, Ghana for clients worldwide.",
        provider: { "@id": personId },
        areaServed: ["Ghana", "United States", "Worldwide"],
        serviceType: ["Web development", "Mobile app development", "QA and performance testing"],
        address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body, audience: { "@type": "Audience", audienceType: s.for } },
          })),
        },
      },
      {
        "@type": "ItemList",
        name: "Client and product work by Marvin Asamoah",
        itemListElement: [
          ...clients.map((c) => ({ name: c.name, description: c.blurb, url: c.url })),
          ...products.map((p) => ({ name: p.title, description: p.blurb, url: p.url })),
        ].map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: w.name,
            description: w.description,
            ...(w.url ? { url: w.url } : {}),
            creator: { "@id": personId },
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

// Plain-text summaries for AI search (llms.txt convention).
const link = (label: string, url?: string) => (url ? `[${label}](${url})` : label);
const clientLine = (c: (typeof clients)[number]) => {
  const extra = (c.extra ?? []).map((e) => ` · ${link(e.label, e.url)}`).join("");
  return `- ${link(c.name, c.url)}: ${c.kind}. ${c.blurb}${extra}`;
};
const productLine = (p: (typeof products)[number]) => `- ${link(p.title, p.url)}: ${p.kind}. ${p.blurb}`;

export function llmsTxt() {
  return `# ${SITE_NAME}

> ${DESCRIPTION}

Canonical site: [${SITE_URL}](${SITE_URL})
Full details for AI assistants: [llms-full.txt](${SITE_URL}/llms-full.txt)

## Contact
- [Email](mailto:${me.email}): ${me.email}
- [WhatsApp](${me.whatsapp})
- [GitHub](${me.github})
- [LinkedIn](${me.linkedin})
- [Resume (PDF)](${SITE_URL}${me.resume})

## What Marvin does
${services.map((s) => `- ${s.title}: ${s.body}`).join("\n")}

## Client work
${clients.map(clientLine).join("\n")}

## Products
${products.map(productLine).join("\n")}
`;
}

export function llmsFullTxt() {
  return `${llmsTxt()}
## Skills
${skills.map((g) => `- ${g.group}: ${g.items.join(", ")}`).join("\n")}

## Frequently asked questions
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
}
