import { useRouter } from "next/router";
import { en } from "@/content/en";
import { de } from "@/content/de";

export type Locale = "en" | "de";

/** A string available in every supported language. */
export type L = Record<Locale, string>;

export function useLocale(): Locale {
  const { locale } = useRouter();
  return locale === "de" ? "de" : "en";
}

/** UI dictionary for the active language. */
export function useT() {
  return useLocale() === "de" ? de : en;
}
