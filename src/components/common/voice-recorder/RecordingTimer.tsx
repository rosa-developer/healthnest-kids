
import React from 'react';
import { formatTime } from './utils';

interface RecordingTimerProps {
  recordingTime: number;
}

const RecordingTimer: React.FC<RecordingTimerProps> = ({ recordingTime }) => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
      <p className="text-sm">{formatTime(recordingTime)}</p>
    </div>
  );
};

export default RecordingTimer;
