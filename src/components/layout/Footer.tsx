import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { mailto, site } from "@/content/site";
import { useT } from "@/lib/i18n";

type FooterLink = { href: string; label: string };

function FooterList({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="font-sans text-[0.9375rem] font-medium tracking-normal text-ink">{title}</h2>
      <ul className="mt-sm space-y-xs">
        {links.map((link) => {
          const cls = "text-[0.9375rem] text-muted underline-offset-4 transition-colors hover:text-ink hover:underline";
          return (
            <li key={link.href}>
              {link.href.startsWith("http") ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={cls}>
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  const t = useT();

  const pages: FooterLink[] = [
    { href: "/#industries", label: t.nav.industries },
    { href: "/projects", label: t.nav.projects },
    { href: "/about#skills", label: t.nav.skills },
    { href: "/about#stack", label: t.nav.stack },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
  ];
  const profiles: FooterLink[] = [
    { href: site.socials.linkedin, label: "LinkedIn" },
    ...(site.showGithub ? [{ href: site.socials.github, label: "GitHub" }] : []),
    { href: site.socials.xing, label: "XING" },
    { href: site.socials.medium, label: "Medium" },
  ];
  const legal: FooterLink[] = [
    { href: "/impressum", label: t.footer.imprint },
    { href: "/datenschutz", label: t.footer.privacy },
  ];

  return (
    <footer className="border-t border-rule">
      <div className="container grid-12 gap-y-xl py-xl lg:py-2xl">
        <div className="col-meta">
          <Logo />
          <p className="mt-md max-w-[28ch] text-[0.9375rem] leading-relaxed text-muted">{t.footer.tagline}</p>
          <a href={mailto()} className="link mt-sm inline-block text-[0.9375rem]">
            {site.email}
          </a>
        </div>
        <nav aria-label={t.footer.sitemap} className="col-main grid grid-cols-2 gap-x-lg gap-y-xl sm:grid-cols-3">
          <FooterList title={t.footer.sitemap} links={pages} />
          <FooterList title={t.footer.connect} links={profiles} />
          <FooterList title={t.footer.legal} links={legal} />
        </nav>
      </div>
      <div className="container">
        <p className="border-t border-rule py-md text-[0.8125rem] text-muted">
          © {new Date().getFullYear()} {site.displayName}, {site.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
