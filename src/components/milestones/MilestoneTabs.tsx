
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
      <TabsList className="grid grid-cols-2 w-full bg-muted/50 backdrop-blur-sm rounded-lg p-1.5 border border-gray-100 dark:border-gray-800">
        <TabsTrigger value="upcoming" className="rounded-md text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-indigo-400">
          Upcoming Milestones
        </TabsTrigger>
        <TabsTrigger value="completed" className="rounded-md text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-indigo-400">
          Completed Milestones
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="upcoming" className="mt-6 animate-fade-in">
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
      
      <TabsContent value="completed" className="mt-6 animate-fade-in">
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
