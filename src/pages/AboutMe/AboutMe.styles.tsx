import { Window } from "@components/common/Window/Window";
import { ContentBox } from "@components/common/Window/Window.styles";
import styled from "styled-components";

export const StyledAboutMe = styled(Window)`
  
  ${ContentBox} {
    display: flex;
    gap: 8px;
  }
`

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r}, ${g}, ${b}`;
};

export const SideBar = styled.aside`
  background-color: rgba(${props => hexToRgb(props.theme.colors.medium)}, 0.1);
  padding: 8px 0;
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
