
import { useState, useEffect } from 'react';
import { Milestone } from '../types/milestone';
import { useToast } from '../hooks/use-toast';

export const useMilestoneTracker = (initialMilestones: Milestone[]) => {
  const { toast } = useToast();
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [milestoneNote, setMilestoneNote] = useState<string>('');

  useEffect(() => {
    // Load milestones from local storage on component mount
    const storedMilestones = localStorage.getItem('milestones');
    if (storedMilestones) {
      setMilestones(JSON.parse(storedMilestones));
    }
  }, []);

  useEffect(() => {
    // Save milestones to local storage whenever milestones state changes
    localStorage.setItem('milestones', JSON.stringify(milestones));
  }, [milestones]);

  const getFilteredMilestones = (category: string) => {
    return milestones.filter(milestone => milestone.category === category);
  };

  const getCompletedCount = (category: string) => {
    return milestones.filter(milestone => milestone.category === category && milestone.completed).length;
  };

  const getTotalCount = (category: string) => {
    return milestones.filter(milestone => milestone.category === category).length;
  };

  const handleToggleMilestone = (id: string) => {
    setMilestones(prevMilestones =>
      prevMilestones.map(milestone =>
        milestone.id === id
          ? { ...milestone, completed: !milestone.completed, completedDate: !milestone.completed ? new Date().toISOString() : undefined }
          : milestone
      )
    );
  };

  const handleEditNotes = (id: string) => {
    setSelectedMilestoneId(id);
    const milestone = milestones.find(m => m.id === id);
    setMilestoneNote(milestone?.notes || '');
  };

  const handleSaveNotes = () => {
    if (selectedMilestoneId) {
      setMilestones(prevMilestones =>
        prevMilestones.map(milestone =>
          milestone.id === selectedMilestoneId ? { ...milestone, notes: milestoneNote } : milestone
        )
      );
      setSelectedMilestoneId(null);
      toast({
        title: "Notes Saved",
        description: "Your notes have been saved successfully!",
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
};
