
import { LargeIcon } from '@components/LargeIcon';
import {StyledHeader, HeaderTitle, NavBar} from './Header.styles';
import { Folder, Image, ListBox, User } from 'pixelarticons/react';

export function Header() {
  return (
    <StyledHeader>
      <HeaderTitle>
        <h1>tatiana muniz</h1>
        <p>personal computer</p>
      </HeaderTitle>
      <NavBar>
        <ul>
          <li><a href="#">
            <LargeIcon><User/></LargeIcon>
            about me
          </a></li>
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