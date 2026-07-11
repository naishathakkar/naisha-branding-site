export type ExperienceCategory =
  | "Research"
  | "Internship"
  | "Leadership"
  | "Conference"
  | "Teaching"
  | "Volunteering";

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  category: ExperienceCategory;
  dateRange: string;
  description: string;
}

// Placeholder timeline, newest first. Swap in your real history whenever
// you're ready — add or remove entries freely, the page adapts automatically.
export const experience: ExperienceItem[] = [
  {
    id: "research-assistant",
    title: "Undergraduate Research Assistant",
    organization: "University Pharmacology Lab",
    category: "Research",
    dateRange: "Jan 2026 – Present",
    description:
      "Supporting a lab studying antibiotic resistance mechanisms, including literature review and data cleaning for a resistance-tracking dataset.",
  },
  {
    id: "symposium-poster",
    title: "Poster Presenter",
    organization: "Undergraduate Pharmacy Research Symposium",
    category: "Conference",
    dateRange: "Mar 2026",
    description:
      "Presented a machine learning model for flagging high-risk drug interactions to faculty and peers, and fielded questions on model limitations.",
  },
  {
    id: "vp-pre-pharm",
    title: "Vice President, Pre-Pharmacy Student Association",
    organization: "University Pre-Pharmacy Society",
    category: "Leadership",
    dateRange: "Sep 2025 – Present",
    description:
      "Organizing speaker events and mentorship pairings for underclassmen exploring pharmacy as a career path.",
  },
  {
    id: "pharmacy-intern",
    title: "Community Pharmacy Intern",
    organization: "Local Community Pharmacy",
    category: "Internship",
    dateRange: "Jun 2025 – Aug 2025",
    description:
      "Shadowed licensed pharmacists, assisted with inventory and patient intake, and sat in on medication therapy management consultations.",
  },
  {
    id: "orgo-tutor",
    title: "Peer Tutor, Organic Chemistry",
    organization: "University Tutoring Center",
    category: "Teaching",
    dateRange: "Sep 2024 – May 2025",
    description:
      "Ran weekly small-group tutoring sessions for first-year students, focused on reaction mechanisms and exam strategy.",
  },
  {
    id: "free-clinic",
    title: "Volunteer, Health Screenings",
    organization: "Community Free Clinic",
    category: "Volunteering",
    dateRange: "2024 – Present",
    description:
      "Assisting with blood pressure and glucose screenings at monthly free clinic events for uninsured community members.",
  },
];
