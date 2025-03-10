
import React, { useState } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent } from "@/components/ui/card";
import ChildProfileSelector from '@/components/common/ChildProfileSelector';
import VoiceRecorder from '@/components/common/VoiceRecorder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Import data
import { milestoneCategories, mockMilestones } from '@/data/milestoneData';
import { Milestone } from '@/types/milestone';

// Import components
import CategorySelector from '@/components/milestones/CategorySelector';
import ChildMilestoneHeader from '@/components/milestones/ChildMilestoneHeader';
import UpcomingMilestones from '@/components/milestones/UpcomingMilestones';
import CompletedMilestones from '@/components/milestones/CompletedMilestones';
import UpcomingMilestonesPreview from '@/components/milestones/UpcomingMilestonesPreview';

const MilestoneTracker: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('physical');
  const [milestones, setMilestones] = useState<Milestone[]>(mockMilestones);
  const [showRecorder, setShowRecorder] = useState(false);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [milestoneNote, setMilestoneNote] = useState('');
  
  const filteredMilestones = milestones.filter(
    milestone => milestone.category === activeCategory
  );
  
  const getCompletedCount = (categoryId: string) => {
    return milestones.filter(
      m => m.category === categoryId && m.completed
    ).length;
  };
  
  const getTotalCount = (categoryId: string) => {
    return milestones.filter(m => m.category === categoryId).length;
  };
  
  const handleAddRecord = () => {
    toast({
      title: "Add Milestone",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleToggleMilestone = (id: string) => {
    setMilestones(milestones.map(milestone => {
      if (milestone.id === id) {
        // Create a new copy of the milestone with updated properties
        const updatedMilestone: Milestone = {
          ...milestone,
          completed: !milestone.completed
        };
        
        // Add date if completing the milestone
        if (!milestone.completed) {
          updatedMilestone.date = new Date().toISOString().split('T')[0];
        }
        
        return updatedMilestone;
      }
      return milestone;
    }));
    
    const milestone = milestones.find(m => m.id === id);
    if (milestone && !milestone.completed) {
      toast({
        title: "Milestone Achieved!",
        description: `"${milestone.title}" has been marked as completed.`
      });
    }
  };
  
  const handleEditNotes = (id: string) => {
    const milestone = milestones.find(m => m.id === id);
    if (milestone) {
      setSelectedMilestoneId(id);
      setMilestoneNote(milestone.notes || '');
    }
  };
  
  const handleSaveNotes = () => {
    if (selectedMilestoneId) {
      setMilestones(milestones.map(milestone => {
        if (milestone.id === selectedMilestoneId) {
          return {
            ...milestone,
            notes: milestoneNote
          };
        }
        return milestone;
      }));
      
      setSelectedMilestoneId(null);
      setMilestoneNote('');
      
      toast({
        title: "Notes Saved",
        description: "Your milestone notes have been updated."
      });
    }
  };
  
  const handleCaptureAudio = () => {
    setShowRecorder(true);
  };
  
  const handleSaveAudio = (audioBlob: Blob, duration: number) => {
    // In a real app, you'd save this to storage and link to the milestone
    setShowRecorder(false);
    toast({
      title: "Audio Saved",
      description: `Your ${duration} second recording has been saved to this milestone.`,
    });
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
          
          <Card className="border border-border shadow-soft mb-6">
            <CardContent className="p-6">
              <ChildMilestoneHeader 
                onCaptureAudio={handleCaptureAudio}
                onAddRecord={handleAddRecord}
              />
              
              <CategorySelector 
                categories={milestoneCategories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                getCompletedCount={getCompletedCount}
                getTotalCount={getTotalCount}
              />
              
              {showRecorder && (
                <div className="mt-4">
                  <VoiceRecorder onSave={handleSaveAudio} />
                </div>
              )}
            </CardContent>
          </Card>
          
          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList className="grid grid-cols-2 w-full bg-muted rounded-lg p-1">
              <TabsTrigger value="upcoming" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="completed" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Completed
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-4 animate-fade-in">
              <UpcomingMilestones 
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
            </TabsContent>
            
            <TabsContent value="completed" className="mt-4 animate-fade-in">
              <CompletedMilestones 
                filteredMilestones={filteredMilestones}
                selectedMilestoneId={selectedMilestoneId}
                milestoneNote={milestoneNote}
                onToggleMilestone={handleToggleMilestone}
                onEditNotes={handleEditNotes}
                onChangeMilestoneNote={setMilestoneNote}
                onSaveNotes={handleSaveNotes}
              />
            </TabsContent>
          </Tabs>
          
          <UpcomingMilestonesPreview />
        </div>
      </PageTransition>
    </div>
  );
};

export default MilestoneTracker;
