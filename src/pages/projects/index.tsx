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
      <PageIntro title={t.projects.title}>
        <p className="text-ink">{t.projects.intro}</p>
        {site.showGithub && (
          <p className="text-base text-muted">
            {t.github.note}{" "}
            <TextLink href={site.socials.github} className="text-base">
              {t.github.link}
            </TextLink>
          </p>
        )}
      </PageIntro>
      <MainColumn>
        <ProjectRows projects={projects} headingLevel={2} />
      </MainColumn>
      <ContactSection />
    </>
  );
}
