
import React from 'react';

interface RecordingTimerProps {
  recordingTime: number;
}

const RecordingTimer: React.FC<RecordingTimerProps> = ({ recordingTime }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="animate-pulse flex items-center">
      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
      <p className="text-sm">{formatTime(recordingTime)}</p>
    </div>
  );
};

export default RecordingTimer;
