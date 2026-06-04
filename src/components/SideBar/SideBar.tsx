import { Widget } from "@components/Widget/Widget";
import { MobileButton, SideBarContent, StyledSideBar } from "./SideBar.styles";
import { PalettePicker } from "@components/PalettePicker/PalettePicker";
import { PaintCanvas } from "@components/PaintCanvas/PaintCanvas";
import { LargeIcon } from "@components/LargeIcon/LargeIcon";
import { ChevronDown } from "pixelarticons/react";

export function SideBar() {
  return (
    <StyledSideBar>
      <MobileButton>
        view widgets
        <LargeIcon><ChevronDown/></LargeIcon>
      </MobileButton>
      <SideBarContent>
        <Widget>
        <div>
          weather
        </div>
      </Widget>
      <PalettePicker/>
      <PaintCanvas/>
      </SideBarContent>
    </StyledSideBar>
  );
}