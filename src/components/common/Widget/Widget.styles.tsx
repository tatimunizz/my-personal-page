import styled from "styled-components";

export const StyledWidget = styled.div`
  display: flex;
  background-color: ${prop => prop.theme.colors.medium};
  border: 2px solid ${props => props.theme.colors.dark};
  box-shadow: 8px 8px 0px ${props => props.theme.colors.dark};
  padding: 20px;
`