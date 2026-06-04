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

export const MobileButton = styled.div`
  display: none;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.dark};
  box-shadow: 8px 8px 0px ${props => props.theme.colors.dark};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}){ 
    display: flex;
  }
`

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}){ 
    display: none;
    order: -1;  
    width: 100%;
  }
`