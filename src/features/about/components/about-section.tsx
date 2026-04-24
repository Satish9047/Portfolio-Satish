import { Section } from "@/components/layout/section";
import { educationItems, experienceItems } from "../content";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Experience and education, presented without clutter."
      description="This section separates profile context from projects, making it easier to scan and easier to maintain as the portfolio grows."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="surface rounded-[1.75rem] p-6">
          <h3 className="text-lg font-bold">Education</h3>
          <dl className="mt-5 space-y-4">
            {educationItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4 last:border-none last:pb-0">
                <dt className="font-medium text-muted">{item.label}</dt>
                <dd className="text-right font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="surface rounded-[1.75rem] p-6">
          <h3 className="text-lg font-bold">Experience</h3>
          <div className="mt-5 space-y-5">
            {experienceItems.map((item) => (
              <div key={`${item.company}-${item.role}`} className="border-b border-[var(--border)] pb-5 last:border-none last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-base font-semibold">{item.role}</h4>
                  <p className="text-sm text-muted">{item.duration}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{item.company}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.details}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
