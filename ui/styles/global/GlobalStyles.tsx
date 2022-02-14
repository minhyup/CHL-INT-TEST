import { Global, css } from "@emotion/react";

export const ResetCss = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
      }
      @font-face {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        src: local("Spoqa Han Sans Bold"),
          url("/font/SpoqaHanSansNeo/woff2/SpoqaHanSansNeo-Bold.woff2")
            format("woff2"),
          url("/font/SpoqaHanSansNeo/woff/SpoqaHanSansNeo-Bold.woff")
            format("woff"),
          url("/font/SpoqaHanSansNeo/ttf/SpoqaHanSansNeo-Bold.ttf")
            format("truetype");
      }
      @font-face {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 500;
        src: local("Spoqa Han Sans Medium"),
          url("/font/SpoqaHanSansNeo/woff2/SpoqaHanSansNeo-Medium.woff2")
            format("woff2"),
          url("/font/SpoqaHanSansNeo/woff/SpoqaHanSansNeo-Medium.woff")
            format("woff"),
          url("/font/SpoqaHanSansNeo/ttf/SpoqaHanSansNeo-Medium.ttf")
            format("truetype");
      }
      @font-face {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 400;
        src: local("Spoqa Han Sans Regular"),
          url("/font/SpoqaHanSansNeo/woff2/SpoqaHanSansNeo-Regular.woff2")
            format("woff2"),
          url("/font/SpoqaHanSansNeo/woff/SpoqaHanSansNeo-Regular.woff")
            format("woff"),
          url("/font/SpoqaHanSansNeo/ttf/SpoqaHanSansNeo-Regular.ttf")
            format("truetype");
      }
      body,
      p,
      ul,
      ul,
      h1,
      h2,
      h3,
      h4 {
        margin: 0;
        padding: 0;
      }

      body,
      button,
      h1,
      h2,
      h3,
      h4,
      input,
      select,
      table,
      textarea {
        font-family: Spoqa Han Sans Neo, -apple-system, system-ui, HelveticaNeue,
          AppleSDGothicNeo, sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.5;
      }

      body {
        position: relative;
        color: #000;
        word-break: break-all;
      }
      ol,
      ul {
        list-style: none;
      }
      img {
        border: 0;
        vertical-align: top;
      }
      svg {
        vertical-align: top;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      em {
        font-style: normal;
      }
    `}
  />
);

export const AtomicCss = () => (
  <Global
    styles={css`
      .blind,
      .a11y {
        overflow: hidden !important;
        position: absolute !important;
        clip: rect(0 0 0 0) !important;
        width: 1px !important;
        height: 1px !important;
        margin: -1px !important;
      }
      .mb-8 {
        margin-bottom: 0.8rem !important;
      }
      .mb-12 {
        margin-bottom: 1.2rem !important;
      }
      .mb-20 {
        margin-bottom: 2rem !important;
      }
      .mb-40 {
        margin-bottom: 4rem !important;
      }
      .mt-16 {
        margin-top: 1.6rem !important;
      }
    `}
  />
);
