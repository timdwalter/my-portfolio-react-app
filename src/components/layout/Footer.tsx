import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { mailto, site } from "@/content/site";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  const columns = [
    {
      title: t.footer.sitemap,
      links: [
        { href: "/projects", label: t.nav.projects },
        { href: "/about", label: t.nav.about },
        { href: "/blog", label: t.nav.blog },
      ],
    },
    {
      title: t.footer.connect,
      links: [
        { href: site.socials.linkedin, label: "LinkedIn" },
        ...(site.showGithub ? [{ href: site.socials.github, label: "GitHub" }] : []),
        { href: site.socials.xing, label: "XING" },
        { href: site.socials.medium, label: "Medium" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { href: "/impressum", label: t.footer.imprint },
        { href: "/datenschutz", label: t.footer.privacy },
      ],
    },
  ];

  return (
    <footer className="border-t border-line/70 bg-canvas">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          <a href={mailto()} className="mt-4 inline-block font-mono text-sm text-brand-400 hover:text-brand-300">
            {site.email}
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition hover:text-heading"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-muted transition hover:text-heading">
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line/70">
        <p className="container py-6 font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.displayName} · {site.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
