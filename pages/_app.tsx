import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/app.css";
import "@/styles/header.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
