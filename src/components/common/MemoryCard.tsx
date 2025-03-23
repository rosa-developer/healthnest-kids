
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface MemoryCardProps {
  id: string;
  title: string;
  date: string;
  imageSrc?: string;
  audioSrc?: string;
  description?: string;
  className?: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  id,
  title,
  date,
  imageSrc,
  audioSrc,
  description,
  className,
}) => {
  const { toast } = useToast();
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Liked",
      description: "This memory has been added to favorites!",
    });
  };
  
  const handleClick = () => {
    toast({
      title: "Memory Details",
      description: "Full memory view coming in the next update!",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'rounded-2xl overflow-hidden bg-card border border-border shadow-soft card-hover cursor-pointer relative',
        className
      )}
    >
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <button
            onClick={handleLike}
            className="p-2 rounded-full bg-healthnest-soft-pink hover:bg-pink-100 transition-colors duration-300"
          >
            <Heart className="h-4 w-4 text-pink-500" />
          </button>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        )}
        {audioSrc && (
          <div className="mt-3 py-2">
            <audio controls className="w-full h-8">
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-healthnest-soft-pink/30 -z-10"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-healthnest-soft-blue/30 -z-10"></div>
    </div>
  );
};

export default MemoryCard;
