const path = require("path");
module.exports = {
  stories: ["../ui/**/*.stories.mdx", "../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@/ui": path.resolve(__dirname, "../ui"),
    };
    return config;
  },
};
