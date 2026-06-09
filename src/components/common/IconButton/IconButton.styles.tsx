import styled from "styled-components";

export const StyledIconButton = styled.button`
  &:hover {
    color: ${props => props.theme.colors.secondaryDark}
  }
`