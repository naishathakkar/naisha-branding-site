export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "pullquote"; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "list"; items: string[] };

export interface Reference {
  text: string;
  doi?: string;
  url?: string;
}

export interface ArticleContent {
  content: ContentBlock[];
  references: Reference[];
}

// Full body content, keyed by article slug. Only one demo entry exists so
// far (the rest of the library falls back to a "coming soon" notice on the
// article page) — add an entry here whenever you finish writing a piece.
export const articleContent: Record<string, ArticleContent> = {
  "why-antibiotics-stop-working": {
    content: [
      {
        type: "paragraph",
        text: "Every year, more infections stop responding to the antibiotics that used to clear them up in days. It's tempting to treat this as a single crisis with a single cause, but antibiotic resistance is really the sum of millions of small evolutionary events happening inside bacteria all over the world, all at once.",
      },
      {
        type: "heading",
        level: 2,
        id: "how-resistance-develops",
        text: "How resistance actually develops",
      },
      {
        type: "paragraph",
        text: "Bacteria reproduce fast, sometimes every twenty minutes, and every division is a chance for a random mutation. Most mutations do nothing useful. But every so often, one changes a protein just enough that an antibiotic can no longer bind to it, or activates a pump that flushes the drug back out of the cell before it can do damage.",
      },
      {
        type: "callout",
        title: "Quick definition",
        text: "Minimum inhibitory concentration (MIC): the lowest concentration of an antibiotic that visibly stops a bacterial strain from growing. Researchers track rising MICs over time as one of the clearest signs that resistance is spreading.",
      },
      {
        type: "paragraph",
        text: "Once that mutation exists, exposure to the antibiotic does the rest. Susceptible bacteria die off; the resistant ones survive and multiply, and the antibiotic has effectively selected for the population it was meant to eliminate.",
      },
      {
        type: "pullquote",
        text: "Resistance isn't something that happens to an antibiotic. It's something bacteria do in response to one.",
      },
      {
        type: "heading",
        level: 2,
        id: "why-accelerating-now",
        text: "Why this is accelerating now",
      },
      {
        type: "paragraph",
        text: "Three things have sped this up: heavy antibiotic use in agriculture, inconsistent prescribing in humans, and a genuinely thin pipeline of new antibiotic classes reaching the market. Bacteria have also gotten better at sharing resistance genes directly with each other, sometimes across entirely different species, through small loops of DNA called plasmids.",
      },
      {
        type: "list",
        items: [
          "Agricultural use accounts for a majority of antibiotics sold worldwide.",
          "Few genuinely new antibiotic classes have reached the market in the last two decades.",
          "Resistance genes can transfer between bacterial species via plasmids.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "whats-being-done",
        text: "What's actually being done about it",
      },
      {
        type: "paragraph",
        text: "Stewardship programs in hospitals now track and limit unnecessary prescribing. Rapid diagnostic tests are shortening the gap between \"this patient has an infection\" and \"this is exactly the drug it will respond to,\" which matters because guessing wrong is part of what drives resistance in the first place. A small but growing number of biotech companies are also exploring alternatives to antibiotics altogether, including engineered viruses called bacteriophages that target specific bacterial strains.",
      },
      {
        type: "paragraph",
        text: "None of this is a single fix. But it's a more encouraging picture than the headlines usually suggest.",
      },
    ],
    references: [
      {
        text: "World Health Organization. Antimicrobial Resistance: Global Report on Surveillance. 2024.",
      },
      {
        text: "Centers for Disease Control and Prevention. Antibiotic Resistance Threats in the United States. 2023.",
      },
      {
        text: "Munita, J.M. & Arias, C.A. Mechanisms of Antibiotic Resistance. Microbiology Spectrum.",
        doi: "10.1000/example-doi-1",
      },
      {
        text: "Reygaert, W.C. An overview of the antimicrobial resistance mechanisms of bacteria. AIMS Microbiology.",
        doi: "10.1000/example-doi-2",
      },
    ],
  },
};
