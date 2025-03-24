
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import MemoriesHeader from '@/components/memories/MemoriesHeader';
import MemoryTabs from '@/components/memories/MemoryTabs';

const Memories = () => {
  const { toast } = useToast();
  
  const handleAddMemory = () => {
    toast({
      title: "Add Memory",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="main-container relative">
      <img 
        src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png" 
        alt="Pastel baby growth chart" 
        className="absolute top-10 right-0 w-52 opacity-30 pointer-events-none"
        onError={(e) => {
          console.error("Failed to load decorative image");
          e.currentTarget.style.display = 'none';
        }}
      />
      
      <PageTransition>
        <MemoriesHeader handleAddMemory={handleAddMemory} />
        <MemoryTabs />
      </PageTransition>
    </div>
  );
};

export default Memories;
