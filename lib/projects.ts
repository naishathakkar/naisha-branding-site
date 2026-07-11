export interface ProjectLink {
  label: string;
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  methodology: string;
  results: string;
  skills: string[];
  futureDirections: string;
  publications?: ProjectLink[];
  resources?: ProjectLink[];
}

// Placeholder projects. Swap the text for your real work whenever you're
// ready — add or remove entries freely, the page below adapts automatically.
export const projects: Project[] = [
  {
    slug: "drug-interaction-risk-ml",
    title: "Predicting Drug Interaction Risk with Machine Learning",
    summary:
      "A classification model that flags high-risk drug combinations from prescription data, built to catch what manual review sometimes misses.",
    overview:
      "This project explored whether a simple, interpretable machine learning model could flag potentially dangerous drug-drug interactions faster than manual chart review, using a public dataset of known interaction pairs and prescribing records.",
    problem:
      "Community pharmacists often check for interactions using static reference tables that don't account for a patient's full medication list at once, especially for patients on five or more prescriptions.",
    methodology:
      "I built a gradient-boosted classifier trained on a labeled dataset of known drug-drug interactions, using features like drug class, dosage, and co-prescription frequency, then validated it against a held-out test set and a rules-based baseline.",
    results:
      "The model reached 91% precision on the test set and correctly flagged several interaction patterns the static reference table missed, though it also produced more false positives than the baseline for rare drug combinations.",
    skills: ["Python", "scikit-learn", "Pandas", "Pharmacology", "Data Visualization"],
    futureDirections:
      "Next steps include testing the model against real, de-identified pharmacy records and exploring whether patient-level variables like age and renal function improve precision on edge cases.",
    publications: [
      { label: "Poster presentation, Undergraduate Pharmacy Research Symposium, 2026" },
    ],
  },
  {
    slug: "medication-adherence-study",
    title: "Community Pharmacy Medication Adherence Study",
    summary:
      "A survey-based study on why patients skip doses, and which pharmacy-level interventions actually seem to help.",
    overview:
      "A small-scale survey study conducted with a local community pharmacy, looking at self-reported reasons for medication non-adherence among patients managing chronic conditions.",
    problem:
      "Non-adherence is consistently linked to worse outcomes and higher long-term costs, but the reasons behind it vary by patient, and pharmacy-level interventions are rarely tested directly against each other.",
    methodology:
      "I designed and distributed a short anonymous survey to consenting patients picking up chronic-condition prescriptions, then analyzed responses for common barriers and cross-referenced them against which patients had received specific pharmacist counseling.",
    results:
      "Cost and forgetfulness were the two most commonly cited barriers, and patients who received brief verbal counseling at pickup self-reported higher adherence confidence, though the sample size was too small to draw strong conclusions.",
    skills: ["Survey Design", "Clinical Research", "Data Analysis", "Public Health"],
    futureDirections:
      "A larger, multi-site version of this study using actual refill-rate data, rather than self-reported adherence, would give a much clearer picture of which interventions are worth scaling.",
  },
  {
    slug: "antibiotic-stewardship-dashboard",
    title: "Antibiotic Stewardship Dashboard",
    summary:
      "An internal dashboard concept for tracking antibiotic prescribing patterns and flagging outliers for review.",
    overview:
      "A prototype dashboard designed to help hospital antibiotic stewardship teams spot unusual prescribing patterns without digging through raw pharmacy records manually.",
    problem:
      "Stewardship teams are often small and stretched thin, and the data they need to catch overprescribing trends is usually scattered across systems that don't talk to each other.",
    methodology:
      "Using a synthetic, non-patient dataset modeled on real prescribing patterns, I built a dashboard that visualizes prescribing volume by antibiotic class, department, and prescriber, with simple threshold-based flags for unusual spikes.",
    results:
      "The prototype successfully surfaced simulated outlier cases in testing, and stewardship staff who reviewed a demo said the department-level breakdown was more immediately useful than the class-level one.",
    skills: ["Data Visualization", "SQL", "Pharmacology", "UX Design"],
    futureDirections:
      "The next version would need to connect to a real, properly de-identified and IRB-approved data source, and add role-based access before it could be piloted anywhere real.",
  },
];
