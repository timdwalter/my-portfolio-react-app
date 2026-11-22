import type { ReactNode } from "react";
import Seo from "@/components/ui/Seo";
import { useLocale } from "@/lib/i18n";

/** Legal pages are maintained in German only (the legally binding version). */
export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  const locale = useLocale();
  return (
    <>
      <Seo title={title} description={title} />
      <section className="pb-24 pt-32 md:pt-40">
        <div className="container max-w-3xl">
          <p className="eyebrow mb-5">{locale === "de" ? "Rechtliches" : "Legal"}</p>
          <h1 className="mb-8 text-4xl font-semibold md:text-5xl">{title}</h1>
          {locale === "en" && (
            <p className="mb-10 rounded-xl border border-line bg-subtle p-4 text-sm text-muted">
              This page is provided in German, as required by German law.
            </p>
          )}
          <div className="prose-legal">{children}</div>
        </div>
      </section>
    </>
  );
}
