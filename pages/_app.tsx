import type { AppProps } from "next/app";
import { ResetCss, AtomicCss } from "@/ui/styles/global/GlobalStyles";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCss />
      <AtomicCss />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
