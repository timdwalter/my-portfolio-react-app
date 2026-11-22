import Seo from "@/components/ui/Seo";
import PageHeader from "@/components/PageHeader";
import Button, { Arrow } from "@/components/ui/Button";
import { Reveal, Section } from "@/components/ui/Section";
import { ArticleGrid } from "@/components/ui/Cards";
import { articles } from "@/content/data";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

export default function BlogPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.blog.seoTitle} description={t.blog.seoDescription} />
      <PageHeader eyebrow={t.blog.eyebrow} title={t.blog.title}>
        {t.blog.intro}
        {t.blog.langNote && <span className="mt-3 block font-mono text-sm text-faint">{t.blog.langNote}</span>}
      </PageHeader>

      <section className="pb-8">
        <div className="container">
          <ArticleGrid articles={articles} />
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="card flex flex-col items-start justify-between gap-6 border-dashed p-8 md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-xl font-semibold">{t.blog.moreTitle}</h2>
              <p className="text-muted">{t.blog.moreText}</p>
            </div>
            <Button href={site.socials.medium} variant="secondary" className="shrink-0">
              {t.blog.follow} <Arrow />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
