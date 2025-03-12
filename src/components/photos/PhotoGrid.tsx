
import React from 'react';
import { Card } from "@/components/ui/card";
import { Edit2, Trash2 } from 'lucide-react';
import { Photo, photoCategories } from '@/types/photo';

interface PhotoGridProps {
  photos: Photo[];
  onEdit: (photo: Photo) => void;
  onDelete: (id: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onEdit, onDelete }) => {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map(photo => (
        <Card key={photo.id} className="border border-border shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300">
          <div className="relative">
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => onEdit(photo)}
                className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                aria-label="Edit photo"
              >
                <Edit2 className="h-4 w-4 text-healthnest-primary" />
              </button>
              <button 
                onClick={() => onDelete(photo.id)}
                className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                aria-label="Delete photo"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <p className="font-medium truncate">{photo.caption}</p>
            <p className="text-xs text-muted-foreground">
              {photoCategories.find(c => c.id === photo.category)?.name || 'Uncategorized'}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PhotoGrid;
