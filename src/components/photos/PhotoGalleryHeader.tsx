
import React from 'react';

const PhotoGalleryHeader: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white">
        <h1 className="text-3xl font-bold">Photo Gallery</h1>
        <p className="text-white/80 mt-2">Store and organize your precious memories</p>
      </div>
    </div>
  );
};

export default PhotoGalleryHeader;
