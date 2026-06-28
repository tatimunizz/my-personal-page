import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.global.padding};
  gap: 24px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${(props) => props.theme.global.xpadding};
  }

  @media (min-width: 1700px) {
    padding: 32px 20%;
  }
`;

export const HeaderTitle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.light};
  gap: 10px;
  flex-direction: column;
  align-self: flex-start;

  span {
    font-size: ${(props) => props.theme.typography.fontSize.large};
  }

  p {
    font-size: ${(props) => props.theme.typography.fontSize.medium};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    span {
      font-size: ${(props) => props.theme.typography.fontSize.medium};
    }

    p {
      font-size: ${(props) => props.theme.typography.fontSize.small};
    }
  }
`;

export const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: clamp(8px, 8vw, 68px);
    padding: 0;
    margin: 0;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding: 4px;
  
  transition:
    transform 0.1s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    box-shadow: 4px 4px 0px ${(props) => props.theme.colors.secondaryDark};
    color: ${(props) => props.theme.colors.secondaryDark};
  }

  &:active {
    transform: scale(0.95);
  }
`;
