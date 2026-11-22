import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Article, Project } from "@/content/data";
import { useLocale, useT } from "@/lib/i18n";

/** Keeps a line from starting with "–" and from ending on a one-letter word like "I" or "a". */
export const nb = (text: string) =>
  text.replace(/ – /g, "\u00a0– ").replace(/(^|\s)([IAa]) /g, "$1$2\u00a0");

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
  const cls = `link ${className || "text-[0.9375rem]"}`;
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

export function ProjectRows({ projects, headingLevel = 3 }: { projects: Project[]; headingLevel?: 2 | 3 }) {
  const locale = useLocale();
  const t = useT();
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="border-t border-rule">
      {projects.map((p) => {
        const title = typeof p.title === "string" ? p.title : p.title[locale];
        return (
          <li key={p.id} className="grid gap-x-lg gap-y-md border-b border-rule py-lg sm:grid-cols-8">
            {/* the project images are square – show them whole */}
            {p.image && (
              <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden bg-rule sm:col-span-3 sm:max-w-none">
                <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 40vw, 100vw" className="object-cover" />
              </div>
            )}
            <div className="sm:col-span-5 sm:col-start-4">
              <H className="text-[1.5rem] leading-snug">{title}</H>
              {p.tags.length > 0 && <p className="meta mt-xs">{p.tags.join(", ")}</p>}
              {p.summary && (
                <p className="mt-sm max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink">{nb(p.summary[locale])}</p>
              )}
              {p.items && p.items.length > 0 && (
                <div className="mt-lg">
                  {p.itemsTitle && <p className="text-[0.9375rem] font-medium text-ink">{p.itemsTitle[locale]}</p>}
                  <ul className="mt-sm border-t border-rule">
                    {p.items.map((it) => (
                      <li key={it.title.en} className="border-b border-rule py-sm">
                        <p className="text-[0.9375rem] font-medium leading-snug text-ink">{it.title[locale]}</p>
                        <p className="mt-xs max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">{nb(it.text[locale])}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-lg">
                {p.href ? (
                  <Link href={p.href} className="action">
                    {t.projects.open}
                  </Link>
                ) : (
                  <p className="meta">{p.status ? p.status[locale] : t.projects.comingSoon}</p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ArticleRows({ articles, headingLevel = 3 }: { articles: Article[]; headingLevel?: 2 | 3 }) {
  const locale = useLocale();
  const t = useT();
  const H = headingLevel === 2 ? "h2" : "h3";
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
                <H
                  lang={locale === "de" ? "en" : undefined}
                  className="text-[1.375rem] leading-snug transition-colors group-hover:text-accent"
                >
                  {nb(a.title)}
                  <span className="sr-only"> – {t.blog.read}</span>
                </H>
                <p className="mt-xs max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">{nb(a.summary[locale])}</p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Page opening for sub-pages: h1 in the main column, optional margin content (photo, facts). */
export function PageIntro({ title, children, aside }: { title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section aria-labelledby="page-title" className="pb-xl pt-2xl lg:pb-2xl">
      <div className="container grid-12 gap-y-xl">
        <div className="stagger col-main lg:row-start-1">
          <h1
            id="page-title"
            className="text-[2.625rem] leading-[1.06] sm:text-[3.25rem] lg:text-[4.25rem] lg:leading-[1.04]"
          >
            {title}
          </h1>
          {children && <div className="mt-lg max-w-[52ch] space-y-md text-lg leading-relaxed lg:text-xl">{children}</div>}
        </div>
        {aside && <div className="stagger stagger-late col-meta lg:row-start-1 lg:pt-sm">{aside}</div>}
      </div>
    </section>
  );
}

export type Row = { key: string; title: ReactNode; meta?: ReactNode; body?: ReactNode };

/** Ruled rows: title (+ mono meta below it) left, body right; rows without a body are compact. */
export function RuledRows({ rows, headingLevel = 3 }: { rows: Row[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="border-t border-rule">
      {rows.map((r) => (
        <li key={r.key} className="border-b border-rule">
          {r.body ? (
            <div className="grid gap-y-sm py-lg sm:grid-cols-8 sm:gap-x-lg">
              <div className="sm:col-span-3">
                <H className="text-[1.375rem] leading-snug">{r.title}</H>
                {r.meta && <p className="meta mt-xs">{r.meta}</p>}
              </div>
              <div className="text-[0.9375rem] leading-relaxed text-ink sm:col-span-5">{r.body}</div>
            </div>
          ) : (
            <div className="py-md">
              <H className="text-[1.375rem] leading-snug">{r.title}</H>
              {r.meta && <p className="meta mt-xs">{r.meta}</p>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Main-column wrapper for page content that has no margin heading. */
export function MainColumn({ children }: { children: ReactNode }) {
  return (
    <div className="container grid-12">
      <div className="col-main">{children}</div>
    </div>
  );
}
