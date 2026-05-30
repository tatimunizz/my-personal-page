import styled from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
  children?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.$primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$primary ? '#fff' : props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Button({ $primary, children }: ButtonProps) {
  return <StyledButton $primary={$primary}>{children}</StyledButton>;
}