import { Container } from "@/components/layout/container";
import {
  Terminal,
  GitBranch,
  Github,
  Table2,
  Boxes,
  Brain,
  FlaskConical,
  Beaker,
  Network,
  Target,
} from "lucide-react";

type Tool = {
  name: string;
  icon: React.ReactNode;
  note: string;
};

const dailyTools: Tool[] = [
  {
    name: "Python",
    icon: <Terminal className="h-6 w-6" />,
    note: "Core language for scripting, data analysis, and computational modeling",
  },
  {
    name: "VS Code",
    icon: <Boxes className="h-6 w-6" />,
    note: "Primary development environment",
  },
  {
    name: "Git",
    icon: <GitBranch className="h-6 w-6" />,
    note: "Version control for every codebase and analysis pipeline",
  },
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    note: "Hosting reproductions, open notebooks, and portfolio code",
  },
  {
    name: "Pandas",
    icon: <Table2 className="h-6 w-6" />,
    note: "Data wrangling for genomics and chemical biological datasets",
  },
  {
    name: "PyMOL",
    icon: <Beaker className="h-6 w-6" />,
    note: "3D molecular visualization and structural analysis",
  },
];

const learningTools: Tool[] = [
  {
    name: "PyTorch",
    icon: <Brain className="h-6 w-6" />,
    note: "Deep learning framework for building predictive models",
  },
  {
    name: "RDKit",
    icon: <FlaskConical className="h-6 w-6" />,
    note: "Cheminformatics toolkit for molecular structure handling",
  },
  {
    name: "Biopython",
    icon: <Network className="h-6 w-6" />,
    note: "Sequence alignment and structural bioinformatics in Python",
  },
  {
    name: "ChEMBL API",
    icon: <Target className="h-6 w-6" />,
    note: "Querying bioactivity and drug-target interaction data",
  },
  {
    name: "AutoDock Vina",
    icon: <Beaker className="h-6 w-6" />,
    note: "Molecular docking simulations and binding affinity estimation",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent text-primary">
        {tool.icon}
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-foreground">
          {tool.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{tool.note}</p>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-5xl">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Toolkit & Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            The technical stack and computational tools I use to bridge pharmaceutical sciences and machine learning.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Tools I Use Daily
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dailyTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Tools I Am Learning
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learningTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
