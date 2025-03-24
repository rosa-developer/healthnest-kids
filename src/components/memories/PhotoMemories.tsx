
import React from 'react';
import MemoryCard from '@/components/common/MemoryCard';

const PhotoMemories: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MemoryCard
        id="photo1"
        title="First Smile"
        date="January 15, 2023"
        imageSrc="/1.jpg"
        description="Emma's first real smile! Her eyes lit up when I sang to her."
      />
      <MemoryCard
        id="photo2"
        title="Bath Time Fun"
        date="February 8, 2023"
        imageSrc="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png"
        description="Emma loves splashing in the bath. So many bubbles and giggles!"
      />
      <MemoryCard
        id="photo3"
        title="First Time at the Park"
        date="March 22, 2023"
        imageSrc="/1.jpg"
        description="Our first family trip to the park. Emma was fascinated by the trees."
      />
      <MemoryCard
        id="photo4"
        title="Playing with Blocks"
        date="April 10, 2023"
        imageSrc="/1.jpg"
        description="Emma's getting so good at stacking her blocks! She can stack 3 now."
      />
      <MemoryCard
        id="photo5"
        title="Nap Time with Teddy"
        date="April 18, 2023"
        imageSrc="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png"
        description="Emma fell asleep hugging her favorite teddy bear. So precious!"
      />
    </div>
  );
};

export default PhotoMemories;
