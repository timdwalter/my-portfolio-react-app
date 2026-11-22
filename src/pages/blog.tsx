import Seo from "@/components/ui/Seo";
import { ArticleRows, MainColumn, PageIntro, TextLink } from "@/components/ui/Doc";
import ContactSection from "@/components/ContactSection";
import { articles } from "@/content/data";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

export default function BlogPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.blog.seoTitle} description={t.blog.seoDescription} />
      <PageIntro
        title={t.blog.title}
        aside={t.blog.langNote && <p className="text-[0.9375rem] leading-relaxed text-muted">{t.blog.langNote}</p>}
      >
        <p className="text-ink">{t.blog.intro}</p>
      </PageIntro>
      <MainColumn>
        <ArticleRows articles={articles} headingLevel={2} />
        <div className="grid gap-y-xs border-b border-rule py-lg sm:grid-cols-8 sm:gap-x-lg">
          <div className="sm:col-span-2" aria-hidden="true" />
          <div className="sm:col-span-6">
            <h2 className="font-display text-[1.375rem] leading-snug">{t.blog.moreTitle}</h2>
            <p className="mt-xs text-[0.9375rem] leading-relaxed text-ink">{t.blog.moreText}</p>
            <TextLink href={site.socials.medium} className="mt-sm inline-block text-[0.9375rem]">
              {t.blog.follow}
            </TextLink>
          </div>
        </div>
      </MainColumn>
      <ContactSection />
    </>
  );
}
