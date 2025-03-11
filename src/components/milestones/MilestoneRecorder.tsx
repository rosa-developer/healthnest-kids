
import React from 'react';
import VoiceRecorder from '@/components/common/VoiceRecorder';
import { useToast } from "@/hooks/use-toast";

interface MilestoneRecorderProps {
  showRecorder: boolean;
  onHideRecorder: () => void;
}

const MilestoneRecorder: React.FC<MilestoneRecorderProps> = ({ 
  showRecorder, 
  onHideRecorder 
}) => {
  const { toast } = useToast();

  const handleSaveAudio = (audioBlob: Blob, duration: number) => {
    // In a real app, you'd save this to storage and link to the milestone
    onHideRecorder();
    toast({
      title: "Audio Saved",
      description: `Your ${duration} second recording has been saved to this milestone.`,
    });
  };

  if (!showRecorder) return null;

  return (
    <div className="mt-4">
      <VoiceRecorder onSave={handleSaveAudio} />
    </div>
  );
};

export default MilestoneRecorder;
