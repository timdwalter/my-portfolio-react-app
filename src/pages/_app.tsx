import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "src/styles/honeycomb.css";
import "src/styles/desk-animation.css";
import "src/styles/styles.css";
import "src/styles/introduction-font.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
