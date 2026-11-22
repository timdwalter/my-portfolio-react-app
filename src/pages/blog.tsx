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
      <PageIntro title={t.blog.title}>
        <p className="text-ink">{t.blog.intro}</p>
        {t.blog.langNote && <p className="text-base text-muted">{t.blog.langNote}</p>}
      </PageIntro>
      <MainColumn>
        <ArticleRows articles={articles} headingLevel={2} />
        <div className="grid gap-y-sm border-b border-rule py-lg sm:grid-cols-8 sm:gap-x-lg">
          <h2 className="font-display text-[1.375rem] leading-snug sm:col-span-3">{t.blog.moreTitle}</h2>
          <div className="sm:col-span-5">
            <p className="text-[0.9375rem] leading-relaxed text-ink">{t.blog.moreText}</p>
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
