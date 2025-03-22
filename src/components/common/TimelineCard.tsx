
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Camera, Mic, FileText, Calendar, Heart, MoreHorizontal, Edit, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TimelineCardProps {
  title: string;
  date: string;
  type: 'memory' | 'health' | 'milestone' | 'appointment';
  description: string;
  className?: string;
  imageSrc?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  date,
  type,
  description,
  className,
  imageSrc
}) => {
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  
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
  
  const handleEdit = () => {
    toast({
      title: "Edit Timeline Item",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleDelete = () => {
    toast({
      title: "Delete Timeline Item",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked 
        ? "This item has been removed from your favorites." 
        : "This item has been added to your favorites!",
    });
  };

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
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">
                {date}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleEdit}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleDelete} className="text-red-500">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
          
          {imageSrc && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
            </div>
          )}
          
          <div className="flex justify-end mt-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                liked ? "text-pink-500" : "text-muted-foreground"
              )}
              onClick={handleLike}
            >
              <Heart className={cn(
                "h-4 w-4 mr-1",
                liked ? "fill-pink-500" : ""
              )} />
              {liked ? "Favorite" : "Add to favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
