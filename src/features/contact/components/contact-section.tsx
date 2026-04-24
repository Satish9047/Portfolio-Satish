import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/features/contact/ContactForm";
// import { contactLinks } from "../content";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Clear calls to action with minimal friction."
      description="This keeps primary contact routes prominent while staying simple enough for a single-page portfolio."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Let&apos;s build something useful.</h3>
              <p className="leading-7 text-muted">
                I am available for frontend engineering, full-stack product work, and performance-focused UI implementation.
              </p>
            </div>
            {/*<div className="flex flex-wrap gap-3">*/}
            {/*  {contactLinks.map((link) => (*/}
            {/*    <ButtonLink key={link.label} href={link.href} variant="secondary">*/}
            {/*      {link.label}*/}
            {/*    </ButtonLink>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="surface rounded-[2rem] p-6 sm:p-8">
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl font-bold">Send a message</h3>
            <p className="leading-7 text-muted">
              Use the form for project inquiries, collaborations, or freelance work.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
