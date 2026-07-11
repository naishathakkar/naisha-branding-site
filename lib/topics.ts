export type ExplainerBlock =
  | { type: "paragraph"; text: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | {
      type: "comparison";
      columns: string[];
      rows: { label: string; values: string[] }[];
    }
  | { type: "timeline"; items: { label: string; text: string }[] }
  | { type: "callout"; title?: string; text: string };

export interface Topic {
  slug: string;
  title: string;
  summary: string;
  readingTime: string;
  blocks: ExplainerBlock[];
}

// Placeholder topics — same idea as the Research Library: replace the
// content whenever you're ready, the layout below doesn't need to change.
export const topics: Topic[] = [
  {
    slug: "brand-vs-generic-drugs",
    title: "Brand-Name vs. Generic Drugs: What's Actually Different?",
    summary:
      "They're required to work the same way in your body. So why does one cost so much more? Here's what's actually different, and what isn't.",
    readingTime: "4 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Walk down any pharmacy aisle and you'll see the same medication sold two ways: a brand-name version with a recognizable box, and a generic version that costs a fraction as much. It's natural to wonder if you're getting a lesser product. Here's what the FDA actually requires, side by side.",
      },
      {
        type: "stats",
        items: [
          { value: "80-85%", label: "Average cost savings with generics" },
          { value: "100%", label: "Same active ingredient, by law" },
          { value: "~$0", label: "Marketing costs generics don't carry" },
        ],
      },
      {
        type: "comparison",
        columns: ["Brand-Name", "Generic"],
        rows: [
          {
            label: "Active ingredient",
            values: ["Original formula", "Identical, by law"],
          },
          {
            label: "Inactive ingredients",
            values: ["Company's own formula", "May differ slightly"],
          },
          {
            label: "FDA approval pathway",
            values: [
              "New Drug Application (NDA)",
              "Abbreviated New Drug Application (ANDA)",
            ],
          },
          {
            label: "Appearance",
            values: ["Patented shape / color", "Must look different, by law"],
          },
          {
            label: "Average cost",
            values: ["Higher", "80-85% lower"],
          },
        ],
      },
      {
        type: "callout",
        title: "Quick definition",
        text: "Bioequivalence: the FDA standard requiring a generic drug to deliver the same amount of active ingredient into the bloodstream, at the same rate, as the brand-name version. It's the legal bar every generic has to clear before it can be sold.",
      },
      {
        type: "paragraph",
        text: "The differences that exist (inactive ingredients, appearance, price) come from patent law and manufacturing economics, not a lower standard of medicine. Once a brand-name drug's patent expires, any manufacturer can apply to sell a bioequivalent version without repeating the original safety and efficacy trials that already proved the drug works.",
      },
    ],
  },
  {
    slug: "how-vaccines-are-made",
    title: "How a Vaccine Gets Made: From Lab to Injection",
    summary:
      "A single vaccine can take a decade to reach a pharmacy shelf. Here's every stage it passes through, and why each one exists.",
    readingTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "It's easy to see a vaccine appear in the news and assume it came together overnight. In reality, almost every vaccine passes through the same sequence of stages, each one designed to catch a different kind of problem before it ever reaches a patient.",
      },
      {
        type: "timeline",
        items: [
          {
            label: "Discovery & design",
            text: "Researchers identify a viral or bacterial target and design a candidate vaccine to trigger an immune response against it.",
          },
          {
            label: "Preclinical testing",
            text: "The candidate is tested in cell cultures and animal models to check basic safety and whether it triggers the intended immune response at all.",
          },
          {
            label: "Phase I trials",
            text: "A small group of healthy volunteers (tens of people) receives the vaccine to check for safety and rough dosing.",
          },
          {
            label: "Phase II trials",
            text: "A larger group (hundreds of people) helps narrow down the right dose and confirms the immune response is consistent.",
          },
          {
            label: "Phase III trials",
            text: "Thousands of participants across multiple sites test whether the vaccine actually prevents disease in the real world, and surface rarer side effects.",
          },
          {
            label: "Regulatory review",
            text: "Agencies like the FDA independently review all trial data before granting approval or authorization.",
          },
          {
            label: "Manufacturing & distribution",
            text: "Approved vaccines are produced at scale under strict quality controls, then distributed through cold chains built to keep them effective.",
          },
          {
            label: "Post-market monitoring",
            text: "Safety monitoring continues indefinitely after approval, tracking rare side effects that only show up across millions of doses.",
          },
        ],
      },
      {
        type: "callout",
        title: "Why mRNA vaccines moved faster",
        text: "Traditional vaccines can take 10-15 years to reach approval. mRNA platforms compress that timeline because the manufacturing process is largely identical regardless of the target, only the genetic sequence changes, so companies could begin scaling production before Phase III trials even finished.",
      },
      {
        type: "paragraph",
        text: "None of the stages above were skipped for COVID-19 vaccines. What changed was the amount of parallel investment, and years of prior mRNA research that was already sitting on the shelf.",
      },
    ],
  },
];
