import {
  Volume,
  Volume1,
  Volume2,
  Volume3,
} from "pixelarticons/react";

export const getVolumeIcon = (vol: number) => {
  if (vol == 0) return <Volume />;
  if (vol <= 0.33) return <Volume1 />;
  if (vol <= 0.66) return <Volume2 />;
  return <Volume3 />;
};

export const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};