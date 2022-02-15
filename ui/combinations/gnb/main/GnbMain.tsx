import React from "react";
import { useRouter } from "next/router";
import {
  GnbNav,
  GnbWrapper,
  GnbItem,
  GnbLink,
  GnbTitle,
} from "./GnbMain.styled";
import { IGnbMain } from "./GnbMain.types";
import { Icon } from "@/ui/elements/icon";

export const GnbMain = ({
  wrapperProps,
  height = "6rem",
  gnbIcons = [
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
  ],
}: IGnbMain) => {
  const router = useRouter();

  return (
    <>
      <div style={{ height }}></div>
      <GnbNav {...wrapperProps}>
        <GnbWrapper>
          {gnbIcons.map(({ iconTitle, iconName, iconAnchorProps }) => (
            <GnbItem key={iconTitle}>
              <GnbLink href="#" height="6rem" {...iconAnchorProps}>
                <Icon
                  className={`${
                    router.pathname.substring(1) === iconName
                      ? `${iconName}-active`
                      : `${iconName}`
                  }`}
                />
                <GnbTitle>{iconTitle}</GnbTitle>
              </GnbLink>
            </GnbItem>
          ))}
        </GnbWrapper>
      </GnbNav>
    </>
  );
};
