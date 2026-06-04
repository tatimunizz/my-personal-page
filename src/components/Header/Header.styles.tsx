
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.global.padding};
  gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${props => props.theme.global.xpadding};
  }
  
`

export const HeaderTitle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  gap: 10px;
  flex-direction: column;
  align-self: flex-start;

  h1 {
    font-size: ${props => props.theme.typography.fontSize.large};
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.medium};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    h1 {
     font-size: ${props => props.theme.typography.fontSize.medium};
    }

    p {
      font-size: ${props => props.theme.typography.fontSize.small};
    }
  }
`

export const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: clamp(20px, 5vw, 68px);
    padding: 0;
    margin: 0;

    a {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
  }
`