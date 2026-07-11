export type ArticleCategory =
  | "Disease"
  | "Drug"
  | "Pharmacology"
  | "Biotechnology"
  | "Nutrition"
  | "Public Health"
  | "AI"
  | "Clinical Research"
  | "Drug Discovery"
  | "Medical Devices"
  | "Neuroscience"
  | "Genetics";

export const categories: ArticleCategory[] = [
  "Disease",
  "Drug",
  "Pharmacology",
  "Biotechnology",
  "Nutrition",
  "Public Health",
  "AI",
  "Clinical Research",
  "Drug Discovery",
  "Medical Devices",
  "Neuroscience",
  "Genetics",
];

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  readingTime: string;
}

// Placeholder articles so the library isn't empty. Replace with real
// writing (or wire up a CMS) whenever you're ready — the page below
// doesn't need to change either way.
export const articles: Article[] = [
  {
    slug: "why-antibiotics-stop-working",
    title: "Why Some Antibiotics Stop Working: A Primer on Resistance",
    summary:
      "Antibiotic resistance is often described as a ticking clock. Here's the biology behind it, and what's actually being done about it.",
    category: "Pharmacology",
    tags: ["Antibiotics", "Microbiology"],
    publishedAt: "2026-07-06",
    readingTime: "7 min read",
  },
  {
    slug: "ai-predicting-adverse-drug-reactions",
    title: "Can AI Predict Adverse Drug Reactions Before They Happen?",
    summary:
      "Machine learning models are getting better at flagging risky drug combinations before a prescription is ever filled.",
    category: "AI",
    tags: ["Machine Learning", "Drug Safety"],
    publishedAt: "2026-06-29",
    readingTime: "6 min read",
  },
  {
    slug: "mrna-platform-beyond-covid",
    title: "Inside the mRNA Platform: From COVID Vaccines to Cancer Therapy",
    summary:
      "The same platform that produced a vaccine in record time is now being tested against tumors. Here's how it works.",
    category: "Biotechnology",
    tags: ["mRNA", "Vaccines", "Oncology"],
    publishedAt: "2026-06-18",
    readingTime: "9 min read",
  },
  {
    slug: "what-clinical-trial-phases-mean",
    title: "What Clinical Trial Phases Actually Mean",
    summary:
      "Phase I, II, III, IV: a plain-language breakdown of what happens at each stage before a drug reaches a pharmacy shelf.",
    category: "Clinical Research",
    tags: ["Clinical Trials", "Drug Development"],
    publishedAt: "2026-06-05",
    readingTime: "5 min read",
  },
  {
    slug: "gut-brain-axis-explained",
    title: "The Gut-Brain Axis, Explained for Non-Scientists",
    summary:
      "Your gut bacteria may influence mood, memory, and stress more than you think. Here's what the evidence actually shows.",
    category: "Neuroscience",
    tags: ["Microbiome", "Mental Health"],
    publishedAt: "2026-05-22",
    readingTime: "6 min read",
  },
  {
    slug: "crispr-in-2026",
    title: "CRISPR in 2026: Where Gene Editing Stands Today",
    summary:
      "A decade after the Nobel Prize, gene editing has moved from headlines to approved therapies. Here's the state of the field.",
    category: "Genetics",
    tags: ["Gene Editing", "Biotechnology"],
    publishedAt: "2026-05-10",
    readingTime: "8 min read",
  },
];
