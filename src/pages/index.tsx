import Image from "next/image";
import { motion } from "framer-motion";
import Seo from "@/components/ui/Seo";
import HexBackground from "@/components/ui/HexBackground";
import Button, { Arrow } from "@/components/ui/Button";
import { Reveal, Section, SectionHeader } from "@/components/ui/Section";
import { ArticleGrid, ProjectCard, ServiceIcon } from "@/components/ui/Cards";
import ContactSection from "@/components/ContactSection";
import { articles, career, industries, projects } from "@/content/data";
import { mailto, site } from "@/content/site";
import { useLocale, useT } from "@/lib/i18n";
import { BuildingOffice2Icon, PaperAirplaneIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";

const industryIcons = { imaging: ViewfinderCircleIcon, campus: BuildingOffice2Icon, aviation: PaperAirplaneIcon };

const ease = [0.21, 0.47, 0.32, 0.98];

function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <HexBackground />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          {site.available && (
            <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
              {t.home.available}
            </p>
          )}
          <p className="mb-4 font-display text-lg font-medium text-muted">{site.displayName} —</p>
          <h1 className="text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.5rem]">
            {t.home.headline1}
            <br />
            <span className="text-gradient">{t.home.headline2}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-body md:text-xl">{t.home.intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={mailto(t.contact.subject)}>
              {t.home.ctaPrimary} <Arrow />
            </Button>
            <Button href="/projects" variant="secondary">
              {t.home.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:order-first lg:ml-0 lg:max-w-[360px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#c9ced4]">
            <Image
              src="/TDW-Profil.jpg"
              alt={site.fullName}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 340px"
              className="object-cover object-[50%_20%]"
            />
          </div>
          {/* floating cards */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-line bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-right-8">
            <p className="font-display text-3xl font-semibold text-heading">{site.yearsExperience}+</p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{t.about.yearsLabel}</p>
          </div>
          <div className="absolute -left-3 top-8 hidden rounded-xl border border-line bg-white/95 px-4 py-2.5 shadow-soft backdrop-blur sm:block">
            <p className="font-mono text-[11px] text-muted">Software · Cloud · AI · IoT</p>
          </div>
        </motion.div>
      </div>

      {/* career + stack strips */}
      <div className="container relative mt-20 md:mt-24">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{t.home.careerLabel}</span>
          {career.map((c) => (
            <span key={c.company} className="font-display text-lg font-semibold text-heading">
              {c.company}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Stack</span>
          {site.stack.map((s) => (
            <span key={s} className="font-display text-base font-medium text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const t = useT();
  const locale = useLocale();

  return (
    <>
      <Seo title={t.home.seoTitle} description={t.home.seoDescription} />
      <Hero />

      {/* Services – editorial numbered list */}
      <Section className="bg-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <div className="border-t border-line-strong">
            {t.home.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-b border-line-strong py-8 sm:grid-cols-[3rem_1fr_auto]">
                  <span className="pt-1 font-mono text-sm text-brand-400">0{i + 1}</span>
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">{s.title}</h3>
                    <p className="max-w-xl leading-relaxed text-muted">{s.text}</p>
                  </div>
                  <span className="hidden h-12 w-12 place-items-center rounded-full border border-line-strong text-heading transition group-hover:border-heading group-hover:bg-heading group-hover:text-white sm:grid">
                    <ServiceIcon icon={s.icon} className="h-5 w-5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="industries">
        <SectionHeader eyebrow={t.home.industriesEyebrow} title={t.home.industriesTitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = industryIcons[ind.icon];
            return (
              <Reveal key={ind.id} delay={i * 0.06}>
                <div className="card h-full p-8">
                  <span className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-400">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mb-2 font-mono text-xs uppercase tracking-wider text-faint">{ind.meta[locale]}</p>
                  <h3 className="mb-3 text-2xl font-semibold">{ind.title[locale]}</h3>
                  <p className="leading-relaxed text-muted">{ind.text[locale]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-subtle">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={t.home.workEyebrow} title={t.home.workTitle} className="mb-0" />
          <Button href="/projects" variant="ghost">
            {t.home.workAll} <Arrow />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t.home.principlesEyebrow} title={t.home.principlesTitle} />
        <div className="grid gap-10 md:grid-cols-3">
          {t.home.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="border-t-2 border-heading pt-6">
                <span className="font-mono text-sm text-brand-400">0{i + 1}</span>
                <h3 className="mb-3 mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Button href="/about" variant="secondary">
            {t.home.principlesLink} <Arrow />
          </Button>
        </Reveal>
      </Section>

      <Section className="bg-subtle">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={t.home.writingEyebrow} title={t.home.writingTitle} className="mb-0" />
          <Button href="/blog" variant="ghost">
            {t.home.writingAll} <Arrow />
          </Button>
        </div>
        <ArticleGrid articles={articles} />
      </Section>

      <ContactSection />
    </>
  );
}
