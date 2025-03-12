
import { useState, useCallback } from 'react';
import { AudioRecording } from '../types';
import { toast } from "@/hooks/use-toast";

interface RecorderState {
  recording: boolean;
  audioURL: string | null;
  audioBlob: Blob | null;
  error: string | null;
  audioRecordings: AudioRecording[];
}

const initialState: RecorderState = {
  recording: false,
  audioURL: null,
  audioBlob: null,
  error: null,
  audioRecordings: [],
};

export const useRecorder = () => {
  const [recorderState, setRecorderState] = useState(initialState);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        const audioBlob = new Blob([event.data], { type: 'audio/wav' });
        const audioURL = URL.createObjectURL(audioBlob);

        setRecorderState((prevState) => ({
          ...prevState,
          audioURL,
          audioBlob,
          error: null,
        }));
      };

      recorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.onerror = (event: Event) => {
        console.error("MediaRecorder Error");
        setRecorderState(prevState => ({
          ...prevState,
          error: 'An error occurred while recording.',
        }));
        toast({
          title: "Recording Error",
          description: "An error occurred while recording. Please check your microphone and try again.",
          variant: "destructive",
        });
      };

      setMediaRecorder(recorder);
      recorder.start();
      setRecorderState(prevState => ({ ...prevState, recording: true, error: null }));
    } catch (error: any) {
      console.error("Error starting recording: ", error);
      setRecorderState(prevState => ({
        ...prevState,
        error: 'Failed to start recording. Please check your microphone permissions.',
      }));
      toast({
        title: "Permission Denied",
        description: "Please allow microphone access to start recording.",
        variant: "destructive",
      });
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecorderState(prevState => ({ ...prevState, recording: false }));
    }
  }, [mediaRecorder]);

  const resetRecording = useCallback(() => {
    setRecorderState(initialState);
  }, []);

  const saveRecording = useCallback((title: string) => {
    if (recorderState.audioURL && recorderState.audioBlob) {
      const newRecording: AudioRecording = {
        id: Date.now().toString(),
        title: title,
        url: recorderState.audioURL,
        blob: recorderState.audioBlob,
      };

      setRecorderState(prevState => ({
        ...prevState,
        audioRecordings: [...prevState.audioRecordings, newRecording],
        audioURL: null,
        audioBlob: null,
      }));

      toast({
        title: "Recording Saved",
        description: "Your audio recording has been saved successfully.",
      });
    } else {
      toast({
        title: "No Recording Found",
        description: "Please record audio before saving.",
        variant: "destructive",
      });
    }
  }, [recorderState.audioURL, recorderState.audioBlob]);

  return {
    ...recorderState,
    startRecording,
    stopRecording,
    resetRecording,
    saveRecording,
  };
};
