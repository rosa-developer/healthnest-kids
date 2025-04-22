import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Camera, Calendar, Plus } from 'lucide-react';

interface ChildMilestoneHeaderProps {
  onCaptureAudio: () => void;
  onAddRecord: () => void;
  photoSrc?: string;
}

const ChildMilestoneHeader: React.FC<ChildMilestoneHeaderProps> = ({
  onCaptureAudio,
  onAddRecord,
  photoSrc
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center">
        <div className="h-20 w-20 rounded-full bg-white shadow-md flex items-center justify-center mr-4 overflow-hidden border-2 border-indigo-200 dark:border-indigo-800">
          {photoSrc ? (
            <img src={photoSrc} alt="Child" className="w-full h-full object-cover" />
          ) : (
            <img 
              src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png" 
              alt="Emma" 
              className="w-full h-full object-cover" 
            />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-slate-800 dark:text-slate-200">Emma's Milestones</h2>
          <div className="flex items-center mt-1">
            <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-1.5" />
            <p className="text-sm text-slate-600 dark:text-slate-400">8 months old</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:self-end">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/80 dark:bg-gray-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800/50"
          onClick={onCaptureAudio}
        >
          <Mic className="h-4 w-4 mr-1.5 text-indigo-500" />
          Record
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/80 dark:bg-gray-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800/50"
          onClick={onAddRecord}
        >
          <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
          Capture
        </Button>
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none"
          onClick={onAddRecord}
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Add Milestone
        </Button>
      </div>
    </div>
  );
};

export default ChildMilestoneHeader;
