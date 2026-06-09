import { TitleBar, StyledWindow, ContentBox } from "./Window.styles";

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export function Window({title, children}: WindowProps) {
  return(
    <StyledWindow>
      <TitleBar>
        {title}
        <span>_ x</span>
      </TitleBar>
      <ContentBox>
        {children}
      </ContentBox>
    </StyledWindow>

  );
}