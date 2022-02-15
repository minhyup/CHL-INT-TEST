import React from "react";
import { ComponentStory } from "@storybook/react";
import { HeaderMain } from "./HeaderMain";
import { IHeaderMain } from "./HeaderMain.types";

export default {
  title: "Combinations/헤더-메인",
  component: HeaderMain,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof HeaderMain> = (
  props: IHeaderMain
): React.ReactElement => {
  return <HeaderMain {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  headerIcons: [
    {
      iconProps: {
        className: "bell",
        onClick: (e) => {
          e.preventDefault();
          console.log("bell");
        },
      },
    },
    {
      iconProps: {
        className: "help",
        onClick: (e) => {
          e.preventDefault();
          console.log("help");
        },
      },
    },
    {
      iconProps: {
        className: "bell",
        onClick: (e) => {
          e.preventDefault();
          console.log("help");
        },
      },
    },
  ],
};
