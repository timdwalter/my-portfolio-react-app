import Seo from "@/components/ui/Seo";
import { MainColumn, PageIntro, ProjectRows, TextLink } from "@/components/ui/Doc";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/content/data";
import { site } from "@/content/site";
import { useT } from "@/lib/i18n";

export default function ProjectsPage() {
  const t = useT();
  return (
    <>
      <Seo title={t.projects.seoTitle} description={t.projects.seoDescription} />
      <PageIntro
        title={t.projects.title}
        aside={
          site.showGithub && (
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              {t.github.note}{" "}
              <TextLink href={site.socials.github}>{t.github.link}</TextLink>
            </p>
          )
        }
      >
        <p className="text-ink">{t.projects.intro}</p>
      </PageIntro>
      <MainColumn>
        <ProjectRows projects={projects} headingLevel={2} />
      </MainColumn>
      <ContactSection />
    </>
  );
}
