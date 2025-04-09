
import React, { useState } from 'react';
import MemoryCard from '@/components/common/MemoryCard';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AudioMemories: React.FC = () => {
  const { toast } = useToast();
  const [memories] = useState([
    {
      id: "audio1",
      title: "First Giggle",
      date: "February 2, 2023",
      audioSrc: "",
      description: "Emma's first real giggle when playing peek-a-boo!"
    },
    {
      id: "audio2",
      title: "Babbling 'Mama'",
      date: "March 15, 2023",
      audioSrc: "",
      description: "Emma started making 'mama' sounds today. Not quite saying it yet, but getting close!"
    },
    {
      id: "audio3",
      title: "Singing Along",
      date: "April 5, 2023",
      audioSrc: "",
      description: "Emma trying to sing along to her favorite lullaby. So cute!"
    }
  ]);

  const handleAddAudioMemory = () => {
    toast({
      title: "Add Voice Memory",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-4">
        <Button 
          onClick={handleAddAudioMemory}
          className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
          size="sm"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Voice Memory
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {memories.map(memory => (
          <MemoryCard
            key={memory.id}
            id={memory.id}
            title={memory.title}
            date={memory.date}
            audioSrc={memory.audioSrc}
            description={memory.description}
          />
        ))}
      </div>
      
      <div className="mt-6 p-6 bg-muted/30 rounded-xl border border-border dashed flex flex-col items-center text-center">
        <p className="text-muted-foreground mb-2">Record special sounds, giggles, or your baby's first words!</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddAudioMemory}
          className="mt-2"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Record New Memory
        </Button>
      </div>
    </div>
  );
};

export default AudioMemories;
