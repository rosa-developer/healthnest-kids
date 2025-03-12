
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
    <div className="photo-masonry-layout">
      {photos.map(photo => {
        const category = photoCategories.find(c => c.id === photo.category);
        
        return (
          <div key={photo.id} className="photo-masonry-item animate-fade-in" style={{ animationDelay: `${Math.random() * 0.5}s` }}>
            <Card className="photo-card group overflow-hidden">
              <div className="relative">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full photo-hover-overlay photo-gradient-overlay">
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button 
                      onClick={() => onToggleFavorite(photo.id)}
                      className="photo-button"
                      aria-label={photo.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Star className={`h-4 w-4 ${photo.isFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                    </button>
                    <button 
                      onClick={() => onEdit(photo)}
                      className="photo-button"
                      aria-label="Edit photo"
                    >
                      <Edit2 className="h-4 w-4 text-primary" />
                    </button>
                    <button 
                      onClick={() => onDelete(photo.id)}
                      className="photo-button"
                      aria-label="Delete photo"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                  {category && (
                    <Badge className="absolute bottom-2 left-2 photo-category-badge">
                      {category.name}
                    </Badge>
                  )}
                </div>
                {photo.isFavorite && (
                  <div className="absolute top-2 left-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-md" />
                  </div>
                )}
              </div>
              <div className="photo-card-content">
                <h3 className="font-medium line-clamp-1">{photo.caption}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Added {new Date(photo.date).toLocaleDateString()}
                </p>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
