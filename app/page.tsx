import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const titles = [
  "Pharmacy Student",
  "Healthcare Researcher",
  "Science Communicator",
];

export default function Home() {
  return (
    <main>
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Text column */}
            <div className="order-last space-y-10 lg:order-first">
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium tracking-wide text-secondary">
                  {titles.map((title, i) => (
                    <span key={title} className="flex items-center gap-3">
                      {title}
                      {i < titles.length - 1 && (
                        <span
                          className="h-1 w-1 rounded-full bg-border"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground lg:text-7xl">
                  Naisha Thakkar
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  I’m a pharmacy student passionate about making healthcare
                  knowledge more accessible. Through evidence-based articles,
                  research, and science communication, I explore the
                  intersection of pharmacy, biotechnology, artificial
                  intelligence, and public health—turning complex ideas into
                  insights that inform, inspire, and empower.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button href="/research" size="lg" className="w-full sm:w-auto">
                  Read Latest Article
                </Button>
                <Button
                  href="/research"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Research Library
                </Button>
                <Button
                  href="/about"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  About Me
                </Button>
              </div>
            </div>

            {/* Portrait column */}
            <div className="order-first lg:order-last">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <div
                  className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/40"
                  aria-hidden="true"
                />
                <div className="flex h-full w-full items-center justify-center rounded-3xl border border-border bg-card p-8 text-center">
                <img src="/potrait.jpg" alt="Naisha Thakkar" className="h-full w-full object-cover object-center"/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
