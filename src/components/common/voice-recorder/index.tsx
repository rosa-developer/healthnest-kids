
import React from 'react';
import { cn } from '@/lib/utils';
import { VoiceRecorderProvider, useVoiceRecorder } from './VoiceRecorderContext';
import RecordingTimer from './RecordingTimer';
import AudioPreview from './AudioPreview';
import RecordingControls from './RecordingControls';

interface VoiceRecorderProps {
  onSave: (audioBlob: Blob, duration: number) => void;
  className?: string;
}

const VoiceRecorderContent: React.FC = () => {
  const {
    isRecording,
    recordingTime,
    audioBlob,
    isPlaying,
    audioRef,
    formatTime,
    startRecording,
    stopRecording,
    handlePlayPause,
    handleSave,
    handleDiscard
  } = useVoiceRecorder();

  return (
    <>
      <audio ref={audioRef} className="hidden" />
      
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 flex justify-center">
          {isRecording ? (
            <RecordingTimer recordingTime={recordingTime} />
          ) : audioBlob ? (
            <AudioPreview 
              recordingTime={recordingTime}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              formatTime={formatTime}
            />
          ) : (
            <div className="text-center text-muted-foreground text-sm">
              Tap the microphone to start recording
            </div>
          )}
        </div>
        
        <RecordingControls 
          isRecording={isRecording}
          audioBlob={audioBlob}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          onSave={handleSave}
          onDiscard={handleDiscard}
        />
      </div>
    </>
  );
};

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onSave, className }) => {
  return (
    <div className={cn('rounded-lg bg-card border border-border p-4', className)}>
      <VoiceRecorderProvider onSave={onSave}>
        <VoiceRecorderContent />
      </VoiceRecorderProvider>
    </div>
  );
};

export default VoiceRecorder;
