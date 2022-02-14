import styled from "@emotion/styled";

export const LinkBannerWrapper = styled.a<{ height: string }>`
  min-height: ${({ height }) => height};
  box-sizing: border-box;
  display: flex;
  gap: 1.6rem;
  padding: 2.4rem;
  border-radius: 1.4rem;
  background-color: #eee;
`;
export const LinkBannerDescWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LinkBannerTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  text-align: left;
  color: #999;
  margin-bottom: 0.4rem;
`;
export const LinkBannerEmp = styled.strong`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: left;
  color: #000;
  em {
    color: #ff6600;
  }
`;

export const LinkBannerImg = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  align-self: flex-end;
`;
export const LinkBannerArrow = styled.div`
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
