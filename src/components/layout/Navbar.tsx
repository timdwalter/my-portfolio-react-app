import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/ui/Logo";
import { useLocale, useT } from "@/lib/i18n";

function LanguageSwitch() {
  const { asPath, pathname } = useRouter();
  const locale = useLocale();
  const t = useT();
  // The 404 page is prerendered, so its server-side asPath ("/404") differs from the real URL.
  const target = pathname === "/404" ? "/" : asPath;
  return (
    <p className="flex items-center gap-xs text-[0.875rem]" aria-label={t.nav.language}>
      {(["en", "de"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-xs">
          {i > 0 && (
            <span aria-hidden="true" className="text-muted">
              /
            </span>
          )}
          {l === locale ? (
            <span aria-current="true" className="font-medium uppercase text-ink">
              {l}
            </span>
          ) : (
            <Link
              href={target}
              locale={l}
              scroll={false}
              hrefLang={l}
              className="uppercase text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {l}
            </Link>
          )}
        </span>
      ))}
    </p>
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
    { href: "/about#stack", label: t.nav.stack },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/now", label: t.nav.now },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape
  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    window.addEventListener("keydown", onKey);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [router.events]);

  // Pages that render <ContactSection /> link to their own block; others go to the home page's.
  const contactHref = ["/", "/about", "/projects", "/blog"].includes(router.pathname) ? "#contact" : "/#contact";

  // Anchor links (#industries, #skills) never show as active – only real pages do.
  const isActive = (href: string) =>
    !href.includes("#") && (router.pathname === href || router.pathname.startsWith(`${href}/`));

  return (
    <header
      className={classNames(
        "fixed inset-x-0 top-0 z-50 border-b bg-paper transition-colors duration-200",
        scrolled || open ? "border-rule" : "border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-xl lg:flex">
          <ul className="flex items-center gap-lg">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={classNames(
                      "text-[0.9375rem] underline-offset-[6px] transition-colors",
                      active
                        ? "text-ink underline decoration-accent decoration-2"
                        : "text-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitch />
          <Link
            href={contactHref}
            className="border border-ink px-md py-xs text-[0.875rem] font-medium leading-7 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {t.nav.contact}
          </Link>
        </div>

        <button
          type="button"
          className="-mr-sm grid h-11 w-11 place-items-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="container pb-lg lg:hidden">
          <ul className="border-t border-rule">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="border-b border-rule">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={classNames(
                      "block py-md font-display text-[1.375rem] leading-snug",
                      active ? "text-accent" : "text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-lg flex items-center justify-between">
            <LanguageSwitch />
            <Link
              href={contactHref}
              className="border border-ink px-md py-xs text-[0.875rem] font-medium leading-7 text-ink"
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
