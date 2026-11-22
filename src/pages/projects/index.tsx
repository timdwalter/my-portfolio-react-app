import Seo from "@/components/ui/Seo";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/Cards";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/content/data";
import { useT } from "@/lib/i18n";

export default function ProjectsPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.projects.seoTitle} description={t.projects.seoDescription} />
      <PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title}>
        {t.projects.intro}
      </PageHeader>
      <section className="pb-8">
        <div className="container grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
