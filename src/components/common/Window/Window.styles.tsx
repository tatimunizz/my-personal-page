import styled from "styled-components";

export const StyledWindow = styled.div`
width: 100%;
  background-color: ${prop => prop.theme.colors.secondaryLight};
  box-shadow: 8px 8px 0px ${props => props.theme.colors.dark};
`

export const TitleBar = styled.div`
  background-color: ${prop => prop.theme.colors.medium};
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

export const ContentBox = styled.div`
  padding: 20px;
`