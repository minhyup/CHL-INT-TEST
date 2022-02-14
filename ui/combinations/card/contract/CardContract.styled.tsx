import styled from "@emotion/styled";

export const CardMainWrapper = styled.div`
  padding: 24px;
  border-radius: 14px;
  background-color: #fff;
`;

export const CardMainTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  color: #000;
`;
export const CardMainDesc = styled.strong`
  font-size: 2.4rem;
  line-height: 3.4rem;
  text-align: left;
  color: #000;
`;
export const CardMainLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #eee;
`;

export const CardListRow = styled.div`
  display: flex;
  align-items: center;
  svg {
    flex-shrink: 0;
  }
`;
export const CardListRowTitle = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  color: #333;
`;
export const CardListRowStatus = styled.em`
  white-space: nowrap;
  font-size: 1.4rem;
  color: #0150ad;
  margin-right: 1px;
`;
export const CardListDesc = styled.p`
  font-size: 1.4rem;
  color: #666;
`;

export const CardListItem = styled.a`
  display: block;
`;
export const CardListWrapper = styled.ul`
  li:not(:last-child) {
    margin-bottom: 8px;
  }
  li:first-child {
    margin-top: 1.6rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.a<{ type?: "primary" | "secondary" }>`
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 8px;
  height: 5rem;
  line-height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0 1rem;

  ${({ type = "primary" }) =>
    type === "primary"
      ? {
          backgroundColor: "#ff6600",
          borderColor: "#ff6600",
          color: "#fff",
        }
      : {
          borderColor: "#ff6600",
          color: "#ff6600",
        }};
`;
