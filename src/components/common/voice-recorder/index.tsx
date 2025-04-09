
import React from 'react';
import { cn } from '@/lib/utils';
import { VoiceRecorderProvider, useVoiceRecorder } from './VoiceRecorderContext';
import RecordingTimer from './RecordingTimer';
import AudioPreview from './AudioPreview';
import RecordingControls from './RecordingControls';
import { Mic, MicOff, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
    handleDiscard,
    hasPermission,
    isRequestingPermission
  } = useVoiceRecorder();

  return (
    <>
      <audio ref={audioRef} className="hidden" />
      
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 flex justify-center">
          {isRecording ? (
            <div className="animate-pulse">
              <RecordingTimer recordingTime={recordingTime} />
            </div>
          ) : audioBlob ? (
            <AudioPreview 
              recordingTime={recordingTime}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              formatTime={formatTime}
            />
          ) : (
            <div className="text-center text-muted-foreground text-sm flex flex-col items-center gap-2 py-2">
              {hasPermission === false ? (
                <Alert variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20 p-2">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-xs ml-2">
                    Microphone access is required
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  <div className="rounded-full bg-muted/30 p-3 mb-1">
                    <Mic className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">Tap the microphone to start recording</span>
                </>
              )}
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
          hasPermission={hasPermission}
          isRequestingPermission={isRequestingPermission}
        />
      </div>
    </>
  );
};

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onSave, className }) => {
  return (
    <div className={cn('rounded-lg bg-card border border-border p-4 backdrop-blur-sm', className)}>
      <VoiceRecorderProvider onSave={onSave}>
        <VoiceRecorderContent />
      </VoiceRecorderProvider>
    </div>
  );
};

export default VoiceRecorder;
