
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Share2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface MemoryCardProps {
  id: string;
  title: string;
  date: string;
  imageSrc?: string;
  audioSrc?: string;
  description?: string;
  className?: string;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  id,
  title,
  date,
  imageSrc,
  audioSrc,
  description,
  className,
  onImageError,
}) => {
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked 
        ? "This memory has been removed from favorites."
        : "This memory has been added to favorites!",
    });
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Share Memory",
      description: "Sharing functionality will be available soon!",
    });
  };
  
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleDefaultImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Memory card image failed to load");
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
      className={cn(
        'rounded-2xl overflow-hidden bg-card border border-border shadow-soft cursor-pointer relative',
        className
      )}
    >
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={onImageError || handleDefaultImageError}
          />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <p>{date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleLike}
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                liked 
                  ? "bg-pink-100 text-pink-500 dark:bg-pink-900/20" 
                  : "bg-healthnest-soft-pink hover:bg-pink-100"
              )}
            >
              <Heart className={cn(
                "h-4 w-4",
                liked ? "fill-pink-500" : ""
              )} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-healthnest-soft-blue hover:bg-blue-100 transition-colors duration-300"
            >
              <Share2 className="h-4 w-4 text-blue-500" />
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: expanded ? "auto" : description && description.length > 60 ? "2.4em" : "auto", 
            opacity: 1 
          }}
          className="overflow-hidden"
        >
          {description && (
            <p className={cn(
              "text-sm text-muted-foreground mt-2",
              !expanded && description.length > 60 ? "line-clamp-2" : ""
            )}>
              {description}
            </p>
          )}
          
          {audioSrc && expanded && (
            <div className="mt-3 py-2">
              <audio controls className="w-full h-8">
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </motion.div>
        
        {description && description.length > 60 && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs flex items-center text-primary hover:underline"
          >
            {expanded ? (
              <>Show less <ChevronUp className="h-3 w-3 ml-1" /></>
            ) : (
              <>Read more <ChevronDown className="h-3 w-3 ml-1" /></>
            )}
          </button>
        )}
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-healthnest-soft-pink/50 to-healthnest-soft-purple/30 -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gradient-to-br from-healthnest-soft-blue/50 to-healthnest-soft-green/30 -z-10"></div>
    </motion.div>
  );
};

export default MemoryCard;
