import { Accordion } from "@components/common/Accordion/Accordion";
import { AccordionButton } from "@components/common/Accordion/Accordion.styles";
import styled from "styled-components";

export const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 32vw;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    order: -1;
    width: 100%;
  }
`

export const MobileAccordion = styled(Accordion)`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    gap: 24px;
    padding: 0px 20px;
    padding-bottom: ${(props) => (props.isOpen ? "20px" : "0px")};
    background-color: ${(props) => props.theme.colors.light};
    border: 2px solid ${(props) => props.theme.colors.dark};
    box-shadow: 8px 8px 0px ${(props) => props.theme.colors.dark};

    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.01);
    }
  }
  
  > ${AccordionButton} {
    display: none;
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      display: flex;
      border-bottom: ${(props) => (props.isOpen ? "2px solid " + props.theme.colors.dark : "none")};
    }
  }

  }
`

export const SideBarContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: ${(props) => (props.isOpen ? `flex` : "none")};
  }
`
