
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ReminderItem, { ReminderProps } from '@/components/common/ReminderItem';

// Mock data - In a real app, this would come from an API or context
const mockReminders: ReminderProps[] = [
  {
    id: '1',
    title: '9-Month Checkup',
    date: 'May 15, 2023',
    time: '10:00 AM',
    type: 'appointment',
    completed: false
  },
  {
    id: '2',
    title: 'Vaccination (DTaP)',
    date: 'May 20, 2023',
    time: '2:30 PM',
    type: 'vaccination',
    completed: false
  },
  {
    id: '3',
    title: 'First Steps - Milestone Alert',
    date: 'Expected around June 1, 2023',
    type: 'milestone',
    completed: false
  }
];

const RemindersSection = () => {
  const { toast } = useToast();
  const [reminders, setReminders] = useState<ReminderProps[]>(mockReminders);
  
  const handleComplete = (id: string) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: true } 
          : reminder
      )
    );
    
    toast({
      title: "Reminder completed",
      description: "The reminder has been marked as complete!",
    });
  };
  
  const handleDismiss = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
    
    toast({
      title: "Reminder dismissed",
      description: "The reminder has been removed from your list.",
    });
  };
  
  const handleAddReminder = () => {
    toast({
      title: "Add Reminder",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <section className="mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Reminders</h2>
        <Button 
          variant="outline" 
          size="sm"
          className="text-healthnest-primary"
          onClick={handleAddReminder}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Reminder
        </Button>
      </div>

      <div className="space-y-3">
        {reminders.length > 0 ? (
          reminders.map(reminder => (
            <ReminderItem 
              key={reminder.id}
              {...reminder}
              onComplete={handleComplete}
              onDismiss={handleDismiss}
            />
          ))
        ) : (
          <div className="text-center py-8 bg-muted/20 rounded-lg border border-border">
            <p className="text-muted-foreground">No upcoming reminders</p>
            <Button 
              variant="link" 
              className="mt-2 text-healthnest-primary"
              onClick={handleAddReminder}
            >
              Add a reminder
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RemindersSection;
