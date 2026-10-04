import type { Metadata } from "next";
import { Anton, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Marvin Asamoah — Full-Stack Developer & QA Engineer",
  description:
    "Marvin Asamoah builds fast, reliable websites, web apps and mobile apps for businesses and founders, and tests everything before it ships. Available for freelance projects and full-time roles.",
  openGraph: {
    title: "Marvin Asamoah — Full-Stack Developer & QA Engineer",
    description: "I build front. I build back. I test everything.",
    type: "website",
  },
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
