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
  mainTitle,
  mainLinkName,
  onMainLinkClick,
  cardList,
  btnGrp,
  ...rest
}: ICardContract) => {
  return (
    <>
      <CardMainWrapper className="mb-20" {...rest}>
        <CardMainTitle>{mainTitle}</CardMainTitle>
        <CardMainLink href="#" onClick={onMainLinkClick}>
          <CardMainDesc>{mainLinkName}</CardMainDesc>
          <Icon className="arrow" />
        </CardMainLink>
        {cardList && (
          <CardListWrapper>
            {cardList.map(
              ({ itemName, itemTag, itemDesc, onItemClick }, index) => (
                <li key={`${itemName}-${index}`}>
                  <CardListItem href="#" onClick={onItemClick}>
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
            {btnGrp.map(({ btnName, btnPrmy, onBtnClick }) => {
              return (
                <Button
                  key={btnName}
                  href="#"
                  type={btnPrmy ? "primary" : "secondary"}
                  onClick={onBtnClick}
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
