
import React from 'react';
import { cn } from '@/lib/utils';
import { Camera, Mic, FileText, Calendar } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  date: string;
  type: 'memory' | 'health' | 'milestone' | 'appointment';
  description: string;
  className?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  date,
  type,
  description,
  className,
}) => {
  const getTypeProperties = () => {
    switch (type) {
      case 'memory':
        return {
          icon: Camera,
          color: 'bg-healthnest-soft-pink text-pink-500',
          label: 'Memory',
        };
      case 'health':
        return {
          icon: FileText,
          color: 'bg-healthnest-soft-blue text-healthnest-primary',
          label: 'Health',
        };
      case 'milestone':
        return {
          icon: Mic,
          color: 'bg-healthnest-soft-purple text-purple-500',
          label: 'Milestone',
        };
      case 'appointment':
        return {
          icon: Calendar,
          color: 'bg-healthnest-soft-green text-green-500',
          label: 'Appointment',
        };
      default:
        return {
          icon: Camera,
          color: 'bg-healthnest-soft-blue text-healthnest-primary',
          label: 'Event',
        };
    }
  };

  const { icon: Icon, color, label } = getTypeProperties();

  return (
    <div
      className={cn(
        'rounded-2xl p-4 bg-card shadow-soft border border-border animate-fade-in card-hover',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn('rounded-full p-2', color)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <span className={cn('chip', color)}>
                {label}
              </span>
              <h3 className="font-medium text-lg mt-1">{title}</h3>
            </div>
            <div className="text-sm text-muted-foreground">
              {date}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
