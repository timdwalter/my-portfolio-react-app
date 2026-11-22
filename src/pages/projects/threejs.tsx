import dynamic from "next/dynamic";
import { Leva } from "leva";
import Seo from "@/components/ui/Seo";
import { TextLink } from "@/components/ui/Doc";
import { useT } from "@/lib/i18n";
import { projects } from "@/content/data";

const demo = projects.find((p) => p.id === "threejs");

function Loading() {
  const t = useT();
  return <div className="meta grid h-full place-items-center text-paper/70">{t.threejs.loading}</div>;
}

// WebGL only runs in the browser – load the heavy scene client-side on demand.
const Scene = dynamic(() => import("@/components/threejs/Scene"), { ssr: false, loading: Loading });

export default function ThreeJsPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.threejs.seoTitle} description={t.threejs.seoDescription} image="/Darth_Vader.png" />
      <section aria-labelledby="page-title" className="pb-2xl pt-2xl">
        <div className="container grid-12 gap-y-lg">
          <div className="col-main lg:row-start-1">
            <h1 id="page-title" className="text-[2.625rem] leading-[1.06] lg:text-[3.25rem]">
              {t.threejs.seoTitle}
            </h1>
          </div>
          <div className="col-meta lg:row-start-1">
            <TextLink href="/projects">{t.threejs.back}</TextLink>
            {demo && <p className="meta mt-sm">{demo.tags.join(", ")}</p>}
          </div>
          <div className="col-span-12">
            <div className="relative h-[60vh] overflow-hidden border border-rule bg-ink md:h-[72vh]">
              <Scene />
            </div>
            <p className="meta mt-sm">{t.threejs.hint}</p>
          </div>
        </div>
      </section>
      {/* Effects use leva controls; keep the panel hidden in the portfolio */}
      <Leva hidden />
    </>
  );
}
