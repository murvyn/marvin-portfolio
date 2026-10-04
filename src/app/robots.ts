import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Everything is public and welcome: search engines and AI search/answer crawlers alike.
const aiCrawlers = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot", "Applebot-Extended",
  "Bingbot", "DuckDuckBot", "Bytespider", "CCBot", "Meta-ExternalAgent", "cohere-ai", "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
