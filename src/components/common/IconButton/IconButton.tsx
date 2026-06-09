import { Icon } from "../Icon/Icon";
import { StyledIconButton } from "./IconButton.styles";

interface IconButtonProps {
  size?: number;
  children: React.ReactNode;
  onClick: () => void;
}

export function IconButton({size, children, onClick}: IconButtonProps) {
  return(
    <StyledIconButton onClick={onClick}>
    <Icon size={size}>
     {children}
    </Icon>
  </StyledIconButton>
  )
}