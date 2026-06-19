import { Icon } from "@components/common/Icon/Icon";
import { File } from "pixelarticons/react";
import styled from "styled-components";

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r}, ${g}, ${b}`;
};

const ListItem = styled.a<{ $active: boolean }>`
  display: flex;
  gap: 8px;
  padding: 8px;
  // background-color: rgba(${props => hexToRgb(props.theme.colors.medium)}, 0.1);
  background-color: ${({ theme, $active }) =>
    $active
      ? theme.colors.secondaryLight
      : `rgba(${hexToRgb(theme.colors.medium)}, 0.1)`
  };
  cursor: pointer;

  &:hover {
    background-color: ${props =>  props.theme.colors.secondaryLight};
    trasition: transform 0.2s ease;
  }

`
const List = styled.ul`
  display: flex;
  // justify-content: space-around;
  gap: 8px;
  
  flex-wrap: wrap;
`

interface NavBarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const sections = [
  { id: '1', label: 'About me' },
  { id: '2', label: 'Professional' },
  { id: '3', label: 'My Story' },
  { id: '4', label: 'My hobbies' },
  { id: '5', label: 'Travels' },
];

export function NavBar({activeId, onSelect}: NavBarProps) {
  // const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <nav>
      <List>
        {
          sections.map(({ id, label }) => (
            <li key={id}>
              <ListItem
                $active={activeId === id}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(id);
                }}>
                  <Icon size={12}><File/></Icon>
                  {label}
                </ListItem>
            </li>
          ))
        }
      </List>
    </nav>
  );
}