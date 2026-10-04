import type { Metadata, Viewport } from "next";
import { Anton, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DESCRIPTION, SITE_NAME, SITE_URL, TITLE } from "@/lib/seo";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Marvin Asamoah" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Marvin Asamoah", url: SITE_URL }],
  creator: "Marvin Asamoah",
  publisher: "Marvin Asamoah",
  category: "technology",
  keywords: [
    "Marvin Asamoah",
    "freelance full-stack developer Ghana",
    "freelance web developer Accra",
    "hire a developer in Ghana",
    "Next.js developer Ghana",
    "React developer Accra",
    "React Native developer Ghana",
    "mobile app developer Accra",
    "website developer for businesses in Ghana",
    "QA engineer Ghana",
    "Playwright test automation",
    "NestJS developer",
    "remote full-stack developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#fdf5ee",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${oswald.variable} ${mono.variable}`}>
      <body>
        <noscript><style>{".rv{opacity:1!important;transform:none!important;clip-path:none!important}"}</style></noscript>
        {children}
      </body>
    </html>
  );
}
