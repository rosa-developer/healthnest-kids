export interface VoiceRecorderContextProps {
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

export interface VoiceRecorderProviderProps {
  children: React.ReactNode;
  onSave: (audioBlob: Blob, duration: number) => void;
}

export interface AudioRecording {
  id: string;
  title: string;
  url: string;
  blob: Blob;
}
