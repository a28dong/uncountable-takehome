import styled from "styled-components";

interface ISpacer {
  height?: number;
}
export const Spacer = styled.div<ISpacer>`
  height: ${(props) => (props.height ? `${props.height}px` : "16px")};
  display: block;
`;
