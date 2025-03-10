
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { formatTime } from './utils';

interface VoiceRecorderContextProps {
  isRecording: boolean;
  recordingTime: number;
  audioBlob: Blob | null;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  formatTime: (seconds: number) => string;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  handlePlayPause: () => void;
  handleSave: () => void;
  handleDiscard: () => void;
}

interface VoiceRecorderProviderProps {
  children: React.ReactNode;
  onSave: (audioBlob: Blob, duration: number) => void;
}

const VoiceRecorderContext = createContext<VoiceRecorderContextProps | undefined>(undefined);

export const VoiceRecorderProvider: React.FC<VoiceRecorderProviderProps> = ({ children, onSave }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        
        if (audioRef.current) {
          const audioURL = URL.createObjectURL(audioBlob);
          audioRef.current.src = audioURL;
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      let startTime = Date.now();
      timerRef.current = window.setInterval(() => {
        setRecordingTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Microphone Access Denied",
        description: "Please allow microphone access to record audio.",
        variant: "destructive"
      });
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
    setAudioBlob(null);
    setRecordingTime(0);
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

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isRecording]);

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
