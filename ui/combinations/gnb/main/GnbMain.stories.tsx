import React from "react";
import { ComponentStory } from "@storybook/react";
import { GnbMain } from "./GnbMain";
import { IGnbMain } from "./GnbMain.types";

export default {
  title: "Combinations/GNB-메인",
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
