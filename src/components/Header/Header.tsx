
import { LargeIcon } from '@components/LargeIcon/LargeIcon';
import {StyledHeader, HeaderTitle, NavBar} from './Header.styles';
import { Folder, Image, ListBox, User } from 'pixelarticons/react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <StyledHeader>
      <HeaderTitle to="/">
        <h1>tatiana muniz</h1>
        <p>personal computer</p>
      </HeaderTitle>
      <NavBar>
        <ul>
          <li><Link to ="/about-me">
            <LargeIcon><User/></LargeIcon>
            about me
          </Link></li>
          <li><a href="#">
            <LargeIcon><Image/></LargeIcon>
            images
          </a></li>
          <li><a href="#">
            <LargeIcon><ListBox/></LargeIcon>
            my lists
          </a></li>
          <li><a href="#">
            <LargeIcon><Folder/></LargeIcon>
            projects
          </a></li>
        </ul>
      </NavBar>
    </StyledHeader>
  );
}