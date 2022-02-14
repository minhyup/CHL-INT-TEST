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
  gnbIcons = [
    {
      iconTitle: "나의계약",
      iconName: "mycontract",
      iconEvent: () => console.log("mycontract!"),
    },
    {
      iconTitle: "상품찾기",
      iconName: "products",
      iconEvent: () => console.log("products!"),
    },
    {
      iconTitle: "전체메뉴",
      iconName: "menu",
      iconEvent: () => console.log("menu!"),
    },
  ],
}: IGnbMain) => {
  const router = useRouter();

  return (
    <>
      <div style={{ height: "6rem" }}></div>
      <GnbNav>
        <GnbWrapper>
          {gnbIcons.map(({ iconTitle, iconName, iconEvent }) => (
            <GnbItem key={iconTitle}>
              <GnbLink href="#" onClick={iconEvent}>
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
