import { useRef, useState, useEffect, useCallback } from 'react';

interface Track {
  title: string;
  stream: { url: string };
}

interface UseAudioPlayerProps {
  tracks: Track[];
  currentTrack: Track | null;
  onTrackChange: (track: Track) => void;
}

export function useAudioPlayer({ tracks, currentTrack, onTrackChange }: UseAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  // Reset duration when track changes
  useEffect(() => {
    setDuration(0);
  }, [currentTrack]);

  // Load new track when currentTrack changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.pause();
    setIsPlaying(false);
    audio.src = currentTrack.stream.url;
    audio.load();
    audio.currentTime = 0;
    setCurrentProgress(0);
  }, [currentTrack]);

  // Set up event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      setCurrentProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleVolumeChange = () => setVolume(audio.volume);
    const handleEnded = () => {
      if (!currentTrack || tracks.length === 0) return;
      const currentIndex = tracks.findIndex((t) => t.title === currentTrack.title);
      const nextIndex = (currentIndex + 1) % tracks.length;
      const nextTrack = tracks[nextIndex];
      if (nextTrack) {
        onTrackChange(nextTrack);
        // Auto-play next track
        setTimeout(() => audioRef.current?.play().catch((e) => console.error(e)), 100);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('volumechange', handleVolumeChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('volumechange', handleVolumeChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, tracks, onTrackChange]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play().catch((e) => console.error(e));
  }, [isPlaying]);

  const handleSeek = useCallback((percent: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = (percent / 100) * duration;
    setCurrentProgress(percent);
  }, [duration]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = newVolume;
    setVolume(newVolume);
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.volume === 0) {
      const prevVol = volume === 0 ? 0.7 : volume;
      audio.volume = prevVol;
      setVolume(prevVol);
    } else {
      audio.volume = 0;
      setVolume(0);
    }
  }, [volume]);

  return {
    audioRef,
    isPlaying,
    currentProgress,
    duration,
    volume,
    togglePlayPause,
    handleSeek,
    handleVolumeChange,
    toggleMute,
  };
}