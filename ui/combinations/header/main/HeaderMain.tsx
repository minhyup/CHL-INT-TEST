import React from "react";
import { Icon } from "@/ui/elements/icon";
import { HeaderWrapper } from "./HeaderMain.styled";
import { IHeaderMain } from "./HeaderMain.types";

export const HeaderMain = ({ headerIcons, ...rest }: IHeaderMain) => (
  <HeaderWrapper {...rest}>
    {headerIcons &&
      headerIcons.map((item, index) => (
        <Icon
          key={`${item.iconName}-${index}`}
          className={item.iconName}
          onClick={item.iconEvent}
        />
      ))}
  </HeaderWrapper>
);
