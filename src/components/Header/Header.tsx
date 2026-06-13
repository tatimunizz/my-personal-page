
import { Icon } from '@components/common/Icon/Icon';
import {StyledHeader, HeaderTitle, NavBar} from './Header.styles';
import { Folder, Image, ListBox, User } from 'pixelarticons/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <StyledHeader>
      <HeaderTitle to="/">
        <span>tatiana muniz</span>
        <p>personal computer</p>
      </HeaderTitle>
      <NavBar>
        <ul>
          <li><Link to ="/about-me">
            <Icon><User/></Icon>
            about me
          </Link></li>
          <li><a href="#">
            <Icon><Image/></Icon>
            images
          </a></li>
          <li><a href="#">
            <Icon><ListBox/></Icon>
            my lists
          </a></li>
          <li><a href="#">
            <Icon><Folder/></Icon>
            projects
          </a></li>
        </ul>
      </NavBar>
    </StyledHeader>
  );
}