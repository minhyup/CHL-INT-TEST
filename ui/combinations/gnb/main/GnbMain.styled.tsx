import styled from "@emotion/styled";

export const GnbNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const GnbWrapper = styled.ul`
  display: flex;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
`;
export const GnbItem = styled.li`
  flex-grow: 1;
`;
export const GnbLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 6rem;
`;
export const GnbIcon = styled.img``;

export const GnbTitle = styled.span`
  display: block;
  font-size: 1.2rem;
  margin-top: 0.4rem;
`;
