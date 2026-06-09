import { Window } from "@components/common/Window/Window";
import { Selector, StyledPalettePicker } from "./PalettePicker.styles";
import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { useTheme } from "@/providers/ThemeProvider";
import { ColorPalette } from "@components/common/ColorPalette/ColorPalette";
import { IconButton } from "@components/common/IconButton/IconButton";

export function PalettePicker() {
  const {theme, nextTheme, prevTheme} = useTheme();
  const colors = Object.values(theme.colors);

  return(
    <Window title="palette.exe">
      <StyledPalettePicker>
        Palette picker
        <Selector>
          <IconButton size={32} onClick={prevTheme} ><ChevronLeft/></IconButton>
          <ColorPalette size={5} shadow={true} colors={colors}/>
          <IconButton size={32} onClick={nextTheme} ><ChevronRight/></IconButton>
        </Selector>
      </StyledPalettePicker>
    </Window>
  );
}