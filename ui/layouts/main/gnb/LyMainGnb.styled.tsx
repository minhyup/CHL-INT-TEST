import styled from "@emotion/styled";

export const PaddingContainer = styled.div<{
  padding?: string;
  bgColor?: string;
}>`
  min-height: 100vh;
  padding: ${({ padding = "0 2rem 4rem 2rem" }) => padding};
  background-color: ${({ bgColor = "#f6f6f6" }) => bgColor};
`;
