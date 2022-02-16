import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import {
  GnbNav,
  GnbWrapper,
  GnbItem,
  GnbLink,
  GnbTitle,
} from "./GnbMain.styled";
import { Icon } from "@/ui/elements/icon";
import { GnbMain } from "./GnbMain";
import { IGnbMain } from "./GnbMain.types";

export default {
  title: "Combinations/GNB/메인",
  component: GnbMain,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof GnbMain> = (
  props: IGnbMain
): React.ReactElement => {
  return <GnbMain {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  gnbIcons: [
    {
      iconTitle: "나의계약",
      iconName: "mycontract",
      iconAnchorProps: {
        onClick: () => console.log("mycontract!"),
      },
    },
    {
      iconTitle: "상품찾기",
      iconName: "products",
      iconAnchorProps: {
        onClick: () => console.log("products!"),
      },
    },
    {
      iconTitle: "전체메뉴",
      iconName: "menu",
      iconAnchorProps: {
        onClick: () => console.log("menu!"),
      },
    },
    {
      iconTitle: "전체메뉴",
      iconName: "menu",
      iconAnchorProps: {
        onClick: () => console.log("menu!"),
      },
    },
  ],
};

/**
 * 메인 하단 GNB
 * @returns
 */
export const VGnbMain1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 메인 하단 GNB
    <>
      <div style={{ height: "6rem" }}></div>
      <GnbNav {...props}>
        <GnbWrapper>
          <GnbItem>
            <GnbLink href="#" height="6rem">
              <Icon className="mycontract-active" />
              <GnbTitle>나의계약</GnbTitle>
            </GnbLink>
          </GnbItem>
          <GnbItem>
            <GnbLink href="#" height="6rem">
              <Icon className="products" />
              <GnbTitle>상품찾기</GnbTitle>
            </GnbLink>
          </GnbItem>
          <GnbItem>
            <GnbLink href="#" height="6rem">
              <Icon className="menu" />
              <GnbTitle>전체메뉴</GnbTitle>
            </GnbLink>
          </GnbItem>
        </GnbWrapper>
      </GnbNav>
    </>
  );
};
