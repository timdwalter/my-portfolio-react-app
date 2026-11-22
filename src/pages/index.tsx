import Image from "next/image";
import Seo from "@/components/ui/Seo";
import Button, { Arrow } from "@/components/ui/Button";
import { Reveal, Section, SectionHeader } from "@/components/ui/Section";
import { ArticleGrid, ProjectCard, ServiceIcon } from "@/components/ui/Cards";
import ContactSection from "@/components/ContactSection";
import { articles, career, industries, projects } from "@/content/data";
import { mailto, site } from "@/content/site";
import { useLocale, useT } from "@/lib/i18n";

function Hero() {
  const t = useT();
  const earlier = career.slice(1);
  const facts = [
    { label: t.hero.role, value: t.hero.roleValue },
    { label: t.hero.experience, value: t.hero.experienceValue },
    { label: t.hero.previously, value: earlier.map((c) => c.company).join(", ") },
  ];

  return (
    <section aria-labelledby="hero-title" className="pb-xl pt-2xl lg:pb-2xl">
      <div className="container">
        <div className="grid-12 gap-y-xl">
          {/* Statement – first on mobile; columns 5–12 on desktop (column 4 stays empty as air beside the margin column) */}
          <div className="stagger col-main lg:row-start-1">
            <h1
              id="hero-title"
              className="text-[2.625rem] leading-[1.06] sm:text-[3.25rem] lg:text-[4.25rem] lg:leading-[1.04]"
            >
              {t.hero.headline}
            </h1>
            <p className="mt-lg max-w-[52ch] text-lg leading-relaxed text-ink lg:text-xl lg:leading-relaxed">
              {t.hero.intro}
            </p>
            <div className="mt-xl flex flex-wrap items-center gap-x-lg gap-y-md">
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="action">
                {t.hero.linkedin}
              </a>
              <a href={mailto(t.contact.subject)} className="link text-[0.9375rem]">
                {t.hero.email}
              </a>
            </div>
          </div>

          {/* Margin column – portrait and facts */}
          <aside
            aria-label={t.hero.factsLabel}
            className="stagger stagger-late col-meta grid grid-cols-[7rem_1fr] gap-x-lg border-t border-rule pt-lg sm:grid-cols-[9rem_1fr] lg:row-start-1 lg:block lg:border-0 lg:pt-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-rule">
              <Image
                src="/TDW-Profil.jpg"
                alt={site.fullName}
                fill
                priority
                // object-cover scales the landscape photo to ~1.35× the box width, so request that width
                sizes="(min-width: 1024px) 520px, 250px"
                quality={90}
                className="object-cover object-[50%_18%]"
              />
            </div>
            <div className="lg:mt-lg">
              <p className="font-medium leading-snug text-ink">{site.displayName}</p>
              <dl className="mt-md border-t border-rule">
                {facts.map((f) => (
                  <div key={f.label} className="border-b border-rule py-sm">
                    <dt className="meta">{f.label}</dt>
                    <dd className="text-[0.9375rem] leading-snug text-ink">{f.value}</dd>
                  </div>
                ))}
                {site.available && (
                  <div className="py-sm">
                    <dt className="meta">{t.hero.status}</dt>
                    <dd className="flex items-baseline gap-sm text-[0.9375rem] leading-snug text-ink">
                      <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 translate-y-[-1px] bg-accent" />
                      {t.hero.statusValue}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>

        {/* Stack – plain metadata row closing the hero */}
        <div className="grid-12 mt-xl gap-y-xs border-t border-rule pt-md lg:mt-lg">
          <p className="meta col-meta">{t.hero.stack}</p>
          <p className="col-main font-mono text-[0.8125rem] leading-6 text-ink">{site.stack.join(", ")}</p>
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

      {/* Industries – heading in the margin column, industries as ruled rows */}
      <section id="industries" aria-labelledby="industries-title" className="scroll-mt-xl py-2xl">
        <div className="container grid-12 gap-y-lg">
          <div className="col-meta lg:sticky lg:top-2xl lg:self-start">
            <h2 id="industries-title" className="text-[2rem] leading-tight">
              {t.home.industriesTitle}
            </h2>
            <p className="mt-sm text-muted">{t.home.industriesIntro}</p>
          </div>
          <ul className="col-main border-t border-rule">
            {industries.map((ind) => (
              <li key={ind.id} className="grid gap-y-sm border-b border-rule py-lg sm:grid-cols-8 sm:gap-x-lg">
                <div className="sm:col-span-3">
                  <h3 className="text-[1.375rem] leading-snug">{ind.title[locale]}</h3>
                  {ind.meta && <p className="meta mt-xs">{ind.meta[locale]}</p>}
                </div>
                {ind.text && (
                  <p className="text-[0.9375rem] leading-relaxed text-ink sm:col-span-5">{ind.text[locale]}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

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
