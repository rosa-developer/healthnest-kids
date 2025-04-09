
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
  hasPermission?: boolean;
  isRequestingPermission?: boolean;
}

export interface VoiceRecorderProviderProps {
  children: React.ReactNode;
  onSave: (audioBlob: Blob, duration: number) => void;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlayPause: () => void;
  setupAudioSource: (audioBlob: Blob) => void;
  resetPlayer: () => void;
}

export interface RecordingTimerProps {
  recordingTime: number;
}

export interface AudioPreviewProps {
  recordingTime: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  formatTime: (seconds: number) => string;
}

export interface RecordingControlsProps {
  isRecording: boolean;
  audioBlob: Blob | null;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onSave: () => void;
  onDiscard: () => void;
  hasPermission?: boolean;
  isRequestingPermission?: boolean;
}
