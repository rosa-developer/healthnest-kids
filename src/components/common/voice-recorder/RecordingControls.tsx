
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Square, Save, Trash } from 'lucide-react';

interface RecordingControlsProps {
  isRecording: boolean;
  audioBlob: Blob | null;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onSave: () => void;
  onDiscard: () => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({
  isRecording,
  audioBlob,
  onStartRecording,
  onStopRecording,
  onSave,
  onDiscard
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {!audioBlob ? (
        isRecording ? (
          <Button
            variant="destructive"
            size="icon"
            className="h-12 w-12 rounded-full"
            onClick={onStopRecording}
          >
            <Square className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            variant="default"
            size="icon"
            className="h-12 w-12 rounded-full bg-healthnest-primary hover:bg-healthnest-primary/90"
            onClick={onStartRecording}
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
            onClick={onDiscard}
          >
            <Trash className="h-4 w-4 text-destructive" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="h-12 w-12 rounded-full bg-healthnest-primary hover:bg-healthnest-primary/90"
            onClick={onSave}
          >
            <Save className="h-5 w-5" />
          </Button>
        </>
      )}
    </div>
  );
};

export default RecordingControls;
