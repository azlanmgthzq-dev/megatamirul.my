import type { EngineeringTabId } from "./tabs.config";

type EngineeringContentEntry = {
  concept: string;
  inPractice: string;
};

export const engineeringContent: Record<EngineeringTabId, EngineeringContentEntry> = {
  data: {
    concept:
      "Data in a web app moves through three stages: it's moved (fetched from an API or database), stored (structured into a schema with the right access rules), and transformed (aggregated or reshaped for the UI — charts, summaries, reports).",
    inPractice:
      "In the ICP Dashboard, a BIP Claim Summary widget was intermittently showing RM 0.00 due to a React state batching timing issue — the async data hadn't resolved yet when the render happened. I fixed it by introducing a local state variable to bypass the batching and ensure the UI only rendered once the data was actually ready.",
  },
  security: {
    concept:
      "Security in a Supabase-backed app usually comes down to two layers: authentication (who are you) and authorization (what are you allowed to touch) — enforced through Row Level Security (RLS) policies and role-based permission checks in the UI.",
    inPractice:
      "I hit a case where RLS policies on a `user_profiles` table caused infinite recursion because the policy referenced the same table it was protecting. For a small, trusted internal user base, I made the call to disable RLS on that specific table rather than over-engineer a workaround — a deliberate trade-off between strict security and practical delivery for an internal tool with a known, limited audience.",
  },
  networking: {
    concept:
      "Modern frontend apps talk to multiple external services — APIs, AI providers, auth servers — and browsers enforce Content Security Policy (CSP) and CORS rules to control what a page is allowed to connect to.",
    inPractice:
      "When I integrated an AI chatbot via OpenRouter into the ICP Dashboard, requests were silently blocked by CSP restrictions. I had to update the CSP configuration in two separate places — `vite.config.js` for local development and `vercel.json` for production — since dev and prod environments enforce headers differently.",
  },
  performance: {
    concept:
      "Web performance often comes down to choosing the right rendering strategy: static generation for content that rarely changes, server-side rendering for SEO-sensitive pages, and client-side rendering for highly interactive dashboards — plus deciding what to load immediately versus lazily.",
    inPractice:
      "My internal tools (ICP Dashboard, GTA CMP) are React + Vite single-page apps optimized for fast interactivity behind a login — no SEO concerns there. This portfolio, in contrast, uses Next.js App Router for server-side rendering since it's public-facing and benefits from fast first paint and SEO. Choosing the right tool per context matters more than always reaching for the same stack.",
  },
};
