
import React from 'react';
import { Card } from "@/components/ui/card";
import { Photo } from '@/types/photo';
import { Heart, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedPhotosProps {
  photos: Photo[];
}

const FeaturedPhotos: React.FC<FeaturedPhotosProps> = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }

  const featuredPhotos = photos.filter(photo => photo.isFavorite).length > 0 
    ? photos.filter(photo => photo.isFavorite).slice(0, 3) 
    : photos.slice(0, 3);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load featured image`);
    e.currentTarget.src = "/baby-emma.jpg";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Heart className="h-5 w-5 mr-2 text-primary-pink" />
        Featured Baby Photos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredPhotos.map(photo => (
          <motion.div
            key={`featured-${photo.id}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden group relative shadow-md hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-medium truncate">{photo.caption}</p>
                  <p className="text-white/70 text-sm">
                    {new Date(photo.date).toLocaleDateString()}
                  </p>
                </div>
                
                {photo.isFavorite && (
                  <div className="absolute top-2 right-2">
                    <Heart className="h-5 w-5 text-primary-pink fill-primary-pink drop-shadow-md" />
                  </div>
                )}
                
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedPhotos;
