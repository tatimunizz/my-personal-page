import styled from "styled-components";

const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
`
const Swatch = styled.div<{color: string}>`
  aspect-ratio: 1 / 1;
  background-color: ${props => props.color};
`

interface ColorPaletteProp {
  colors: string[];
  onSelectColor: (color: string) => void;
}

export function ColorPalette({colors, onSelectColor}: ColorPaletteProp) {
  return(
    <Palette>
      {colors.map((color, index) =>
        <Swatch key={index} color={color} 
          onClick={() => onSelectColor(color)}>
        </Swatch>
      )}
    </Palette>
  )
}