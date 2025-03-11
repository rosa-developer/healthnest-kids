
import React, { useState } from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileSelector from '@/components/common/ChildProfileSelector';
import { useToast } from "@/hooks/use-toast";

// Import data
import { milestoneCategories, mockMilestones } from '@/data/milestoneData';

// Import hooks and components
import { useMilestoneTracker } from '@/hooks/useMilestoneTracker';
import MilestoneHeaderCard from '@/components/milestones/MilestoneHeaderCard';
import MilestoneTabs from '@/components/milestones/MilestoneTabs';
import UpcomingMilestonesPreview from '@/components/milestones/UpcomingMilestonesPreview';

const MilestoneTracker: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('physical');
  const [showRecorder, setShowRecorder] = useState(false);
  
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
  
  const filteredMilestones = getFilteredMilestones(activeCategory);
  
  const handleAddRecord = () => {
    toast({
      title: "Add Milestone",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleCaptureAudio = () => {
    setShowRecorder(true);
  };
  
  const handleHideRecorder = () => {
    setShowRecorder(false);
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="chip bg-healthnest-soft-purple text-purple-500">
              Milestone Tracker
            </div>
            <ChildProfileSelector />
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
          
          <UpcomingMilestonesPreview />
        </div>
      </PageTransition>
    </div>
  );
};

export default MilestoneTracker;
