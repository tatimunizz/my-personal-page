import { MobileButton, SideBarContent, StyledSideBar, Toggle, MobileAccordion } from "./SideBar.styles";
import { PalettePicker } from "@components/PalettePicker/PalettePicker";
import { PaintCanvas } from "@components/PaintCanvas/PaintCanvas";
import { Icon } from "@components/common/Icon/Icon";
import { ChevronDown } from "pixelarticons/react";
import { useState } from "react";
import { WeatherWidget } from "@components/WeatherWidget/WeatherWidget";
import { MusicPlayer } from "@components/MusicPlayer/MusicPlayer";

export function SideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledSideBar>
      <MobileAccordion $isOpen={isOpen}>
        <MobileButton onClick={toggleOpen} $isOpen={isOpen}>
        view widgets
        <Toggle $isOpen={isOpen}>
          <Icon><ChevronDown/></Icon>
        </Toggle>
      </MobileButton>
      <SideBarContent $isOpen={isOpen}>
        <WeatherWidget/>
      <PalettePicker/>
      <PaintCanvas/>
      <MusicPlayer/>
      </SideBarContent>
      </MobileAccordion>
    </StyledSideBar>
  );
}