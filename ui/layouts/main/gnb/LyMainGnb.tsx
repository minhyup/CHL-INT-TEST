import React from "react";
import { PaddingContainer } from "./LyMainGnb.styled";
import { HeaderMain } from "@/ui/combinations/header";
import { GnbMain } from "@/ui/combinations/gnb";
import { IMainGnb } from "./LyMainGnb.types";

/**
 * 메인 탭 레이아웃입니다.
 * @param param0
 * @returns
 */
export const LyMainGnb = ({
  children,
  padding,
  bgColor,
  headerIcons = [
    { iconName: "bell", iconEvent: () => console.log("bell") },
    { iconName: "help", iconEvent: () => console.log("help") },
  ],
}: IMainGnb) => {
  return (
    <>
      <PaddingContainer padding={padding} bgColor={bgColor}>
        <HeaderMain className="mb-8" headerIcons={headerIcons} />
        {children}
        <GnbMain />
      </PaddingContainer>
    </>
  );
};
