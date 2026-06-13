import { TitleBar, StyledWindow, ContentBox } from "./Window.styles";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Window({title, children, className }: WindowProps) {
  return(
    <StyledWindow className={className}>
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