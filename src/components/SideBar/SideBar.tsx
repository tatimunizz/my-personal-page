import { Widget } from "@components/Widget/Widget";
import { StyledSideBar } from "./SideBar.styles";
import { Window } from "@components/Window/Window";

export function SideBar() {
  return (
    <StyledSideBar>
      <Widget>
        <div>
          weather
        </div>
      </Widget>
      <Window title="palette.exe">
        <div>children</div>
      </Window>
      <Window title="paint.exe">
        <div>paint</div>
      </Window>
    </StyledSideBar>
  );
}