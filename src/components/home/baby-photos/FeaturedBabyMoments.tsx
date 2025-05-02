
import React from 'react';
import { Image } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FeaturedBabyMoments = () => {
  const featuredPhotos = [
    {
      src: "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png",
      fallbackSrc: "/placeholder.svg",
      alt: "Baby Emma's first smile"
    },
    {
      src: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma playing with toys"
    },
    {
      src: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      fallbackSrc: "/placeholder.svg",
      alt: "Family time with Emma"
    },
    {
      src: "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma's first bath time"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    console.log(`Image failed to load, using fallback: ${fallbackSrc}`);
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Image className="h-5 w-5 mr-2 text-primary-pink" />
        Featured Baby Moments
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {featuredPhotos.map((photo, index) => (
          <div 
            key={`featured-${index}`} 
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <AspectRatio ratio={4/3}>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                onError={(e) => handleImageError(e, photo.fallbackSrc)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBabyMoments;
