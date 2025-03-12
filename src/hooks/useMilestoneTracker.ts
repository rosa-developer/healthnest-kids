import { useState } from 'react';
import { Milestone, milestoneCategories } from '@/types/milestone';
import { useToast } from "@/hooks/use-toast";

export function useMilestoneTracker(initialMilestones: Milestone[] = []) {
  const { toast } = useToast();
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [milestoneNote, setMilestoneNote] = useState<string>('');

  const addMilestone = (milestone: Milestone) => {
    setMilestones(prev => [...prev, milestone]);
    toast({
      title: "Milestone Added",
      description: "New milestone has been added successfully.",
    });
  };

  const deleteMilestone = (id: string) => {
    setMilestones(prev => prev.filter(milestone => milestone.id !== id));
    toast({
      title: "Milestone Deleted",
      description: "The milestone has been removed.",
    });
  };

  const updateMilestone = (updatedMilestone: Milestone) => {
    setMilestones(prev =>
      prev.map(milestone =>
        milestone.id === updatedMilestone.id ? updatedMilestone : milestone
      )
    );
    toast({
      title: "Milestone Updated",
      description: "Milestone details have been updated successfully.",
    });
  };

  const getFilteredMilestones = (category: string) => {
    return milestones.filter(milestone => {
      const matchesCategory = category === 'all' || milestone.category === category;
      const matchesSearch = searchQuery ? milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    });
  };

  const handleToggleMilestone = (id: string) => {
    setMilestones(prev => 
      prev.map(milestone => 
        milestone.id === id 
          ? { ...milestone, completed: !milestone.completed } 
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
      setMilestones(prev => 
        prev.map(milestone => 
          milestone.id === selectedMilestoneId 
            ? { ...milestone, notes: milestoneNote } 
            : milestone
        )
      );
      setSelectedMilestoneId(null);
      toast({
        title: "Notes Saved",
        description: "Your notes have been saved successfully.",
      });
    }
  };

  const getCompletedCount = (category: string) => {
    return milestones.filter(m => m.completed && (category === 'all' || m.category === category)).length;
  };

  const getTotalCount = (category: string) => {
    return milestones.filter(m => category === 'all' || m.category === category).length;
  };

  return {
    milestones,
    filteredMilestones: getFilteredMilestones(activeCategory),
    searchQuery,
    activeCategory,
    selectedMilestoneId,
    milestoneNote,
    setSearchQuery,
    setActiveCategory,
    setMilestoneNote,
    addMilestone,
    deleteMilestone,
    updateMilestone,
    getFilteredMilestones,
    getCompletedCount,
    getTotalCount,
    handleToggleMilestone,
    handleEditNotes,
    handleSaveNotes
  };
}
