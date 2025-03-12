
import React from 'react';
import { Card } from "@/components/ui/card";
import { Edit2, Star, Trash2 } from 'lucide-react';
import { Photo, photoCategories } from '@/types/photo';
import { Badge } from "@/components/ui/badge";

interface PhotoGridProps {
  photos: Photo[];
  onEdit: (photo: Photo) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ 
  photos, 
  onEdit, 
  onDelete,
  onToggleFavorite 
}) => {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map(photo => {
        const category = photoCategories.find(c => c.id === photo.category);
        
        return (
          <Card key={photo.id} className="overflow-hidden group hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => onToggleFavorite(photo.id)}
                    className={`p-1.5 ${photo.isFavorite ? 'bg-yellow-400' : 'bg-white/90'} rounded-full shadow-md hover:bg-white`}
                    aria-label={photo.isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Star className={`h-4 w-4 ${photo.isFavorite ? 'text-white' : 'text-muted-foreground'}`} />
                  </button>
                  <button 
                    onClick={() => onEdit(photo)}
                    className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                    aria-label="Edit photo"
                  >
                    <Edit2 className="h-4 w-4 text-primary" />
                  </button>
                  <button 
                    onClick={() => onDelete(photo.id)}
                    className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                    aria-label="Delete photo"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </button>
                </div>
              </div>
              {category && (
                <Badge className="absolute bottom-2 left-2 bg-primary/80 hover:bg-primary/80">
                  {category.name}
                </Badge>
              )}
              {photo.isFavorite && (
                <div className="absolute top-2 left-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium line-clamp-1">{photo.caption}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Added {new Date(photo.date).toLocaleDateString()}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
