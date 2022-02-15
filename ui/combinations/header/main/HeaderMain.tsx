import React from "react";
import { Icon } from "@/ui/elements/icon";
import { HeaderWrapper } from "./HeaderMain.styled";
import { IHeaderMain } from "./HeaderMain.types";

export const HeaderMain = ({ wrapperProps, headerIcons }: IHeaderMain) => (
  <HeaderWrapper {...wrapperProps}>
    {headerIcons &&
      headerIcons.map(({ iconProps }, index) => (
        <Icon key={`${iconProps}-${index}`} {...iconProps} />
      ))}
  </HeaderWrapper>
);
