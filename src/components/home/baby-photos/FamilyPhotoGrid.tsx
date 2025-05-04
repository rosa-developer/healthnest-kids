
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Camera, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const FamilyPhotoGrid = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activePhoto, setActivePhoto] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const familyPhotos = [
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Baby Emma's first smile",
      featured: true
    },
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma playing with toys",
      featured: true
    },
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma's playtime with teddy",
      featured: false
    },
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma's bath time fun",
      featured: true
    },
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Emma's first steps attempt",
      featured: false
    },
    {
      src: "/baby-emma.jpg",
      fallbackSrc: "/placeholder.svg",
      alt: "Family time with Emma",
      featured: false
    }
  ];
  
  useEffect(() => {
    // Check if images exist
    const checkImages = async () => {
      try {
        await Promise.all(
          familyPhotos.map(photo => 
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = photo.src;
            })
          )
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error checking images:", error);
        toast({
          title: "Image loading issue",
          description: "Some images may not display properly",
          variant: "destructive",
        });
      }
    };
    
    checkImages();
  }, [toast]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    console.log(`Image failed to load, using fallback: ${fallbackSrc}`);
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <div className="mt-2">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Camera className="h-4 w-4 mr-2 text-primary-blue" />
        Happy Family Moments
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {familyPhotos.map((photo, index) => (
          <div 
            key={index} 
            className={cn(
              "rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer",
              activePhoto === index && "ring-2 ring-primary-blue ring-offset-2 ring-offset-background"
            )}
            onClick={() => setActivePhoto(index)}
          >
            <AspectRatio ratio={1/1}>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                onError={(e) => handleImageError(e, photo.fallbackSrc)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-2">
                <p className="text-white text-xs font-medium truncate w-full">{photo.alt}</p>
              </div>
              {activePhoto === index && (
                <div className="absolute top-2 right-2 h-6 w-6 bg-primary-blue text-white rounded-full flex items-center justify-center">
                  <Heart className="h-3 w-3" fill="white" />
                </div>
              )}
            </AspectRatio>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button 
          className="bg-primary-pink/90 hover:bg-primary-pink text-white shadow-md transition-all duration-300 hover:shadow-lg rounded-full group"
          onClick={() => navigate('/memories')}
        >
          <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          Add New Photos
        </Button>
      </div>
    </div>
  );
};

export default FamilyPhotoGrid;
