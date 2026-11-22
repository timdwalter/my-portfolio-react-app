import Image from "next/image";
import Seo from "@/components/ui/Seo";
import { DocSection, PageIntro, RuledRows, TextLink, nb } from "@/components/ui/Doc";
import ContactSection from "@/components/ContactSection";
import { career, skillGroups, techStack } from "@/content/data";
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

      <PageIntro
        title={t.about.title}
        aside={
          <div className="grid grid-cols-[7rem_1fr] gap-x-lg sm:grid-cols-[9rem_1fr] lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-rule">
              <Image
                src="/TDW-Profil.jpg"
                alt={site.fullName}
                fill
                priority
                // object-cover scales the landscape photo to ~1.35× the box width
                sizes="(min-width: 1024px) 520px, 250px"
                quality={90}
                className="object-cover object-[50%_18%]"
              />
            </div>
            <p className="font-medium leading-snug text-ink lg:mt-md">{site.displayName}</p>
          </div>
        }
      >
        <p className="text-ink">{t.about.intro}</p>
        <p className="text-muted">{nb(t.about.mission)}</p>
      </PageIntro>

      <DocSection id="story" title={t.about.storyTitle}>
        <div className="max-w-[52ch] space-y-md text-lg leading-relaxed text-ink">
          {t.about.story.map((p) => (
            <p key={p.slice(0, 24)}>{nb(p)}</p>
          ))}
        </div>
      </DocSection>

      <DocSection id="career" title={t.about.careerTitle}>
        <RuledRows
          rows={career.map((c) => ({
            key: c.company,
            title: c.company,
            meta: c.current ? (
              <span className="flex items-baseline gap-sm">
                <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 bg-accent" />
                {[c.role?.[locale], t.about.today].filter(Boolean).join(", ")}
              </span>
            ) : (
              c.role?.[locale]
            ),
          }))}
        />
      </DocSection>

      <DocSection id="skills" title={t.about.skillsEyebrow} intro={t.about.skillsTitle}>
        <RuledRows
          rows={skillGroups.map((g) => ({
            key: g.title.en,
            title: g.title[locale],
            body: <p>{g.items.map((i) => i[locale]).join(", ")}</p>,
          }))}
        />
      </DocSection>

      <DocSection id="stack" title={t.about.stackEyebrow} intro={t.about.stackTitle}>
        <RuledRows
          rows={techStack.map((g) => ({
            key: g.title.en,
            title: g.title[locale],
            body: <p className="font-mono text-[0.8125rem] leading-6">{g.items.join(", ")}</p>,
          }))}
        />
      </DocSection>

      <DocSection id="certifications" title={t.about.certsTitle}>
        <RuledRows rows={t.about.certs.map((c) => ({ key: c, title: c }))} />
      </DocSection>

      <DocSection id="profiles" title={t.about.connectTitle}>
        <ul className="flex flex-wrap gap-x-xl gap-y-md border-t border-rule pt-lg">
          {profiles.map((p) => (
            <li key={p.label}>
              <TextLink href={p.href} className="text-lg">
                {p.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </DocSection>

      <ContactSection />
    </>
  );
}
