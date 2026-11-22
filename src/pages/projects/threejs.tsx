import dynamic from "next/dynamic";
import Link from "next/link";
import { Leva } from "leva";
import Seo from "@/components/ui/Seo";
import { useT } from "@/lib/i18n";

function Loading() {
  const t = useT();
  return (
    <div className="grid h-full place-items-center font-mono text-sm text-faint">
      <span className="animate-pulse-dot">{t.threejs.loading}</span>
    </div>
  );
}

// WebGL only runs in the browser – load the heavy scene client-side on demand.
const Scene = dynamic(() => import("@/components/threejs/Scene"), { ssr: false, loading: Loading });

export default function ThreeJsPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.threejs.seoTitle} description={t.threejs.seoDescription} image="/Darth_Vader.png" />
      <section className="pb-16 pt-28 md:pt-32">
        <div className="container">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Link href="/projects" className="mb-4 inline-flex items-center gap-2 text-sm text-muted hover:text-heading">
                <span aria-hidden="true">←</span> {t.threejs.back}
              </Link>
              <h1 className="text-3xl font-semibold md:text-4xl">{t.threejs.seoTitle}</h1>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["React Three Fiber", "Three.js", "Postprocessing"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[60vh] overflow-hidden rounded-2xl border border-line bg-black md:h-[72vh]">
            <Scene />
          </div>
          <p className="mt-4 font-mono text-xs text-faint">{t.threejs.hint}</p>
        </div>
      </section>
      {/* Effects use leva controls; keep the panel hidden in the portfolio */}
      <Leva hidden />
    </>
  );
}
