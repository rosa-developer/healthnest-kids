
import { useState, useRef, useEffect } from 'react';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const setupAudioSource = (audioBlob: Blob) => {
    if (audioRef.current) {
      const audioURL = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioURL;
    }
  };

  const resetPlayer = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.src = '';
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };
    
    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }
    
    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, []);

  return {
    isPlaying,
    audioRef,
    handlePlayPause,
    setupAudioSource,
    resetPlayer
  };
}
