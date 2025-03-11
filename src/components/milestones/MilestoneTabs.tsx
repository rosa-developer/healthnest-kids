
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpcomingMilestones from '@/components/milestones/UpcomingMilestones';
import CompletedMilestones from '@/components/milestones/CompletedMilestones';
import { Milestone, MilestoneCategory } from '@/types/milestone';

interface MilestoneTabsProps {
  activeCategory: string;
  filteredMilestones: Milestone[];
  selectedMilestoneId: string | null;
  milestoneNote: string;
  onToggleMilestone: (id: string) => void;
  onEditNotes: (id: string) => void;
  onChangeMilestoneNote: (note: string) => void;
  onSaveNotes: () => void;
  onAddRecord: () => void;
  categories: MilestoneCategory[];
}

const MilestoneTabs: React.FC<MilestoneTabsProps> = ({
  activeCategory,
  filteredMilestones,
  selectedMilestoneId,
  milestoneNote,
  onToggleMilestone,
  onEditNotes,
  onChangeMilestoneNote,
  onSaveNotes,
  onAddRecord,
  categories
}) => {
  return (
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
          onToggleMilestone={onToggleMilestone}
          onEditNotes={onEditNotes}
          onChangeMilestoneNote={onChangeMilestoneNote}
          onSaveNotes={onSaveNotes}
          onAddRecord={onAddRecord}
          categories={categories}
        />
      </TabsContent>
      
      <TabsContent value="completed" className="mt-4 animate-fade-in">
        <CompletedMilestones 
          filteredMilestones={filteredMilestones}
          selectedMilestoneId={selectedMilestoneId}
          milestoneNote={milestoneNote}
          onToggleMilestone={onToggleMilestone}
          onEditNotes={onEditNotes}
          onChangeMilestoneNote={onChangeMilestoneNote}
          onSaveNotes={onSaveNotes}
        />
      </TabsContent>
    </Tabs>
  );
};

export default MilestoneTabs;
