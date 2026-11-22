import Head from "next/head";
import { useRouter } from "next/router";
import { site } from "@/content/site";

type Props = { title: string; description: string; image?: string };

export default function Seo({ title, description, image = "/TimTechSolutions.png" }: Props) {
  const { locale, defaultLocale, asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const fullTitle = `${title} | ${site.name}`;
  const localized = (l?: string) => `${site.url}${l && l !== defaultLocale ? `/${l}` : ""}${path === "/" ? "" : path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.brand} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta property="og:locale" content={locale === "de" ? "de_DE" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      {site.url && (
        <>
          <link rel="canonical" href={localized(locale)} />
          <link rel="alternate" hrefLang="en" href={localized("en")} />
          <link rel="alternate" hrefLang="de" href={localized("de")} />
          <link rel="alternate" hrefLang="x-default" href={localized("en")} />
        </>
      )}
    </Head>
  );
}
