export type ResourceCategory =
  | "Books"
  | "Research Papers"
  | "Study Resources"
  | "Learning Tools"
  | "Healthcare Websites"
  | "Scientific Databases"
  | "Apps"
  | "Podcasts"
  | "Videos";

export const resourceCategories: ResourceCategory[] = [
  "Books",
  "Research Papers",
  "Study Resources",
  "Learning Tools",
  "Healthcare Websites",
  "Scientific Databases",
  "Apps",
  "Podcasts",
  "Videos",
];

export interface Resource {
  title: string;
  author?: string;
  description: string;
  category: ResourceCategory;
  url?: string;
}

// Real, well-known starting points across each category the blueprint asked
// for. Swap in your own favorites any time — add or remove freely.
export const resources: Resource[] = [
  {
    title: "Bad Science",
    author: "Ben Goldacre",
    description:
      "A sharp, readable teardown of how bad statistics and bad incentives creep into medicine and the media that covers it.",
    category: "Books",
  },
  {
    title: "The Emperor of All Maladies: A Biography of Cancer",
    author: "Siddhartha Mukherjee",
    description:
      "A Pulitzer Prize-winning history of cancer and cancer treatment, and one of the best examples of making dense science genuinely readable.",
    category: "Books",
  },
  {
    title: "How to Read a Paper",
    author: "Trisha Greenhalgh",
    description:
      "The classic BMJ series (later a book) on critically appraising medical research. Essential before trusting any single study too much.",
    category: "Research Papers",
  },
  {
    title: "Osmosis",
    description:
      "Visual explainer videos and study tools for health science students, covering everything from physiology to pharmacology.",
    category: "Study Resources",
    url: "https://www.osmosis.org/",
  },
  {
    title: "Anki",
    description:
      "Free, open-source spaced-repetition flashcards. The single tool most pharmacy and medical students swear by for retention.",
    category: "Learning Tools",
    url: "https://apps.ankiweb.net/",
  },
  {
    title: "MedlinePlus",
    description:
      "The U.S. National Library of Medicine's free, plain-language health information site — a reliable first stop for any condition or drug.",
    category: "Healthcare Websites",
    url: "https://medlineplus.gov/",
  },
  {
    title: "PubMed",
    description:
      "The standard search engine for biomedical literature. If a study exists, it's indexed here first.",
    category: "Scientific Databases",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    title: "Cochrane Library",
    description:
      "Systematic reviews that synthesize entire bodies of research into a single, evidence-graded answer.",
    category: "Scientific Databases",
    url: "https://www.cochranelibrary.com/",
  },
  {
    title: "Epocrates",
    description:
      "A point-of-care drug reference and interaction checker used by pharmacists and clinicians every day.",
    category: "Apps",
    url: "https://www.epocrates.com/",
  },
  {
    title: "Pharmacy Podcast Network",
    description:
      "A long-running network of shows covering community pharmacy, drug development, and pharmacy career paths.",
    category: "Podcasts",
    url: "https://www.pharmacypodcast.com/",
  },
  {
    title: "Armando Hasudungan",
    description:
      "Hand-drawn illustrated walkthroughs of physiology and pathology that make mechanisms genuinely click.",
    category: "Videos",
    url: "https://www.youtube.com/@armandohasudungan",
  },
];
