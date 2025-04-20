
import React, { useState } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import MemoriesHeader from '@/components/memories/MemoriesHeader';
import MemoryTabs from '@/components/memories/MemoryTabs';
import VoiceRecorder from '@/components/common/voice-recorder';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

const Memories = () => {
  const { toast } = useToast();
  const [showRecorder, setShowRecorder] = useState(false);
  
  const handleAddMemory = () => {
    setShowRecorder(true);
  };
  
  const handleSaveAudio = (audioBlob: Blob, duration: number) => {
    // In a real app, we would save this to storage
    const audioUrl = URL.createObjectURL(audioBlob);
    console.log('Audio saved:', { audioUrl, duration });
    
    toast({
      title: "Voice Memory Saved",
      description: `Audio recording (${Math.round(duration)}s) has been saved to your memories.`,
    });
    
    setShowRecorder(false);
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
        <div className="flex flex-col gap-4">
          <MemoriesHeader handleAddMemory={handleAddMemory} />
          
          <div className="glass-panel p-6 mb-6 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-pink/10 rounded-full blur-xl"></div>
            <h2 className="text-xl font-medium mb-4">Create New Memory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                className="border border-dashed border-muted-foreground/40 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={handleAddMemory}
              >
                <PlusCircle className="h-10 w-10 text-primary-pink mb-3" />
                <p className="text-sm font-medium">Voice Memory</p>
                <p className="text-xs text-muted-foreground">Record a special moment</p>
              </div>
              <div 
                className="border border-dashed border-muted-foreground/40 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => toast({
                  title: "Coming Soon",
                  description: "Photo memory uploads will be available in the next update!",
                })}
              >
                <PlusCircle className="h-10 w-10 text-primary-blue mb-3" />
                <p className="text-sm font-medium">Photo Memory</p>
                <p className="text-xs text-muted-foreground">Upload special photos</p>
              </div>
              <div 
                className="border border-dashed border-muted-foreground/40 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => toast({
                  title: "Coming Soon",
                  description: "Written memories will be available in the next update!",
                })}
              >
                <PlusCircle className="h-10 w-10 text-primary-purple mb-3" />
                <p className="text-sm font-medium">Written Memory</p>
                <p className="text-xs text-muted-foreground">Note down your thoughts</p>
              </div>
            </div>
          </div>
          
          <MemoryTabs />
        </div>
      </PageTransition>
      
      <Dialog open={showRecorder} onOpenChange={setShowRecorder}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Record Voice Memory</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <VoiceRecorder onSave={handleSaveAudio} />
          </div>
          <div className="text-center text-xs text-muted-foreground mt-2">
            Tip: Record special sounds, giggles, or your baby's first words!
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Memories;
