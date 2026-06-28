
import { Icon } from '@components/common/Icon/Icon';
import {StyledHeader, HeaderTitle, NavBar, NavLinkStyled} from './Header.styles';
import { Folder, Image, ListBox, User } from 'pixelarticons/react';
import { useClickPosition } from '@contexts/ClickPositionContext';

export function Header() {
  const { setPosition } = useClickPosition();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <StyledHeader>
      <HeaderTitle to="/" onClick={handleNavClick}>
        <span>tatiana muniz</span>
        <p>personal computer</p>
      </HeaderTitle>
      <NavBar>
        <ul>
          <li><NavLinkStyled to ="/about-me" onClick={handleNavClick}>
            <Icon><User/></Icon>
            about me
          </NavLinkStyled></li>
          <li><NavLinkStyled to ="/images" onClick={handleNavClick}>
            <Icon><Image/></Icon>
            images
          </NavLinkStyled></li>
          <li><NavLinkStyled to ="/my-lists" onClick={handleNavClick}>
            <Icon><ListBox/></Icon>
            my lists
          </NavLinkStyled></li>
          <li><NavLinkStyled to ="/projects" onClick={handleNavClick}>
            <Icon><Folder/></Icon>
            projects
          </NavLinkStyled></li>
        </ul>
      </NavBar>
    </StyledHeader>
  );
}