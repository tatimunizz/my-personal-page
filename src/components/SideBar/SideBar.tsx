import { Widget } from "@components/Widget/Widget";
import { StyledSideBar } from "./SideBar.styles";
import { PalettePicker } from "@components/PalettePicker/PalettePicker";

export function SideBar() {
  return (
    <StyledSideBar>
      <Widget>
        <div>
          weather
        </div>
      </Widget>
      <PalettePicker/>
    </StyledSideBar>
  );
}