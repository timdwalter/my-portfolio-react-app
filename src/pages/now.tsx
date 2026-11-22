import Seo from "@/components/ui/Seo";
import { MainColumn, PageIntro, RuledRows, TextLink, nb } from "@/components/ui/Doc";
import ContactSection from "@/components/ContactSection";
import { articles, plannedArticles } from "@/content/data";
import { site } from "@/content/site";
import { useLocale, useT } from "@/lib/i18n";

/** A "now" page: what Tim is working on, led by his upcoming Medium articles. Keep site.nowUpdated current. */
export default function NowPage() {
  const t = useT();
  const locale = useLocale();
  const updated = new Date(`${site.nowUpdated}-01`).toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
    month: "long",
    year: "numeric",
  });
  const latest = articles[0];

  const writing = {
    key: "writing",
    title: t.now.writingTitle,
    body: (
      <div className="space-y-sm">
        <p>{nb(t.now.writingText)}</p>
        {plannedArticles.length > 0 && (
          <ul className="list-disc space-y-xs pl-md marker:text-muted">
            {plannedArticles.map((a) => (
              <li key={a.en}>{a[locale]}</li>
            ))}
          </ul>
        )}
        {latest && (
          <p className="text-muted">
            {t.now.latestLabel}:{" "}
            <TextLink href={latest.url}>
              <span lang="en">{latest.title}</span>
            </TextLink>
          </p>
        )}
      </div>
    ),
  };

  return (
    <>
      <Seo title={t.now.seoTitle} description={t.now.seoDescription} />
      <PageIntro
        title={t.now.title}
        aside={
          <p className="meta">
            {t.now.updatedLabel}: <time dateTime={site.nowUpdated}>{updated}</time>
          </p>
        }
      >
        <p className="text-ink">{t.now.intro}</p>
      </PageIntro>
      <MainColumn>
        <RuledRows
          headingLevel={2}
          rows={[
            writing,
            ...t.now.rows.map((r) => ({ key: r.title, title: r.title, body: <p>{nb(r.text)}</p> })),
          ]}
        />
      </MainColumn>
      <ContactSection />
    </>
  );
}
