
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter, Camera, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface MemoriesHeaderProps {
  handleAddMemory: () => void;
}

const MemoriesHeader: React.FC<MemoriesHeaderProps> = ({ handleAddMemory }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="chip bg-healthnest-soft-blue text-healthnest-primary">Emma's Memories</div>
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
          <Camera className="h-4 w-4 mr-2" />
          Add Memory
        </Button>
        <Button 
          size="sm"
          className="bg-green-500 text-white hover:bg-green-600"
          asChild
        >
          <Link to="/photos">
            <Upload className="h-4 w-4 mr-2" />
            Photo Gallery
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MemoriesHeader;
