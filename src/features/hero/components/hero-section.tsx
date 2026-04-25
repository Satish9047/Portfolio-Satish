import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";
import { ButtonLink } from "@/components/ui/button";
import { DownloadButton } from "@/features/cv/DownloadButton";
import { getCvDownloadCount } from "@/lib/pocketbase";
import { heroContent, heroLinks } from "../content";

export async function HeroSection() {
  const downloadCount = await getCvDownloadCount().catch(() => 0);

  return (
    <section
      id="top"
      className="grid items-center gap-10 py-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.25fr_0.85fr]"
    >
      <div className="space-y-8">
        <div className="space-y-5">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Available for impactful product work
          </p> */}
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {heroContent.name}
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-8 text-muted">
              {heroContent.title}
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted">{heroContent.summary}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={heroLinks[0].href} target="_blank" rel="noreferrer">
            {heroLinks[0].label}
          </ButtonLink>
          <ButtonLink href={heroLinks[1].href} variant="secondary">
            {heroLinks[1].label}
          </ButtonLink>
          <DownloadButton initialDownloadCount={downloadCount} />
        </div>

        <dl className="grid gap-4 text-sm text-muted sm:grid-cols-3">
          <div className="surface rounded-3xl p-4">
            <dt className="font-semibold text-[var(--foreground)]">Location</dt>
            <dd className="mt-2">{heroContent.location}</dd>
          </div>
          <div className="surface rounded-3xl p-4">
            <dt className="font-semibold text-[var(--foreground)]">Email</dt>
            <dd className="mt-2 break-all">{heroContent.email}</dd>
          </div>
          <div className="surface rounded-3xl p-4">
            <dt className="font-semibold text-[var(--foreground)]">Phone</dt>
            <dd className="mt-2">{heroContent.phone}</dd>
          </div>
        </dl>
      </div>

      <div className="justify-self-center">
        <div className="surface-strong relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:color-mix(in_srgb,var(--accent)_20%,transparent)] to-transparent" />
          <Image
            src={profileImage}
            alt="Portrait of Satish Prajapati"
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 36vw, 420px"
            className="relative h-auto w-[280px] rounded-[1.5rem] object-cover sm:w-[340px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
