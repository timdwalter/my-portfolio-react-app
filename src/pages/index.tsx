import Image from "next/image";
import Seo from "@/components/ui/Seo";
import { ArticleRows, DocSection, ProjectRows, TextLink, nb } from "@/components/ui/Doc";
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

      <DocSection id="services" title={t.home.servicesEyebrow} intro={nb(t.home.servicesTitle)}>
        <div className="grid gap-x-lg gap-y-xl sm:grid-cols-2">
          {/* Tech leadership is Tim's primary role: first, across both columns */}
          {[...t.home.services]
            .sort((a, b) => Number(b.icon === "people") - Number(a.icon === "people"))
            .map((s) => (
              <div key={s.title} className={`border-t border-rule pt-md ${s.icon === "people" ? "sm:col-span-2" : ""}`}>
                <h3 className="text-[1.375rem] leading-snug">{s.title}</h3>
                <p className="mt-sm max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink">{nb(s.text)}</p>
              </div>
            ))}
        </div>
      </DocSection>

      <DocSection id="industries" title={t.home.industriesTitle} intro={t.home.industriesIntro}>
        <ul className="border-t border-rule">
          {industries.map((ind) => (
            <li key={ind.id} className="border-b border-rule">
              {ind.text ? (
                <div className="grid gap-y-sm py-lg sm:grid-cols-8 sm:gap-x-lg">
                  <div className="sm:col-span-3">
                    <h3 className="text-[1.375rem] leading-snug">{ind.title[locale]}</h3>
                    {ind.meta && <p className="meta mt-xs">{ind.meta[locale]}</p>}
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-ink sm:col-span-5">{nb(ind.text[locale])}</p>
                </div>
              ) : (
                /* no description yet: one compact line, meta on the title's baseline */
                <div className="grid gap-y-xs py-md sm:grid-cols-8 sm:items-baseline sm:gap-x-lg">
                  <h3 className="text-[1.375rem] leading-snug sm:col-span-3">{ind.title[locale]}</h3>
                  {ind.meta && <p className="meta sm:col-span-5">{ind.meta[locale]}</p>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        id="projects"
        title={t.home.workTitle}
        intro={t.home.workEyebrow}
        aside={<TextLink href="/projects">{t.home.workAll}</TextLink>}
      >
        <ProjectRows projects={projects} />
      </DocSection>

      <DocSection
        id="principles"
        title={t.home.principlesEyebrow}
        intro={t.home.principlesTitle}
        aside={<TextLink href="/about">{t.home.principlesLink}</TextLink>}
      >
        <div className="grid gap-x-lg gap-y-xl sm:grid-cols-3">
          {t.home.principles.map((p) => (
            <div key={p.title} className="border-t border-ink pt-md">
              <h3 className="text-[1.375rem] leading-snug">{p.title}</h3>
              <p className="mt-sm text-[0.9375rem] leading-relaxed text-ink">{nb(p.text)}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection
        id="writing"
        title={t.home.writingEyebrow}
        intro={t.home.writingTitle}
        aside={
          <div className="space-y-sm">
            {t.blog.langNote && <p className="text-[0.875rem] text-muted">{t.blog.langNote}</p>}
            <TextLink href="/blog">{t.home.writingAll}</TextLink>
          </div>
        }
      >
        <ArticleRows articles={articles} />
      </DocSection>

      <ContactSection />
    </>
  );
}
