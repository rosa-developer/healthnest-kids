
import React from 'react';
import { Bell, Calendar, Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

export interface ReminderProps {
  id: string;
  title: string;
  date: string;
  time?: string;
  type: 'appointment' | 'milestone' | 'vaccination' | 'medication';
  completed?: boolean;
  onComplete?: (id: string) => void;
  onDismiss?: (id: string) => void;
}

const ReminderItem: React.FC<ReminderProps> = ({
  id,
  title,
  date,
  time,
  type,
  completed = false,
  onComplete,
  onDismiss
}) => {
  const { toast } = useToast();
  
  const getTypeProperties = () => {
    switch (type) {
      case 'appointment':
        return {
          icon: Calendar,
          color: 'bg-healthnest-soft-blue text-healthnest-primary',
          label: 'Appointment',
        };
      case 'milestone':
        return {
          icon: Bell,
          color: 'bg-healthnest-soft-purple text-purple-500',
          label: 'Milestone',
        };
      case 'vaccination':
        return {
          icon: Calendar,
          color: 'bg-healthnest-soft-green text-green-500',
          label: 'Vaccination',
        };
      case 'medication':
        return {
          icon: Bell,
          color: 'bg-healthnest-soft-pink text-pink-500',
          label: 'Medication',
        };
      default:
        return {
          icon: Bell,
          color: 'bg-healthnest-soft-blue text-healthnest-primary',
          label: 'Reminder',
        };
    }
  };

  const { icon: Icon, color, label } = getTypeProperties();
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete(id);
    } else {
      toast({
        title: "Marked as complete",
        description: `${title} has been marked as complete!`,
      });
    }
  };
  
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss(id);
    } else {
      toast({
        title: "Reminder dismissed",
        description: `${title} has been dismissed!`,
      });
    }
  };

  return (
    <Card className={cn(
      "border border-border shadow-soft p-4 transition-colors",
      completed ? "bg-muted/20" : ""
    )}>
      <div className="flex items-start gap-3">
        <div className={cn('rounded-full p-2 flex-shrink-0', color)}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className={cn('chip', color)}>
                {label}
              </span>
              <h3 className={cn(
                "font-medium text-lg mt-1",
                completed ? "line-through text-muted-foreground" : ""
              )}>
                {title}
              </h3>
            </div>
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              {date} {time && `at ${time}`}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          {!completed && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-healthnest-soft-green hover:text-green-500"
              onClick={handleComplete}
            >
              <Check className="h-5 w-5" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full hover:bg-healthnest-soft-pink hover:text-pink-500"
            onClick={handleDismiss}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ReminderItem;
