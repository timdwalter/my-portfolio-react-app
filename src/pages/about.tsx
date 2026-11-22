import Image from "next/image";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Seo from "@/components/ui/Seo";
import HexBackground from "@/components/ui/HexBackground";
import { Arrow } from "@/components/ui/Button";
import { Reveal, Section, SectionHeader } from "@/components/ui/Section";
import ContactSection from "@/components/ContactSection";
import { career, skillGroups } from "@/content/data";
import { site } from "@/content/site";
import { useLocale, useT } from "@/lib/i18n";

export default function AboutPage() {
  const t = useT();
  const locale = useLocale();

  const profiles = [
    { label: "LinkedIn", href: site.socials.linkedin },
    ...(site.showGithub ? [{ label: "GitHub", href: site.socials.github }] : []),
    { label: "XING", href: site.socials.xing },
    { label: "Medium", href: site.socials.medium },
  ];

  return (
    <>
      <Seo title={t.about.seoTitle} description={t.about.seoDescription} />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
        <HexBackground />
        <div className="container relative grid items-center gap-12 md:grid-cols-[1fr_1.3fr] lg:gap-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto aspect-[4/5] max-w-[280px] overflow-hidden rounded-[1.75rem] bg-[#c9ced4]">
              <Image
                src="/TDW-Profil.jpg"
                alt={site.fullName}
                fill
                priority
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow mb-5">{t.about.eyebrow}</p>
            <h1 className="text-4xl font-semibold md:text-6xl">{t.about.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-body md:text-xl">{t.about.intro}</p>
            <p className="mt-4 border-l-2 border-brand-400 pl-4 text-lg leading-relaxed text-muted">
              {t.about.mission}
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">{t.about.storyTitle}</h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {t.about.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-subtle">
        <Reveal>
          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">{t.about.careerTitle}</h2>
        </Reveal>
        <ol className="border-t border-line-strong">
          {career.map((c, i) => (
            <Reveal key={c.company} delay={i * 0.06}>
              <li className="flex flex-col gap-1 border-b border-line-strong py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-brand-400">0{i + 1}</span>
                  <span className="font-display text-xl font-semibold text-heading">{c.company}</span>
                  {c.current && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                      {t.about.today}
                    </span>
                  )}
                </div>
                {c.role && <span className="pl-9 text-muted sm:pl-0">{c.role[locale]}</span>}
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="skills">
        <SectionHeader eyebrow={t.about.skillsEyebrow} title={t.about.skillsTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title.en} delay={(i % 4) * 0.05}>
              <div className="card h-full p-6">
                <h3 className="mb-4 flex items-center gap-3 text-base font-semibold">
                  <span className="font-mono text-xs text-brand-400">0{i + 1}</span>
                  {group.title[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-subtle px-2.5 py-1 text-sm text-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pb-0">
        <Reveal>
          <h2 className="mb-8 text-2xl font-semibold">{t.about.certsTitle}</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.certs.map((cert) => (
            <Reveal key={cert}>
              <div className="card flex items-center gap-4 px-6 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-400">
                  <CheckBadgeIcon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-heading">{cert}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pb-0">
        <Reveal>
          <h2 className="mb-8 text-2xl font-semibold">{t.about.connectTitle}</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex items-center justify-between px-6 py-5"
            >
              <span className="font-semibold text-heading">{p.label}</span>
              <Arrow className="text-brand-400" />
            </a>
          ))}
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
