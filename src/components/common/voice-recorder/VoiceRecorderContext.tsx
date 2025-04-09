
import React, { createContext, useContext } from 'react';
import { useToast } from "@/hooks/use-toast";
import { formatTime } from './utils';
import { VoiceRecorderContextProps, VoiceRecorderProviderProps } from './types';
import { useRecorder } from './hooks/useRecorder';
import { useAudioPlayer } from './hooks/useAudioPlayer';

const VoiceRecorderContext = createContext<VoiceRecorderContextProps | undefined>(undefined);

export const VoiceRecorderProvider: React.FC<VoiceRecorderProviderProps> = ({ children, onSave }) => {
  const { toast } = useToast();
  
  const { 
    isRecording, 
    recordingTime, 
    audioBlob, 
    startRecording: startRec, 
    stopRecording, 
    reset: resetRecording,
    hasPermission,
    isRequestingPermission
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
  }, [audioBlob, setupAudioSource]);

  const startRecording = async () => {
    try {
      await startRec();
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Please make sure your microphone is connected and you've granted permission.",
        variant: "destructive"
      });
    }
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
    handleDiscard,
    hasPermission,
    isRequestingPermission
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
