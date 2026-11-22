import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/ui/Logo";
import { useLocale, useT } from "@/lib/i18n";

function LanguageSwitch() {
  const { asPath } = useRouter();
  const locale = useLocale();
  const t = useT();
  return (
    <div className="flex items-center rounded-lg border border-line p-0.5 font-mono text-xs" aria-label={t.nav.language}>
      {(["en", "de"] as const).map((l) => (
        <Link
          key={l}
          href={asPath}
          locale={l}
          scroll={false}
          aria-current={l === locale ? "true" : undefined}
          className={classNames(
            "rounded-md px-2 py-1 uppercase transition",
            l === locale ? "bg-line text-heading" : "text-faint hover:text-body"
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/#industries", label: t.nav.industries },
    { href: "/projects", label: t.nav.projects },
    { href: "/about#skills", label: t.nav.skills },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  // Anchor links (#industries, #skills) never show as active – only real pages do.
  const isActive = (href: string) =>
    !href.includes("#") && (router.pathname === href || router.pathname.startsWith(`${href}/`));

  return (
    <header
      className={classNames(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line/80 bg-canvas/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-[72px]">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames(
                    "text-sm transition",
                    isActive(link.href) ? "text-heading" : "text-muted hover:text-heading"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
          <Link
            href="/#contact"
            className="rounded-lg bg-heading px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            {t.nav.contact}
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-body hover:bg-surface-hover lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="container pb-6 lg:hidden">
          <ul className="flex flex-col border-t border-line pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames(
                    "block py-3 text-lg",
                    isActive(link.href) ? "text-brand-400" : "text-body"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <LanguageSwitch />
            <Link
              href="/#contact"
              className="rounded-lg bg-heading px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
