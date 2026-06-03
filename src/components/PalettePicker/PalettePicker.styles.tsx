import styled from "styled-components";

export const StyledPalettePicker = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

export const Selector = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`

const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  box-shadow: 1px 1px 0px ${props => props.theme.colors.dark};
`
const Swatch = styled.div<{color: string}>`
  aspect-ratio: 1 / 1;
  background-color: ${props => props.color};
`

interface ColorPaletteProp {
  colors: string[];
}

export function ColorPalette({colors}: ColorPaletteProp) {
  return(
    <Palette>
      {colors.map((color, index) =>
        <Swatch key={index} color={color}>
         
        </Swatch>
      )}
    </Palette>
  )
}