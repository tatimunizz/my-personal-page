import { Window } from "@components/common/Window/Window";
import { useAudiusSdk } from "./hooks/useAudiusSdk";
import { useEffect, useRef, useState } from "react";
import {
  Audio,
  PlayerContainer,
  PlayerDisplay,
  Playlist,
  PlaylistAccordion,
  PlaylistButton,
  SeekBar,
  StyledMusicPlayer,
  Toggle,
  TrackDuration,
  TrackItem,
  TrackList,
  VolumeBar,
  VolumeBarWrapper,
  VolumeControl,
} from "./MusicPlayer.styles";
import { Icon } from "@components/common/Icon/Icon";
import {
  ChevronDown,
  Music,
  Play,
  Volume,
  Volume1,
  Volume2,
  Volume3,
} from "pixelarticons/react";
import { useTheme } from "styled-components";
import { ScrollingText } from "./components/ScrollingText";
import { IconButton } from "@components/common/IconButton/IconButton";


const getVolumeIcon = (vol: number) => {
  if(vol == 0) return <Volume />;
  if(vol <= 0.33) return <Volume1 />;
  if(vol <= 0.66) return <Volume2 />;
  return <Volume3 />;
};

const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

interface Track {
  title: string;
  stream: {
    url: string;
  };
}

export function MusicPlayer() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  
  const [loading, setLoading] = useState(true);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
    
  const audioRef = useRef<HTMLAudioElement>(null);

  const { sdk, error: sdkError } = useAudiusSdk(
    "0xf833c129835d1fea300c615f06dcaab52a96875a",
  );

  useEffect(() => {
    async function fetchPlaylist() {
      if (!sdk) return;

      try {
        setLoading(true);

        const playlist = await sdk.playlists.getPlaylist({
          playlistId: "131375",
        });

        const tracks = playlist.data[0].tracks;
        //.stream.url

        const tracksData = tracks.map((track: Track) => {
          return {
            title: track.title,
            stream: {
              url: track.stream.url,
            },
          };
        });
        setTracks(tracksData);

        if (tracksData.length > 0) {
          setCurrentTrack(tracksData[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylist();
  }, [sdk]);

  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;
    const audio = audioRef.current;
    setDuration(0);

    //reset
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      setCurrentProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleVolumeChange = () => setVolume(audio.volume);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('volumechange', handleVolumeChange);

    //config new track
    audio.pause();
    audio.src = currentTrack.stream.url;
    audio.currentTime = 0;

    const handleEnded = () => {
      if (tracks.length === 0) return;

      const currentIndex = tracks.findIndex(
        (t) => t.title === currentTrack.title,
      );
      const nextIndex = (currentIndex + 1) % tracks.length;
      setCurrentTrack(tracks[nextIndex]);

      setTimeout(() => {
        audioRef.current?.play().catch((e) => console.error(e));
      }, 100);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [currentTrack, tracks]);

  const handleTrackClick = (track: Track) => {
    if (currentTrack?.title === track.title) return;
    setCurrentTrack(track);

    setTimeout(() => {
      audioRef.current?.play().catch((e) => console.error(e));
    }, 50);

    // if (audioRef.current) {
    //   audioRef.current.pause();
    //   audioRef.current.src = track.stream.url;
    //   audioRef.current.currentTime = 0;

    //   const playAfterLoad = () => {
    //     audioRef.current?.play().catch((error) => console.error(error));
    //     audioRef.current?.removeEventListener("loadedmetadata", playAfterLoad);
    //   };
    //   audioRef.current.addEventListener("loadedmetadata", playAfterLoad);
    //   audioRef.current.load();
    // }
  };

  const togglePlayPause = () => {
  if (isPlaying) audioRef.current?.pause();
  else audioRef.current?.play().catch(e => console.error(e));
};

const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
  const percent = parseFloat(e.target.value);
  setCurrentProgress(percent);
  if (audioRef.current && duration) {
    audioRef.current.currentTime = (percent / 100) * duration;
  }
};

const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const vol = parseFloat(e.target.value);
  setVolume(vol);
  if (audioRef.current) audioRef.current.volume = vol;
};

const toggleMute = () => {
  if (audioRef.current) {
    if (audioRef.current.volume === 0) {
      audioRef.current.volume = volume === 0 ? 0.7 : volume;
    } else {
      audioRef.current.volume = 0;
    }
  }
};
  if (sdkError) {
    return <Window title="music player.exe">Erro: {sdkError}</Window>;
  }

  if (loading) {
    return <Window title="music player.exe"> Loading...</Window>;
  }
  return (
    <Window title="music player.exe">
      <Audio ref={audioRef}></Audio>
      <StyledMusicPlayer>
        <IconButton size={48} onClick={togglePlayPause}>
            {isPlaying ? '||' : <Play/> }
        </IconButton>

        <PlayerDisplay>
          <PlayerContainer>
            <Icon size={32}><Music /></Icon>
            <ScrollingText text={currentTrack?.title || ''} />
          </PlayerContainer>
          <PlayerContainer>
          <SeekBar
            value={currentProgress}
            onChange={handleSeek}  
            style={{
                background: `linear-gradient(
                  to right,
                  ${theme.colors.secondaryDark} 0%,
                  ${theme.colors.secondaryDark} ${currentProgress}%,
                  ${theme.colors.medium} ${currentProgress}%,
                  ${theme.colors.medium} 100%
                )`
            }}
          />
          <TrackDuration>
            {formatTime(currentProgress)}/{formatTime(duration)}</TrackDuration>
          </PlayerContainer>
        </PlayerDisplay>

        <VolumeControl>
          <VolumeBarWrapper>
            <VolumeBar
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              style={{background: `${theme.colors.secondaryDark}`}}
            />
          </VolumeBarWrapper>
          <IconButton size={48} onClick={toggleMute}>
            {getVolumeIcon(volume)}
          </IconButton>
        </VolumeControl>
      </StyledMusicPlayer>

      <PlaylistAccordion $isOpen={isOpen}>
        <PlaylistButton onClick={toggleOpen} $isOpen={isOpen}>
          playlist
          <Toggle $isOpen={isOpen}>
            <Icon>
              <ChevronDown />
            </Icon>
          </Toggle>
        </PlaylistButton>
        <Playlist $isOpen={isOpen}>
          <TrackList>
          {tracks.map((track, index) => (
            <TrackItem
              key={index}
              $isActive={currentTrack?.title === track.title}
              onClick={() => handleTrackClick(track)}
            >
              {track.title}
            </TrackItem>
          ))}
        </TrackList>
        </Playlist>
      </PlaylistAccordion>
    </Window>
  );
}
