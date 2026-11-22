import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { mailto, site } from "@/content/site";
import { useT } from "@/lib/i18n";
import { Arrow } from "./ui/Button";
import { Reveal, Section } from "./ui/Section";
import { HexMark } from "./ui/Logo";

/** Dark contrast block that closes every page. */
export default function ContactSection() {
  const t = useT();
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-16 md:px-16 md:py-20">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="absolute -right-16 -top-16 h-80 w-80 text-night-line md:-right-8"
            fill="none"
          >
            <path d="M16 2.5 27.7 9.25v13.5L16 29.5 4.3 22.75V9.25L16 2.5Z" stroke="currentColor" strokeWidth="0.4" />
            <path d="M16 8 22.9 12v8L16 24l-6.9-4v-8L16 8Z" stroke="currentColor" strokeWidth="0.4" />
          </svg>

          <div className="relative grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <HexMark className="mb-8 h-10 w-10 [&_path:first-child]:stroke-white/40" />
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-600">
                {t.contact.eyebrow}
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold !text-white md:text-5xl">{t.contact.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">{t.contact.text}</p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={mailto(t.contact.subject)}
                className="group inline-flex items-center justify-between gap-2 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-heading transition hover:bg-brand-100"
              >
                <span className="inline-flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4" /> {t.contact.email}
                </span>
                <Arrow />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-2 rounded-xl border border-white/15 px-5 py-4 text-sm font-semibold text-white transition hover:border-white/40"
              >
                {t.contact.linkedin} <Arrow />
              </a>
              <p className="mt-2 font-mono text-sm text-white/45">{site.email}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
