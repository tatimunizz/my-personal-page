import { Accordion } from "@components/common/Accordion/Accordion";
import { Playlist, TrackItem, TrackList } from "./PlaylistAccodrion.styles";

interface Track {
  title: string;
  stream: { url: string; };
}

interface PlaylistAccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  tracks: Track[];
  currentTrack: Track | null;
  onTrackClick: (track: Track) => void;
}

export function PlaylistAccordion({
  isOpen,
  onToggle,
  tracks,
  currentTrack,
  onTrackClick,
}: PlaylistAccordionProps) {

  return (
    <Accordion isOpen={isOpen} onToggle={onToggle} buttonText="playlist">
      <Playlist $isOpen={isOpen}>
        <TrackList>
          {tracks.map((track, index) => (
            <TrackItem
              key={index}
              $isActive={currentTrack?.title === track.title}
              onClick={() => onTrackClick(track)}
            >
              {track.title}
            </TrackItem>
          ))}
        </TrackList>
      </Playlist>
    </Accordion>
  );
}
