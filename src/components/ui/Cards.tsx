import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import {
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { Article, Project } from "@/content/data";
import { useLocale, useT } from "@/lib/i18n";
import { Arrow } from "./Button";
import { Reveal } from "./Section";

const serviceIcons = {
  code: CodeBracketIcon,
  cloud: CloudIcon,
  chip: CpuChipIcon,
  people: UserGroupIcon,
  ai: SparklesIcon,
  process: ChartBarIcon,
  agent: CommandLineIcon,
} as const;

export function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = serviceIcons[icon as keyof typeof serviceIcons] ?? CodeBracketIcon;
  return <Icon className={className} />;
}

export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useT();
  const { href } = project;
  const external = href?.startsWith("http");

  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className={classNames(
            "object-cover transition duration-700",
            href ? "group-hover:scale-105" : "opacity-80"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-5 flex-1 text-[15px] leading-relaxed text-muted">{project.summary?.[locale]}</p>
        {project.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {href ? (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400">
            {t.projects.open} <Arrow />
          </span>
        ) : (
          <span className="font-mono text-xs uppercase tracking-wider text-faint">{t.projects.comingSoon}</span>
        )}
      </div>
    </>
  );

  const cls = classNames("card group flex h-full flex-col overflow-hidden", href && "card-hover");
  if (!href) return <div className={cls}>{body}</div>;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const locale = useLocale();
  const t = useT();
  const date = new Date(article.date).toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
    month: "short",
    year: "numeric",
  });
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "card card-hover group flex h-full flex-col p-7",
        featured && "md:p-10 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12"
      )}
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4 lg:justify-start">
          <span className="eyebrow">{article.category[locale]}</span>
          <time dateTime={article.date} className="font-mono text-[11px] text-faint">
            {date}
          </time>
        </div>
        <h3
          className={classNames(
            "mb-3 font-semibold leading-snug transition group-hover:text-brand-300",
            featured ? "text-2xl md:text-3xl lg:mb-0" : "text-xl"
          )}
        >
          {article.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col">
        <p className={classNames("mb-6 flex-1 leading-relaxed text-muted", featured ? "text-base" : "text-[15px]")}>
          {article.summary[locale]}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400">
          {t.blog.read} <Arrow />
        </span>
      </div>
    </a>
  );
}

/** Newest article as a full-width feature, the rest in a 3-column grid. */
export function ArticleGrid({ articles }: { articles: Article[] }) {
  const [first, ...rest] = articles;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {first && (
        <Reveal className="md:col-span-2 lg:col-span-3">
          <ArticleCard article={first} featured />
        </Reveal>
      )}
      {rest.map((a, i) => (
        <Reveal key={a.url} delay={(i % 3) * 0.06}>
          <ArticleCard article={a} />
        </Reveal>
      ))}
    </div>
  );
}
