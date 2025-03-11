import { useState } from 'react';
import { Milestone } from '@/types/milestone';
import { useToast } from "@/hooks/use-toast";

export function useMilestoneTracker(initialMilestones: Milestone[]) {
  const { toast } = useToast();
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [milestoneNote, setMilestoneNote] = useState('');
  
  const getFilteredMilestones = (category: string) => {
    return milestones.filter(milestone => milestone.category === category);
  };
  
  const getCompletedCount = (categoryId: string) => {
    return milestones.filter(m => m.category === categoryId && m.completed).length;
  };
  
  const getTotalCount = (categoryId: string) => {
    return milestones.filter(m => m.category === categoryId).length;
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

  return {
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
  };
}
