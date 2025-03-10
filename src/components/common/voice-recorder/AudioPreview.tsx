
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause } from 'lucide-react';

interface AudioPreviewProps {
  recordingTime: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  formatTime: (seconds: number) => string;
}

const AudioPreview: React.FC<AudioPreviewProps> = ({
  recordingTime,
  isPlaying,
  onPlayPause,
  formatTime
}) => {
  return (
    <div className="w-full px-4">
      <div className="bg-healthnest-soft-blue h-12 rounded-lg w-full flex items-center justify-between px-4">
        <Button variant="ghost" size="icon" onClick={onPlayPause}>
          {isPlaying ? (
            <Pause className="h-5 w-5 text-healthnest-primary" />
          ) : (
            <Play className="h-5 w-5 text-healthnest-primary" />
          )}
        </Button>
        <span className="text-sm text-healthnest-primary">{formatTime(recordingTime)}</span>
      </div>
    </div>
  );
};

export default AudioPreview;
