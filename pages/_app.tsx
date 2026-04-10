import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import "@/styles/globals.css";
import "@/styles/briston-icons/style.css";
import "@/styles/fontawesome/css/all.min.css";
import "@/styles/briston.css"
import "@/styles/profile.css"
// import "@/styles/profile_book.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
