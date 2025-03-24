
import React from 'react';
import MemoryCard from '@/components/common/MemoryCard';

const AudioMemories: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <MemoryCard
        id="audio1"
        title="First Giggle"
        date="February 2, 2023"
        audioSrc=""
        description="Emma's first real giggle when playing peek-a-boo!"
      />
      <MemoryCard
        id="audio2"
        title="Babbling 'Mama'"
        date="March 15, 2023"
        audioSrc=""
        description="Emma started making 'mama' sounds today. Not quite saying it yet, but getting close!"
      />
      <MemoryCard
        id="audio3"
        title="Singing Along"
        date="April 5, 2023"
        audioSrc=""
        description="Emma trying to sing along to her favorite lullaby. So cute!"
      />
    </div>
  );
};

export default AudioMemories;
