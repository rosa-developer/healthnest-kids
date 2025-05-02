
import React, { useState } from 'react';
import MemoryCard from '@/components/common/MemoryCard';
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, Baby, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

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
      title: "Add Baby Photo Memory",
      description: "This feature will be available in the next update!",
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Failed to load memory image");
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="bg-primary-pink/20 p-2 rounded-full mr-3">
            <Baby className="h-5 w-5 text-primary-pink" />
          </div>
          <h3 className="text-lg font-semibold">Baby Photo Memories</h3>
        </div>
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
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <MemoryCard
              id={memory.id}
              title={memory.title}
              date={memory.date}
              imageSrc={memory.imageSrc}
              description={memory.description}
              onImageError={handleImageError}
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-muted/30 rounded-xl border border-border dashed flex flex-col items-center text-center"
      >
        <div className="bg-background/80 p-3 rounded-full mb-4 shadow-soft">
          <Heart className="h-5 w-5 text-primary-pink" />
        </div>
        <h4 className="text-lg font-medium mb-2">Capture Precious Baby Moments</h4>
        <p className="text-muted-foreground mb-4 max-w-md">
          Add more special moments to your baby's photo collection to cherish forever.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddPhotoMemory}
          className="border-primary-pink/50 text-primary-pink hover:bg-primary-pink/10"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload New Baby Photos
        </Button>
      </motion.div>
    </div>
  );
};

export default PhotoMemories;
