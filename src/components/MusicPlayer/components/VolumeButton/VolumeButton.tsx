import { IconButton } from "@components/common/IconButton/IconButton";
import { VolumeBar, VolumeBarWrapper, VolumeControl } from "./VolumeButton.styles";
import { getVolumeIcon } from "../../utils/audioUtils";

interface VolumeButtonProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  onClick: () => void;
}

export function VolumeButton({volume, onVolumeChange, onClick}: VolumeButtonProps) {
  return(
    <VolumeControl>
              <VolumeBarWrapper>
                <VolumeBar
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                />
              </VolumeBarWrapper>
              <IconButton size={48} onClick={onClick}>
                {getVolumeIcon(volume)}
              </IconButton>
            </VolumeControl>
  )
}