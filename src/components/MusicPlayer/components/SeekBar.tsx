import styled from "styled-components";
import { useTheme } from "styled-components";

const StyledSeekBar = styled.input.attrs({ type: "range" })`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.medium}
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.colors.dark};
    cursor: pointer;
    border: none;
    border-radius: 0px;
  }

  /* Firefox */
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.colors.dark};
    cursor: pointer;
    border: none;
    border-radius: 0px;
  }
`;

interface SeekBarProps {
  currentProgress: number;
  onSeek: (percent: number) => void;
}

export function SeekBar({ currentProgress, onSeek }: SeekBarProps) {
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const percent = parseFloat(e.target.value);
    onSeek(percent);
  };

  return (
    <StyledSeekBar
      value={currentProgress}
      onChange={handleChange}
      style={{
        background: `linear-gradient(
                      to right,
                      ${theme.colors.secondaryDark} 0%,
                      ${theme.colors.secondaryDark} ${currentProgress}%,
                      ${theme.colors.medium} ${currentProgress}%,
                      ${theme.colors.medium} 100%
                    )`,
      }}
    />
  );
}
