import Seo from "@/components/ui/Seo";
import { PageIntro } from "@/components/ui/Doc";
import { useT } from "@/lib/i18n";
import Link from "next/link";

export default function NotFoundPage() {
  const t = useT();
  return (
    <>
      <Seo title="404" description={t.notFound.text} />
      <PageIntro title={t.notFound.title} aside={<p className="meta">404</p>}>
        <p className="text-ink">{t.notFound.text}</p>
        <p>
          <Link href="/" className="action">
            {t.notFound.back}
          </Link>
        </p>
      </PageIntro>
    </>
  );
}
