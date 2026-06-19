import { Window } from "@components/common/Window/Window";
import { ContentBox } from "@components/common/Window/Window.styles";
import styled from "styled-components";

export const StyledAboutMe = styled(Window)`
  width: 100%;
  ${ContentBox} {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const TopBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 8px;
  white-space: nowrap;

  span {
  padding-left: 4px;
    display: flex;
    gap: 8px;
  }
`

export const TextArea = styled.div`

`

export const Section = styled.section`
display: flex;
flex-direction: column;
gap: 8px;

h2 { 
  font-size: ${props => props.theme.typography.fontSize.medium};
}

h3 {
  font-size: ${props => props.theme.typography.fontSize.medium};
  border-bottom: 1px solid ${props => props.theme.colors.secondaryDark};
  margin-left: 8px;
}

p {
  margin-left: 8px;
  text-align: justify;
  
}

`
