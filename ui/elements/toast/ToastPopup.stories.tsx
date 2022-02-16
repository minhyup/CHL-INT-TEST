import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { ToastPopup } from "./ToastPopup";
import { IToastPopup } from "./ToastPopup.types";
import { ToastWrapper, ToastMessage } from "./ToastPopup.styled";

export default {
  title: "Elements/팝업/토스트",
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

/**
 * 토스트 메시지
 * @param props
 * @returns
 */
export const VToastPopup1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 토스트 메시지
    <ToastWrapper {...props}>
      <ToastMessage>안녕하세요. 반갑습니다.</ToastMessage>
    </ToastWrapper>
  );
};
