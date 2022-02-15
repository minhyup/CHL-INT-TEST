import React from "react";
import { ComponentStory } from "@storybook/react";
import { ToastPopup } from "./ToastPopup";
import { IToastPopup } from "./ToastPopup.types";

export default {
  title: "Elements/토스트",
  component: ToastPopup,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof ToastPopup> = (
  props: IToastPopup
): React.ReactElement => {
  return <ToastPopup {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  toastMsg: "안녕하세요",
};
