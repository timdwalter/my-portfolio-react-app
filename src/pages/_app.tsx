import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Layout from "@/components/layout/Layout";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Expose font variables globally so portals (e.g. Leva) and body pick them up */}
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
