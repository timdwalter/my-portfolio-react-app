import Head from "next/head";
import { useRouter } from "next/router";
import { site } from "@/content/site";

type Props = { title: string; description: string; image?: string };

export default function Seo({ title, description, image }: Props) {
  const { locale, defaultLocale, asPath, pathname } = useRouter();
  // The prerendered 404 page has no meaningful path of its own.
  const path = pathname === "/404" ? "/" : asPath.split(/[?#]/)[0];
  const fullTitle = `${title} | ${site.name}`;
  const localized = (l?: string) => `${site.url}${l && l !== defaultLocale ? `/${l}` : ""}${path === "/" ? "" : path}`;
  // Link preview (LinkedIn, Slack, …): 1200×630 image in the page language, rendered from the site design.
  const ogImage = image ?? `/og-${locale === "de" ? "de" : "en"}.png`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.brand} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={localized(locale)} />
      <meta property="og:image" content={`${site.url}${ogImage}`} />
      {!image && (
        <>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      <meta property="og:image:alt" content={`${site.displayName} – ${site.brand}`} />
      <meta property="og:locale" content={locale === "de" ? "de_DE" : "en_US"} />
      <meta property="og:locale:alternate" content={locale === "de" ? "en_US" : "de_DE"} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={localized(locale)} />
      <link rel="alternate" hrefLang="en" href={localized("en")} />
      <link rel="alternate" hrefLang="de" href={localized("de")} />
      <link rel="alternate" hrefLang="x-default" href={localized("en")} />
    </Head>
  );
}
