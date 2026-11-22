import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Layout from "@/components/layout/Layout";

// Self-hosted fonts (GDPR): files live in src/fonts, nothing is loaded from Google.
// Fraunces and IBM Plex Sans are variable fonts – one file serves every weight.
const display = localFont({
  src: "../fonts/fraunces-latin.woff2",
  weight: "100 900",
  variable: "--font-display",
  display: "swap",
});
const sans = localFont({
  src: "../fonts/ibm-plex-sans-latin.woff2",
  weight: "100 700",
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400-latin.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-mono-500-latin.woff2", weight: "500" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-display: ${display.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
