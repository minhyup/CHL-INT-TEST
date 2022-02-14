import React from "react";
import {
  CardTitleWrapper,
  CardTitle,
  CardTotal,
  CardTitleLink,
} from "./TitleCount.styled";
import { ITitleCount } from "./TitleCount.types";

export const TitleCount = ({
  mainTotalTitle,
  mainTotal,
  onMainExLinkClick,
  ...rest
}: ITitleCount) => {
  return (
    <CardTitleWrapper className="mb-12" {...rest}>
      <CardTitle>
        {mainTotalTitle}
        <CardTotal>{mainTotal}</CardTotal>
      </CardTitle>
      {onMainExLinkClick && (
        <CardTitleLink href="#" onClick={onMainExLinkClick}>
          타사보험조회
        </CardTitleLink>
      )}
    </CardTitleWrapper>
  );
};
