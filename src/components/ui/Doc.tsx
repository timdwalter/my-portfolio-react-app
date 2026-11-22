import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Article, Project } from "@/content/data";
import { useLocale, useT } from "@/lib/i18n";

/** Binds a spaced dash to the preceding word so a line never starts with "–". */
export const nb = (text: string) => text.replace(/ – /g, "\u00a0– ");

/**
 * Page section in the documentation layout: heading (and optional intro/aside) in the
 * margin column, content in the main column. No kicker, no scroll animation.
 */
export function DocSection({
  id,
  title,
  intro,
  aside,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-xl py-xl lg:py-2xl">
      <div className="container grid-12 gap-y-lg">
        <div className="col-meta lg:sticky lg:top-2xl lg:self-start">
          <h2 id={`${id}-title`} className="text-[2rem] leading-tight lg:text-[2.5rem]">
            {title}
          </h2>
          {intro && <p className="mt-sm text-muted">{intro}</p>}
          {aside && <div className="mt-md">{aside}</div>}
        </div>
        <div className="col-main">{children}</div>
      </div>
    </section>
  );
}

/** Plain text link; external URLs open in a new tab. */
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const cls = `link text-[0.9375rem] ${className}`;
  if (/^https?:/.test(href))
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ProjectRows({ projects }: { projects: Project[] }) {
  const locale = useLocale();
  const t = useT();
  return (
    <ul className="border-t border-rule">
      {projects.map((p) => (
        <li key={p.id} className="grid gap-x-lg gap-y-md border-b border-rule py-lg sm:grid-cols-8">
          {/* the project images are square – show them whole */}
          <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden bg-rule sm:col-span-3 sm:max-w-none">
            <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="sm:col-span-5">
            <h3 className="text-[1.5rem] leading-snug">{p.title}</h3>
            {p.tags.length > 0 && <p className="meta mt-xs">{p.tags.join(", ")}</p>}
            {p.summary && <p className="mt-sm max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink">{nb(p.summary[locale])}</p>}
            <div className="mt-lg">
              {p.href ? (
                <Link href={p.href} className="action">
                  {t.projects.open}
                </Link>
              ) : (
                <p className="meta">{t.projects.comingSoon}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ArticleRows({ articles }: { articles: Article[] }) {
  const locale = useLocale();
  const t = useT();
  return (
    <ul className="border-t border-rule">
      {articles.map((a) => {
        const date = new Date(a.date).toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
          month: "short",
          year: "numeric",
        });
        return (
          <li key={a.url} className="border-b border-rule">
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-lg gap-y-xs py-lg sm:grid-cols-8"
            >
              <div className="sm:col-span-2">
                <time dateTime={a.date} className="meta block text-ink">
                  {date}
                </time>
                <p className="meta">{a.category[locale]}</p>
              </div>
              <div className="sm:col-span-6">
                <h3 className="text-[1.375rem] leading-snug transition-colors group-hover:text-accent">
                  {a.title}
                  <span className="sr-only"> – {t.blog.read}</span>
                </h3>
                <p className="mt-xs max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">{nb(a.summary[locale])}</p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
