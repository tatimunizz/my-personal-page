import styled from "styled-components";

export const Playlist = styled.div<{$isOpen: boolean}>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
`

export const TrackList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

export const TrackItem = styled.li<{ $isActive: boolean }>`
  padding: 8px;
  margin: 4px 0;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.medium : props.theme.colors.light};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;