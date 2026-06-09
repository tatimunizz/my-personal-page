import { Palette, Swatch } from "./ColorPalette.styles";

interface ColorPaletteProp {
  shadow?: boolean;
  size: number;
  pointer?: boolean;
  colors: string[];
  onSelectColor?: (color: string) => void;
}

export function ColorPalette({shadow, size, pointer, colors, onSelectColor}: ColorPaletteProp) {
  return(
    <Palette size={size} shadow={shadow} pointer={pointer}>
      {colors.map((color, index) =>
        <Swatch key={index} color={color}
          onClick={onSelectColor ? () => onSelectColor(color) : undefined}>
         
        </Swatch>
      )}
    </Palette>
  )
}