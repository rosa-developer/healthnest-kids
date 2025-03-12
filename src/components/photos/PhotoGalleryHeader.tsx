
import React from 'react';
import { Camera, Image } from 'lucide-react';

const PhotoGalleryHeader: React.FC = () => {
  return (
    <div className="photo-gallery-header bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white max-w-2xl mx-auto text-center">
        <div className="flex items-center gap-2 mb-2">
          <Camera className="h-6 w-6" />
          <Image className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Capture Every Moment</h1>
        <p className="text-white/90">Store and organize your precious memories in one beautiful gallery</p>
      </div>
    </div>
  );
};

export default PhotoGalleryHeader;
