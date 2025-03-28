import React, { createContext, useContext } from 'react';
import { toast } from "@/hooks/use-toast";
import { formatTime } from './utils';
import { VoiceRecorderContextProps, VoiceRecorderProviderProps } from './types';
import { useRecorder } from './hooks/useRecorder';
import { useAudioPlayer } from './hooks/useAudioPlayer';

const VoiceRecorderContext = createContext<VoiceRecorderContextProps | undefined>(undefined);

export const VoiceRecorderProvider: React.FC<VoiceRecorderProviderProps> = ({ children, onSave }) => {
  const { 
    isRecording, 
    recordingTime, 
    audioBlob, 
    startRecording: startRec, 
    stopRecording, 
    reset: resetRecording 
  } = useRecorder();
  
  const { 
    isPlaying, 
    audioRef, 
    handlePlayPause, 
    setupAudioSource,
    resetPlayer 
  } = useAudioPlayer();

  // Connect the recorder and player
  React.useEffect(() => {
    if (audioBlob) {
      setupAudioSource(audioBlob);
    }
  }, [audioBlob]);

  const startRecording = async () => {
    await startRec();
  };

  const handleSave = () => {
    if (audioBlob) {
      onSave(audioBlob, recordingTime);
      toast({
        title: "Recording Saved",
        description: `Voice recording (${formatTime(recordingTime)}) has been saved successfully.`
      });
      resetRecorder();
    }
  };

  const handleDiscard = () => {
    resetRecorder();
    toast({
      title: "Recording Discarded",
      description: "Voice recording has been discarded."
    });
  };

  const resetRecorder = () => {
    resetRecording();
    resetPlayer();
  };

  const value = {
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
  };

  return (
    <VoiceRecorderContext.Provider value={value}>
      {children}
    </VoiceRecorderContext.Provider>
  );
};

export const useVoiceRecorder = () => {
  const context = useContext(VoiceRecorderContext);
  if (context === undefined) {
    throw new Error('useVoiceRecorder must be used within a VoiceRecorderProvider');
  }
  return context;
};
