import React from "react";
import { ComponentStory } from "@storybook/react";
import { TitleCount } from "./TitleCount";
import { ITitleCount } from "./TitleCount.types";

export default {
  title: "Combinations/카드-타이틀",
  component: TitleCount,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof TitleCount> = (
  props: ITitleCount
): React.ReactElement => {
  return <TitleCount {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "카운트타이틀";
StoryJsx.args = {
  mainTotalTitle: "보험",
  mainTotal: "3",
  exLinkTitle: "타사보험조회",
  exAnchorProps: {
    onClick: (e) => {
      e.preventDefault();
      console.log("타사보험조회::", e.currentTarget.innerText);
    },
  },
};
