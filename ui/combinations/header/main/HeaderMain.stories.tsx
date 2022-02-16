import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { HeaderMain } from "./HeaderMain";
import { IHeaderMain } from "./HeaderMain.types";
import { Icon } from "@/ui/elements/icon";
import { HeaderWrapper } from "./HeaderMain.styled";

export default {
  title: "Combinations/헤더/메인",
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

/**
 * 로그인 시
 * @returns
 */
export const VHeaderMain1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 로그인 시
    <HeaderWrapper {...props}>
      <Icon className="bell" />
      <Icon className="help" />
    </HeaderWrapper>
  );
};

/**
 * 비로그인시
 * @returns
 */
export const VHeaderMain2 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 비로그인시
    <HeaderWrapper {...props}>
      <Icon className="help" />
    </HeaderWrapper>
  );
};
