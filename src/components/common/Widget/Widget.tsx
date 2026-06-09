import { StyledWidget } from "./Widget.styles";

interface WidgetProps {
  children: React.ReactNode;
}

export function Widget({children}: WidgetProps) {
  return(
    <StyledWidget>
      {children}
    </StyledWidget>
  )
}