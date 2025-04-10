
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
