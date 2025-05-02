
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Heart, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BabyInfoBox = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center mb-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h2 className="text-2xl font-semibold font-heading flex items-center gap-2 cursor-help">
              <Heart className="h-5 w-5 text-primary-pink animate-pulse-soft" />
              Family Memories
              <Info className="h-4 w-4 text-muted-foreground" />
            </h2>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">Capture and cherish special moments with your baby and family</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-primary flex items-center group"
        onClick={() => navigate('/memories')}
      >
        View all <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all duration-300" />
      </Button>
    </div>
  );
};

export default BabyInfoBox;
