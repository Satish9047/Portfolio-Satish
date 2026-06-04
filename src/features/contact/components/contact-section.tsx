import { Section } from "@/components/layout/section";
import { ContactForm } from "@/features/contact/ContactForm";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Inquiries"
      title="Initiate Collaboration"
      description="Available for select freelance contracts, frontend architecture roles, and full-stack integration projects."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Form - Spans 1 to 7 */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Side: Meta Info / Live Tracking dot - Spans 8 to 12 */}
        <div className="lg:col-span-5 space-y-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-8 lg:pt-0">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Status</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-swiss-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-swiss-red"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--foreground)]">
                Available for contract bookings
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Direct Inquiries</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">
              <a href="mailto:satishprajapati930@gmail.com" className="hover:text-swiss-red transition-colors">
                satishprajapati930@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Call / Text</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">
              +977 9840252791
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Location Details</span>
            <p className="text-sm font-semibold uppercase tracking-tight text-[var(--foreground)]">
              Bhaktapur, Nepal (GMT +5:45)
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
