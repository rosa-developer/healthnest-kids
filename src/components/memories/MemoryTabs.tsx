
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhotoMemories from './PhotoMemories';
import AudioMemories from './AudioMemories';
import MilestoneMemories from './MilestoneMemories';

const MemoryTabs: React.FC = () => {
  return (
    <Tabs defaultValue="photos" className="mb-6">
      <TabsList className="grid grid-cols-3 w-full bg-muted rounded-lg p-1">
        <TabsTrigger value="photos" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
          Photos
        </TabsTrigger>
        <TabsTrigger value="audio" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
          Voice
        </TabsTrigger>
        <TabsTrigger value="milestones" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
          Milestones
        </TabsTrigger>
      </TabsList>

      <TabsContent value="photos" className="mt-4 animate-fade-in">
        <PhotoMemories />
      </TabsContent>

      <TabsContent value="audio" className="mt-4 animate-fade-in">
        <AudioMemories />
      </TabsContent>

      <TabsContent value="milestones" className="mt-4 animate-fade-in relative">
        <MilestoneMemories />
      </TabsContent>
    </Tabs>
  );
};

export default MemoryTabs;
