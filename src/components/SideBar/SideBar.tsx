import {
  SideBarContent,
  StyledSideBar,
  MobileAccordion,
} from "./SideBar.styles";
import { PalettePicker } from "@components/PalettePicker/PalettePicker";
import { PaintCanvas } from "@components/PaintCanvas/PaintCanvas";
import { useState } from "react";
import { WeatherWidget } from "@components/WeatherWidget/WeatherWidget";
import { MusicPlayer } from "@components/MusicPlayer/MusicPlayer";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledSideBar>
      <MobileAccordion isOpen={isOpen} onToggle={toggleOpen} buttonText="view widgets" >
        <SideBarContent isOpen={isOpen}>
          <WeatherWidget />
          <PalettePicker />
          <PaintCanvas />
          <MusicPlayer />
        </SideBarContent>
      </MobileAccordion>
    </StyledSideBar>
  );
}
