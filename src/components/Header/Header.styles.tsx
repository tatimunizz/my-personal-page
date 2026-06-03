
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 72px;
`

export const HeaderTitle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  gap: 10px;
  flex-direction: column;

  h1 {
    font-size: ${props => props.theme.typography.fontSize.large};
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.medium};
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