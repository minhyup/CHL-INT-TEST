import React, { useRef } from "react";
import { ComponentStory } from "@storybook/react";
import { LyMainGnb } from "./LyMainGnb";
import { ILyMainGnb } from "./LyMainGnb.types";

export default {
  title: "Layout/메인",
  component: LyMainGnb,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof LyMainGnb> = (
  props: ILyMainGnb
): React.ReactElement => {
  return (
    <LyMainGnb {...props}>
      <p style={{ background: "tomato", height: "100%" }}>
        Main GNB 레이아웃의 자식입니다.
      </p>
    </LyMainGnb>
  );
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "메인GNB";
