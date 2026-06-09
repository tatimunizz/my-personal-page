import styled from "styled-components";

interface PaletteProps {
  shadow?: boolean;
  size: number;
  pointer?: boolean;
}

export const Palette = styled.div<PaletteProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  width: 100%;
  cursor: ${props => props.pointer ? 'pointer' : 'auto'};
  box-shadow: ${props => props.shadow ? '1px 1px 0px' + props.theme.colors.dark : 'none' };
`

export const Swatch = styled.div<{color: string}>`
  aspect-ratio: 1 / 1;
  background-color: ${props => props.color};
`