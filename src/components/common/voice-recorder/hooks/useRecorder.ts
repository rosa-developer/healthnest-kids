
import { useState, useEffect, useRef } from 'react';
import { getRecordingTime } from '../utils';
import { useToast } from '@/hooks/use-toast';

interface RecorderControls {
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  pauseRecording: () => void;
  resumeRecording: () => void;
  getRecordings: () => { audio: string | null; duration: number }[];
  clearRecordings: () => void;
  recordingStatus: string;
  recordingTime: number;
  isAudioContextSupported: boolean;
}

const audioContext = typeof window !== 'undefined' ? (window.AudioContext || (window as any).webkitAudioContext) : null;

const useRecorder = (): RecorderControls => {
  const { toast } = useToast();
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recordingStatus, setRecordingStatus] = useState<string>('inactive');
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [recordings, setRecordings] = useState<{ audio: string | null; duration: number }[]>([]);
  const [isAudioContextSupported, setIsAudioContextSupported] = useState(!!audioContext);

  const timerInterval = useRef<number | null>(null);

  useEffect(() => {
    const initializeRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const newRecorder = new MediaRecorder(stream);

        newRecorder.ondataavailable = (event) => {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        };

        newRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setRecordings((prevRecordings) => [...prevRecordings, { audio: audioUrl, duration: recordingTime }]);
          setAudioChunks([]);
          setRecordingTime(0);
        };

        setRecorder(newRecorder);
      } catch (error) {
        console.error('Error initializing recorder:', error);
        setIsAudioContextSupported(false);
        toast({
          title: "Error",
          description: "Audio recording is not supported in your browser or device. Please check your browser settings and permissions.",
          variant: "destructive",
        });
      }
    };

    initializeRecorder();

    return () => {
      if (recorder) {
        recorder.stream.getTracks().forEach(track => track.stop());
      }
      if (timerInterval.current !== null) {
        clearInterval(timerInterval.current);
      }
    };
  }, []);

  const startRecording = async () => {
    if (!recorder) return;

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      recorder.start();
      setRecordingStatus('recording');
      setRecordingTime(0);

      timerInterval.current = window.setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
      toast({
        title: "Error",
        description: "Failed to start recording. Please check your microphone permissions.",
        variant: "destructive",
      });
      setRecordingStatus('inactive');
    }
  };

  const stopRecording = () => {
    if (recorder && recorder.state === 'recording') {
      recorder.stop();
      setRecordingStatus('inactive');
      if (timerInterval.current !== null) {
        clearInterval(timerInterval.current);
        timerInterval.current = null;
      }
    }
  };

  const pauseRecording = () => {
    if (recorder && recorder.state === 'recording') {
      recorder.pause();
      setRecordingStatus('paused');
      if (timerInterval.current !== null) {
        clearInterval(timerInterval.current);
        timerInterval.current = null;
      }
    }
  };

  const resumeRecording = () => {
    if (recorder && recorder.state === 'paused') {
      recorder.resume();
      setRecordingStatus('recording');
      timerInterval.current = window.setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const getRecordings = () => {
    return recordings;
  };

  const clearRecordings = () => {
    setRecordings([]);
  };

  return {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    getRecordings,
    clearRecordings,
    recordingStatus,
    recordingTime,
    isAudioContextSupported
  };
};

export default useRecorder;
