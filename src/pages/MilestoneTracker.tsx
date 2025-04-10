
import React, { useState } from 'react';
import MilestoneHeaderCard from '@/components/milestones/MilestoneHeaderCard';
import MilestoneTabs from '@/components/milestones/MilestoneTabs';
import { milestoneCategories } from '@/data/milestoneData';
import { mockMilestones } from '@/data/milestoneData';
import { useMilestoneTracker } from '@/hooks/useMilestoneTracker';
import { useToast } from '@/hooks/use-toast';

const MilestoneTracker: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('physical');
  const [showRecorder, setShowRecorder] = useState(false);
  const { toast } = useToast();
  
  const {
    milestones,
    selectedMilestoneId,
    milestoneNote,
    getFilteredMilestones,
    getCompletedCount,
    getTotalCount,
    handleToggleMilestone,
    handleEditNotes,
    handleSaveNotes,
    setMilestoneNote
  } = useMilestoneTracker(mockMilestones);

  const filteredMilestones = activeCategory === 'all'
    ? milestones
    : getFilteredMilestones(activeCategory);

  const handleCaptureAudio = () => {
    setShowRecorder(true);
  };

  const handleAddRecord = () => {
    toast({
      title: "Coming Soon",
      description: "Custom milestone creation will be available in the next update!"
    });
  };

  const handleHideRecorder = () => {
    setShowRecorder(false);
  };

  return (
    <div className="container mx-auto pt-6 pb-20">
      <div className="mb-8 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-2xl border border-indigo-100/50 dark:border-indigo-800/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Milestone Tracker</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">
              Track and celebrate your child's development journey with our interactive milestone tracker.
            </p>
          </div>
        </div>
      </div>

      <MilestoneHeaderCard
        categories={milestoneCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        getCompletedCount={getCompletedCount}
        getTotalCount={getTotalCount}
        onCaptureAudio={handleCaptureAudio}
        onAddRecord={handleAddRecord}
        showRecorder={showRecorder}
        onHideRecorder={handleHideRecorder}
      />
      
      <MilestoneTabs
        activeCategory={activeCategory}
        filteredMilestones={filteredMilestones}
        selectedMilestoneId={selectedMilestoneId}
        milestoneNote={milestoneNote}
        onToggleMilestone={handleToggleMilestone}
        onEditNotes={handleEditNotes}
        onChangeMilestoneNote={setMilestoneNote}
        onSaveNotes={handleSaveNotes}
        onAddRecord={handleAddRecord}
        categories={milestoneCategories}
      />
    </div>
  );
};

export default MilestoneTracker;
