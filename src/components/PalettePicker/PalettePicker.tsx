import { Window } from "@components/common/Window/Window";
import { Selector, StyledPalettePicker } from "./PalettePicker.styles";
import { ChevronLeft, ChevronRight } from "pixelarticons/react";
import { useTheme } from "@/providers/ThemeProvider";
import { LargeIcon } from "@components/common/LargeIcon/LargeIcon";
import { ColorPalette } from "@components/common/ColorPalette/ColorPalette";

export function PalettePicker() {
  const {theme, nextTheme, prevTheme} = useTheme();
  const colors = Object.values(theme.colors);

  return(
    <Window title="palette.exe">
      <StyledPalettePicker>
        Palette picker
        <Selector>
          <LargeIcon onClick={prevTheme} style={{cursor:'pointer'}}><ChevronLeft/></LargeIcon>
          <ColorPalette size={5} shadow={true} colors={colors}/>
          <LargeIcon onClick={nextTheme} style={{cursor:'pointer'}}><ChevronRight/></LargeIcon>
        </Selector>
      </StyledPalettePicker>
    </Window>
  );
}