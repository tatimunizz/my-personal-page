import { Window } from "@components/Window/Window";
import { useAudiusSdk } from "./hooks/useAudiusSdk";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

const TrackItem = styled.li<{ $isActive: boolean }>`
  padding: 8px;
  margin: 4px 0;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.medium : props.theme.colors.light};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

interface Track {
  title: string;
  stream: {
    url: string;
  };
}

export function MusicPlayer() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
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
    if(!currentTrack || !audioRef.current) return;

    const audio = audioRef.current;

    audio.pause();
    audio.src = currentTrack.stream.url;
    audio.currentTime = 0;

    const handleEnded = () => {
      if(tracks.length === 0) return;

      const currentIndex = tracks.findIndex( t => t.title === currentTrack.title);
      const nextIndex = (currentIndex + 1) % tracks.length;
      setCurrentTrack(tracks[nextIndex]);
      
      setTimeout(() => {
    audioRef.current?.play().catch(e => console.error(e));
  }, 50);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };

  }, [currentTrack, tracks]);

  // useEffect(() => {
  //   if (currentTrack && audioRef.current) {
  //     audioRef.current.src = currentTrack.stream.url;
  //     audioRef.current.load();
  //   }
  // }, [currentTrack]);

  const handleTrackClick = (track: Track) => {
  if (currentTrack?.title === track.title) return;
    setCurrentTrack(track);

    setTimeout(() => {
    audioRef.current?.play().catch(e => console.error(e));
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

  if (sdkError) {
    return <Window title="music player.exe">Erro: {sdkError}</Window>;
  }

  if (loading) {
    return <Window title="music player.exe"> Loading...</Window>;
  }
  return (
    <Window title="music player.exe">
      <audio ref={audioRef} controls></audio>
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
    </Window>
  );
}
