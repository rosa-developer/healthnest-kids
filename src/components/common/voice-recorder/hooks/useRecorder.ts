import { useState, useEffect, useRef } from 'react';
import { useToast } from '../../../../hooks/use-toast';

export interface RecorderState {
  isRecording: boolean;
  recordingTime: number;
  audioBlob: Blob | null;
  hasPermission: boolean;
  isRequestingPermission: boolean;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  reset: () => void;
}

export const useRecorder = (): RecorderState => {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isRequestingPermission, setIsRequestingPermission] = useState<boolean>(false);
  
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const timerInterval = useRef<number | null>(null);

  const reset = () => {
    setAudioBlob(null);
    setRecordingTime(0);
    audioChunks.current = [];
  };

  const startRecording = async (): Promise<void> => {
    try {
      setIsRequestingPermission(true);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      setIsRequestingPermission(false);
      
      mediaRecorder.current = new MediaRecorder(stream);
      
      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };
      
      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        setIsRecording(false);
      };
      
      audioChunks.current = [];
      mediaRecorder.current.start();
      setIsRecording(true);
      
      // Start recording timer
      timerInterval.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
      setIsRequestingPermission(false);
      setHasPermission(false);
      
      toast({
        title: "Recording Error",
        description: "Could not access microphone. Please check your browser permissions.",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      
      // Stop the timer
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
        timerInterval.current = null;
      }
      
      // Stop all tracks in the stream
      if (mediaRecorder.current.stream) {
        mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
      }
    }
  };

  // Check initial permission state
  useEffect(() => {
    const checkPermissions = async () => {
      try {
        // Check if we already have permission by trying to access the microphone
        await navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            setHasPermission(true);
            // Don't keep the stream open, just check if we have permission
            stream.getTracks().forEach(track => track.stop());
          })
          .catch(() => {
            setHasPermission(false);
          });
      } catch (error) {
        setHasPermission(false);
      }
    };
    
    checkPermissions();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
      
      if (mediaRecorder.current && mediaRecorder.current.stream) {
        mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return {
    isRecording,
    recordingTime,
    audioBlob,
    hasPermission,
    isRequestingPermission,
    startRecording,
    stopRecording,
    reset
  };
};
