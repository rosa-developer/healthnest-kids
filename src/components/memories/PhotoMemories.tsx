
import React, { useState } from 'react';
import MemoryCard from '@/components/common/MemoryCard';
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PhotoMemories: React.FC = () => {
  const { toast } = useToast();
  const [memories] = useState([
    {
      id: "photo1",
      title: "First Smile",
      date: "January 15, 2023",
      imageSrc: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      description: "Emma's first real smile! Her eyes lit up when I sang to her."
    },
    {
      id: "photo2",
      title: "Bath Time Fun",
      date: "February 8, 2023",
      imageSrc: "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png",
      description: "Emma loves splashing in the bath. So many bubbles and giggles!"
    },
    {
      id: "photo3",
      title: "First Time at the Park",
      date: "March 22, 2023",
      imageSrc: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      description: "Our first family trip to the park. Emma was fascinated by the trees."
    },
    {
      id: "photo4",
      title: "Playing with Blocks",
      date: "April 10, 2023",
      imageSrc: "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png",
      description: "Emma's getting so good at stacking her blocks! She can stack 3 now."
    },
    {
      id: "photo5",
      title: "Nap Time with Teddy",
      date: "April 18, 2023",
      imageSrc: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      description: "Emma fell asleep hugging her favorite teddy bear. So precious!"
    }
  ]);

  const handleAddPhotoMemory = () => {
    toast({
      title: "Add Photo Memory",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-4">
        <Button 
          onClick={handleAddPhotoMemory}
          className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
          size="sm"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Photo Memory
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map(memory => (
          <MemoryCard
            key={memory.id}
            id={memory.id}
            title={memory.title}
            date={memory.date}
            imageSrc={memory.imageSrc}
            description={memory.description}
          />
        ))}
      </div>
      
      <div className="mt-6 p-6 bg-muted/30 rounded-xl border border-border dashed flex flex-col items-center text-center">
        <p className="text-muted-foreground mb-2">Capture more precious moments with your little one!</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddPhotoMemory}
          className="mt-2"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload New Photos
        </Button>
      </div>
    </div>
  );
};

export default PhotoMemories;
