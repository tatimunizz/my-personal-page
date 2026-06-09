import { Window } from "@components/common/Window/Window";
import { useEffect, useState } from "react";
import {
  Audio,
  PlayerContainer,
  PlayerDisplay,
  StyledMusicPlayer,
  TrackDuration,
  VolumeBar,
  VolumeBarWrapper,
  VolumeControl,
} from "./MusicPlayer.styles";
import { Icon } from "@components/common/Icon/Icon";
import {
  Music,
  Play,
} from "pixelarticons/react";
import { useTheme } from "styled-components";
import { ScrollingText } from "./components/ScrollingText";
import { IconButton } from "@components/common/IconButton/IconButton";
import { usePlaylist } from "./hooks/usePlaylist";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { formatTime, getVolumeIcon } from "./utils/audioUtils";
import { SeekBar } from "./components/SeekBar";
import { PlaylistAccordion } from "./components/PlaylistAccordion/PlaylistAccordion";

interface Track {
  title: string;
  stream: { url: string; };
}

export function MusicPlayer() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const {tracks, loading, error: playlistError} = usePlaylist('131375');
  const [currentTrack, setCurrentTrack] = useState(tracks[0] || null);
  const {audioRef, isPlaying, currentProgress, duration, volume, togglePlayPause, handleSeek, handleVolumeChange, toggleMute} = useAudioPlayer({tracks, currentTrack, onTrackChange: setCurrentTrack});

  useEffect(() => {
  if (tracks.length > 0 && !currentTrack) {
    setCurrentTrack(tracks[0]);
  }
}, [tracks, currentTrack]);

  const handleTrackClick = (track: Track) => {
    if (currentTrack?.title === track.title) return;
    setCurrentTrack(track);

    setTimeout(() => {
      audioRef.current?.play().catch((e) => console.error(e));
    }, 50);
  };

  if (playlistError) {
    return <Window title="music player.exe">Erro: {[playlistError]}</Window>;
  }

  if (loading) {
    return <Window title="music player.exe"> Loading...</Window>;
  }

  return (
    <Window title="music player.exe">
      <Audio ref={audioRef} preload="metadata"></Audio>
      <StyledMusicPlayer>
        <IconButton size={48} onClick={togglePlayPause}>
          {isPlaying ? "||" : <Play />}
        </IconButton>

        <PlayerDisplay>
          <PlayerContainer>
            <Icon size={32}>
              <Music />
            </Icon>
            <ScrollingText text={currentTrack?.title || ""} />
          </PlayerContainer>
          <PlayerContainer>
            <SeekBar currentProgress={currentProgress} onSeek={handleSeek}/>
            <TrackDuration>
              {formatTime(currentProgress)}/{formatTime(duration)}
            </TrackDuration>
          </PlayerContainer>
        </PlayerDisplay>
        <VolumeControl>
          <VolumeBarWrapper>
            <VolumeBar
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              style={{ background: `${theme.colors.secondaryDark}` }}
            />
          </VolumeBarWrapper>
          <IconButton size={48} onClick={toggleMute}>
            {getVolumeIcon(volume)}
          </IconButton>
        </VolumeControl>
      </StyledMusicPlayer>
      <PlaylistAccordion isOpen={isOpen} onToggle={toggleOpen} tracks={tracks} currentTrack={currentTrack} onTrackClick={handleTrackClick}/>
    </Window>
  );
}
