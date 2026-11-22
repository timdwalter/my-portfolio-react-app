import type { ReactNode } from "react";
import Seo from "@/components/ui/Seo";
import { MainColumn, PageIntro } from "@/components/ui/Doc";
import { useLocale } from "@/lib/i18n";

/** Legal pages are maintained in German only (the legally binding version). */
export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  const locale = useLocale();
  return (
    <>
      <Seo title={title} description={title} />
      <PageIntro
        title={title}
        aside={
          locale === "en" && (
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              This page is provided in German, as required by German law.
            </p>
          )
        }
      />
      <MainColumn>
        <div className="prose-legal max-w-[52ch] border-t border-rule pb-2xl">{children}</div>
      </MainColumn>
    </>
  );
}
