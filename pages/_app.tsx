import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import { ResetCss, AtomicCss } from "@/ui/styles/global/GlobalStyles";
import { platformState } from "@/store/device";

function MyApp(props: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ReactApp {...props} />
      </RecoilRoot>
    </>
  );
}

const ReactApp = ({ Component, pageProps }: AppProps) => {
  const [platform, setPlatform] = useRecoilState(platformState);

  useEffect(() => {
    smoothscroll.polyfill();

    const ua = window.navigator.userAgent;
    if (ua.indexOf("HANWHALIFE") > -1 || ua.indexOf("HoneMobile") > -1) {
      if (/android/i.test(ua.toLowerCase())) {
        setPlatform("Android");
      }
      if (/iphone|ipad|ipod/i.test(ua.toLowerCase())) {
        setPlatform("iOS");
      }
    } else {
      setPlatform("Web");
    }
  }, [setPlatform]);
  // const [platform, setPlatform] = useRecoilState(platformState);
  // console.log("platform::", platform);

  // useEffect(() => {
  //   smoothscroll.polyfill();
  //   const ua = window.navigator.userAgent;
  //   if (ua.indexOf("HANWHALIFE") > -1 || ua.indexOf("HoneMobile") > -1) {
  //     if (/android/i.test(ua.toLowerCase())) {
  //       setPlatform("Android");
  //     }
  //     if (/iphone|ipad|ipod/i.test(ua.toLowerCase())) {
  //       setPlatform("iOS");
  //     }
  //   } else {
  //     setPlatform("Web");
  //   }
  //   console.log("_app mounted");
  // }, [setPlatform]);

  return (
    <>
      {platform && (
        <>
          <ResetCss />
          <AtomicCss />
          <Component {...pageProps} />
        </>
      )}
      {/* <ResetCss />
      <AtomicCss />
      <Component {...pageProps} /> */}
    </>
  );
};

export default MyApp;
