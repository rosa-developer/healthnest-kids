
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Clock, Star } from 'lucide-react';
import { SortOption } from '@/hooks/usePhotoManagement';

interface PhotoSortControlsProps {
  sortOption: SortOption;
  setSortOption: (value: SortOption) => void;
}

const PhotoSortControls: React.FC<PhotoSortControlsProps> = ({ 
  sortOption,
  setSortOption
}) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <Select
          value={sortOption}
          onValueChange={(value) => setSortOption(value as SortOption)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Newest</span>
              </div>
            </SelectItem>
            <SelectItem value="oldest">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Oldest</span>
              </div>
            </SelectItem>
            <SelectItem value="favorites">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Favorites</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PhotoSortControls;
