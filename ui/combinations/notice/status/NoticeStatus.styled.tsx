import styled from "@emotion/styled";

export const NoticeStatusWrapper = styled.div`
  box-sizing: border-box;
  min-height: 4.4rem;
  padding: 1.2rem;
  background-color: #fff;
  border: 0 solid #ddd;
  border-radius: 14px;
`;

export const NoticeLink = styled.a`
  display: block;
`;

export const NoticeTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  letter-spacing: -0.3px;
  color: #333;
  padding: 0 0.4rem 0 0.8rem;
`;

export const NoticeStep = styled.span`
  display: inline;
  font-size: 1.5rem;
  text-align: left;
  color: #333;
  em {
    color: #ff6600;
  }
`;
