import { useState, useEffect } from 'react';
import { useAudiusSdk } from './useAudiusSdk';

interface Track {
  title: string;
  stream: { url: string };
}

export function usePlaylist(playlistId: string) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { sdk, error: sdkError } = useAudiusSdk(
    '0xf833c129835d1fea300c615f06dcaab52a96875a'
  );

  useEffect(() => {
    async function fetchPlaylist() {
      if (!sdk) return;
      try {
        setLoading(true);
        const playlist = await sdk.playlists.getPlaylist({ playlistId });
        const rawTracks = playlist.data[0].tracks;
        const tracksData = rawTracks.map((track: Track) => ({
          title: track.title,
          stream: { url: track.stream.url },
        }));
        setTracks(tracksData);
      } catch (err) {
        console.error(err);
        setError('Failed to load playlist');
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylist();
  }, [sdk, playlistId]);

  return { tracks, loading, error: error || sdkError };
}