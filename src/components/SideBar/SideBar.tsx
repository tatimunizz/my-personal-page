import { Widget } from "@components/Widget/Widget";
import { MobileButton, SideBarContent, StyledSideBar, Toggle, MobileAccordion } from "./SideBar.styles";
import { PalettePicker } from "@components/PalettePicker/PalettePicker";
import { PaintCanvas } from "@components/PaintCanvas/PaintCanvas";
import { LargeIcon } from "@components/LargeIcon/LargeIcon";
import { ChevronDown } from "pixelarticons/react";
import { useState } from "react";

export function SideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledSideBar>
      <MobileAccordion $isOpen={isOpen}>
        <MobileButton onClick={toggleOpen} $isOpen={isOpen}>
        view widgets
        <Toggle $isOpen={isOpen}>
          <LargeIcon><ChevronDown/></LargeIcon>
        </Toggle>
      </MobileButton>
      <SideBarContent $isOpen={isOpen}>
        <Widget>
        <div>
          weather
        </div>
      </Widget>
      <PalettePicker/>
      <PaintCanvas/>
      </SideBarContent>
      </MobileAccordion>
    </StyledSideBar>
  );
}