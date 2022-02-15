import React from "react";
import { Icon } from "@/ui/elements/icon";
import {
  CardMainWrapper,
  CardMainTitle,
  CardMainDesc,
  CardMainLink,
  CardListWrapper,
  CardListItem,
  CardListRow,
  CardListRowTitle,
  CardListRowStatus,
  CardListDesc,
  ButtonGroup,
  Button,
} from "./CardContract.styled";
import { ICardContract } from "./CardContract.types";

export const CardContract = ({
  wrapperProps,
  mainAnchorProps,
  mainTitle,
  mainLinkName,
  cardList,
  btnGrp,
}: ICardContract) => {
  return (
    <>
      <CardMainWrapper className="mb-20" {...wrapperProps}>
        <CardMainTitle>{mainTitle}</CardMainTitle>
        <CardMainLink href="#" className="test" {...mainAnchorProps}>
          <CardMainDesc>{mainLinkName}</CardMainDesc>
          <Icon className="arrow" />
        </CardMainLink>
        {cardList && (
          <CardListWrapper>
            {cardList.map(
              ({ itemName, itemTag, itemDesc, itemAnchorProps }, index) => (
                <li key={`${itemName}-${index}`}>
                  <CardListItem href="#" {...itemAnchorProps}>
                    <CardListRow>
                      <CardListRowTitle>{itemName}</CardListRowTitle>
                      {itemTag && (
                        <CardListRowStatus>{itemTag}</CardListRowStatus>
                      )}
                      <Icon className="arrow" />
                    </CardListRow>
                    <CardListDesc>{itemDesc}</CardListDesc>
                  </CardListItem>
                </li>
              )
            )}
          </CardListWrapper>
        )}

        {btnGrp && (
          <ButtonGroup className="mt-16">
            {btnGrp.map(({ btnName, btnPrmy, btnProps }) => {
              return (
                <Button
                  key={btnName}
                  href="#"
                  type={btnPrmy ? "primary" : "secondary"}
                  {...btnProps}
                >
                  {btnName}
                </Button>
              );
            })}
          </ButtonGroup>
        )}
      </CardMainWrapper>
    </>
  );
};
