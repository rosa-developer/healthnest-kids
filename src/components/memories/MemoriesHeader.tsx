
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter, Camera, Upload, Mic, Baby, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MemoriesHeaderProps {
  handleAddMemory: () => void;
}

const MemoriesHeader: React.FC<MemoriesHeaderProps> = ({ handleAddMemory }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center">
          <span>Memories</span>
          <div className="ml-3 bg-primary-pink/20 p-1.5 rounded-full">
            <Baby className="h-4 w-4 text-primary-pink" />
          </div>
        </h1>
        <p className="text-muted-foreground">Capture and cherish precious moments with Emma</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button 
          onClick={handleAddMemory} 
          size="sm"
          className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
        >
          <Mic className="h-4 w-4 mr-2" />
          Record
        </Button>
        <Button 
          size="sm"
          className="bg-primary-pink text-white hover:bg-primary-pink/90"
          asChild
        >
          <Link to="/photos">
            <Baby className="h-4 w-4 mr-2" />
            Baby Photos
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MemoriesHeader;
