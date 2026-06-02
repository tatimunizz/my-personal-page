import styled from 'styled-components';
import { useTheme } from '@/providers/ThemeProvider';

const ToggleButton = styled.button`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  border: none;
  padding: ${props => props.theme.spacing.small};
  border-radius: 4px;
  cursor: pointer;
`;

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      Switch Color Mode
    </ToggleButton>
  );
}