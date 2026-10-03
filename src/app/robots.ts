import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content";

export const dynamic = "force-static";

// Moteurs de recherche et moteurs de réponse IA explicitement autorisés :
// le site doit pouvoir être cité par Google (AI Overviews / AI Mode), Bing / Copilot,
// ChatGPT, Perplexity, Claude et Apple Intelligence.
const aiCrawlers = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
  "Applebot-Extended",
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
