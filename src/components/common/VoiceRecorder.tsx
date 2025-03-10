
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Square, Play, Pause, Save, Trash } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface VoiceRecorderProps {
  onSave: (audioBlob: Blob, duration: number) => void;
  className?: string;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onSave, className }) => {
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
        
        // Create temporary URL for preview
        if (audioRef.current) {
          const audioURL = URL.createObjectURL(audioBlob);
          audioRef.current.src = audioURL;
        }
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
      
      // Start timer
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
      
      // Stop and clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      // Stop all audio tracks
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle audio end event
  React.useEffect(() => {
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

  // Clean up on unmount
  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isRecording]);

  return (
    <div className={cn('rounded-lg bg-card border border-border p-4', className)}>
      <audio ref={audioRef} className="hidden" />
      
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 flex justify-center">
          {isRecording ? (
            <div className="animate-pulse flex items-center">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <p className="text-sm">{formatTime(recordingTime)}</p>
            </div>
          ) : audioBlob ? (
            <div className="w-full px-4">
              <div className="bg-healthnest-soft-blue h-12 rounded-lg w-full flex items-center justify-between px-4">
                <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-healthnest-primary" />
                  ) : (
                    <Play className="h-5 w-5 text-healthnest-primary" />
                  )}
                </Button>
                <span className="text-sm text-healthnest-primary">{formatTime(recordingTime)}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground text-sm">
              Tap the microphone to start recording
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          {!audioBlob ? (
            isRecording ? (
              <Button
                variant="destructive"
                size="icon"
                className="h-12 w-12 rounded-full"
                onClick={stopRecording}
              >
                <Square className="h-5 w-5" />
              </Button>
            ) : (
              <Button
                variant="default"
                size="icon"
                className="h-12 w-12 rounded-full bg-healthnest-primary hover:bg-healthnest-primary/90"
                onClick={startRecording}
              >
                <Mic className="h-5 w-5" />
              </Button>
            )
          ) : (
            <>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={handleDiscard}
              >
                <Trash className="h-4 w-4 text-destructive" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-12 w-12 rounded-full bg-healthnest-primary hover:bg-healthnest-primary/90"
                onClick={handleSave}
              >
                <Save className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceRecorder;
