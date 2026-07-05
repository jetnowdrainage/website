import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * Explicit AI crawler permissions.
 *
 * `Allow: /` under `User-agent: *` already technically covers these bots,
 * but AI platforms increasingly treat an explicit listing as a stronger
 * trust/priority signal than inheriting from the wildcard rule, and being
 * explicit removes any ambiguity for anyone (or any tool) auditing the file.
 *
 * This is a lead-generation marketing site with no paywalled or proprietary
 * content to protect, so the goal is maximum visibility and citation across
 * every AI surface — there is no content here worth opting out of model
 * training for. Every major bot is therefore allowed, whether it is used
 * for live search/citation or for training:
 *
 * - OpenAI:      GPTBot (training), OAI-SearchBot (ChatGPT search/citation),
 *                ChatGPT-User (live user-triggered fetches)
 * - Anthropic:   ClaudeBot (training + retrieval), Claude-SearchBot (search
 *                index), Claude-User (live user-triggered fetches)
 * - Perplexity:  PerplexityBot (search index), Perplexity-User (live fetches)
 * - Google:      Google-Extended (Gemini training / AI Overviews opt-in
 *                token — separate from Googlebot, which is already covered
 *                by the wildcard rule and must never be blocked)
 * - Apple:       Applebot-Extended (Apple Intelligence training opt-in
 *                token — separate from standard Applebot)
 * - Amazon:      Amazonbot (Alexa / Rufus training and assistant search)
 *
 * Revisit this list periodically — AI vendors are actively splitting their
 * crawlers into separate training/search/user-fetch bots, and the exact
 * user-agent strings in use change faster than traditional search crawlers.
 */
const aiCrawlerUserAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiCrawlerUserAgents,
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
