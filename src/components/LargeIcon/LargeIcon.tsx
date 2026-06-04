import styled from "styled-components";

export const LargeIcon = styled.div`
  width: 48px;
  height: 48px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 32px;
  height: 32px;
  }
`