import React from "react";
import {
  CardTitleWrapper,
  CardTitle,
  CardTotal,
  CardTitleLink,
} from "./TitleCount.styled";
import { ITitleCount } from "./TitleCount.types";

export const TitleCount = ({
  wrapperProps,
  exAnchorProps,
  mainTotalTitle,
  mainTotal,
  exLinkTitle,
}: ITitleCount) => {
  return (
    <CardTitleWrapper className="mb-12" {...wrapperProps}>
      <CardTitle>
        {mainTotalTitle}
        <CardTotal>{mainTotal}</CardTotal>
      </CardTitle>
      {exLinkTitle && (
        <CardTitleLink href="#" {...exAnchorProps}>
          {exLinkTitle}
        </CardTitleLink>
      )}
    </CardTitleWrapper>
  );
};
