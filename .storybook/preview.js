import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12
import { ResetCss, AtomicCss } from "../ui/styles/global/GlobalStyles";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ResetCss />
      <AtomicCss />
      <Story />
    </>
  ),
];
