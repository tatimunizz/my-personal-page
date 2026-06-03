import { Window } from "@components/Window/Window";
import { ColorPalette, Selector, StyledPalettePicker } from "./PalettePicker.styles";
import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { useTheme } from "@/providers/ThemeProvider";
import { LargeIcon } from "@components/LargeIcon/LargeIcon";

export function PalettePicker() {
  const {theme, nextTheme, prevTheme} = useTheme();
  const colors = Object.values(theme.colors);

  return(
    <Window title="palette.exe">
      <StyledPalettePicker>
        Palette picker
        <Selector>
          <LargeIcon onClick={prevTheme} style={{cursor:'pointer'}}><ChevronLeft/></LargeIcon>
          <ColorPalette colors={colors}/>
          <LargeIcon onClick={nextTheme} style={{cursor:'pointer'}}><ChevronRight/></LargeIcon>
        </Selector>
      </StyledPalettePicker>
    </Window>
  );
}