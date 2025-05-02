
import React from 'react';
import { Card } from "@/components/ui/card";
import { Photo } from '@/types/photo';

interface FeaturedPhotosProps {
  photos: Photo[];
}

const FeaturedPhotos: React.FC<FeaturedPhotosProps> = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load featured image`);
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Featured Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.slice(0, 3).map(photo => (
          <Card key={`featured-${photo.id}`} className="overflow-hidden group">
            <div className="relative aspect-video">
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium truncate">{photo.caption}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPhotos;
