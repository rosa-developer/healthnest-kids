import { useState } from 'react';
import { Milestone } from '@/types/milestone';
import { useToast } from "@/hooks/use-toast";

export function useMilestoneTracker() {
  const { toast } = useToast();
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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

  const filteredMilestones = milestones.filter(milestone => {
    const matchesCategory = activeCategory === 'all' || milestone.category === activeCategory;
    const matchesSearch = milestone.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return {
    milestones,
    filteredMilestones,
    searchQuery,
    activeCategory,
    setSearchQuery,
    setActiveCategory,
    addMilestone,
    deleteMilestone,
    updateMilestone,
  };
}
