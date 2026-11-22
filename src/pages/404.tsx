import Seo from "@/components/ui/Seo";
import HexBackground from "@/components/ui/HexBackground";
import Button from "@/components/ui/Button";
import { useT } from "@/lib/i18n";

export default function NotFoundPage() {
  const t = useT();
  return (
    <>
      <Seo title="404" description={t.notFound.text} />
      <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-24 text-center">
        <HexBackground />
        <div className="relative">
          <p className="font-mono text-7xl font-semibold text-gradient md:text-9xl">404</p>
          <h1 className="mt-6 text-2xl font-semibold md:text-3xl">{t.notFound.title}</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">{t.notFound.text}</p>
          <Button href="/" className="mt-8">
            {t.notFound.back}
          </Button>
        </div>
      </section>
    </>
  );
}
