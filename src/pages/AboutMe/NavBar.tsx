import { Icon } from "@components/common/Icon/Icon";
import { File } from "pixelarticons/react";
import styled from "styled-components";

const ListItem = styled.a`
  display: flex;
  gap: 8px;
  padding-left: 8px;

  &:hover {
    background-color: ${props =>  props.theme.colors.secondaryLight};
    trasition: transform 0.2s ease;
  }
`

export function NavBar() {
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li><ListItem  href="#1" onClick={handleScroll('1')}><Icon size={12}><File/></Icon> Who am I?</ListItem></li>
        <li><ListItem  href="#1" onClick={handleScroll('2')}><Icon size={12}><File/></Icon> Professional</ListItem></li>
        <li><ListItem  href="#1" onClick={handleScroll('3')}><Icon size={12}><File/></Icon> My Story</ListItem></li>
        <li><ListItem  href="#1" onClick={handleScroll('4')}><Icon size={12}><File/></Icon> My hobbies</ListItem></li>
        <li><ListItem  href="#1" onClick={handleScroll('5')}><Icon size={12}><File/></Icon> Travels</ListItem></li>
      </ul>
    </nav>
  );
}