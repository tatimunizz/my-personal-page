import styled from 'styled-components';

export const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 32vw;

  @media (max-width: ${props => props.theme.breakpoints.mobile}){ 
    order: -1;  
    width: 100%;
  }
`

export const MobileAccordion = styled.div<{ $isOpen: boolean }>`
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px 20px;
    padding-bottom: ${props => props.$isOpen ? '20px' : '0px'};
  
    background-color: ${props => props.theme.colors.light};
    border: 2px solid ${props => props.theme.colors.dark};
    box-shadow: 8px 8px 0px ${props => props.theme.colors.dark};
    transition: all 0.3s ease;
  }
`;

export const MobileButton = styled.div<{$isOpen: boolean}>`
  display: none;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  border-bottom: ${props => props.$isOpen ? '2px solid ' + props.theme.colors.dark : 'none'};
  box-shaddow: none;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}){ 
    display: flex;
  }
`

export const Toggle = styled.div<{$isOpen: boolean}>`
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
`

export const SideBarContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}){ 
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`