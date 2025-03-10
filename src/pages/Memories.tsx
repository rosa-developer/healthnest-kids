
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import MemoryCard from '@/components/common/MemoryCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Camera, Mic, Calendar, Filter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Memories = () => {
  const { toast } = useToast();
  
  const handleAddMemory = () => {
    toast({
      title: "Add Memory",
      description: "This feature will be available in the next update!",
    });
  };

  // Placeholder for images - in a real app, these would be real URLs
  const placeholderImage1 = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  const placeholderImage2 = "https://images.unsplash.com/photo-1557939574-a2cb399f443f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80";
  const placeholderImage3 = "https://images.unsplash.com/photo-1607077792448-17b60bcdb072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="main-container">
      <PageTransition>
        <div className="flex items-center justify-between mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary">Emma's Memories</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button 
              onClick={handleAddMemory} 
              size="sm"
              className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
            >
              <Camera className="h-4 w-4 mr-2" />
              Add Memory
            </Button>
          </div>
        </div>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <MemoryCard
                id="photo1"
                title="First Smile"
                date="January 15, 2023"
                imageSrc={placeholderImage1}
                description="Emma's first real smile! Her eyes lit up when I sang to her."
              />
              <MemoryCard
                id="photo2"
                title="Bath Time Fun"
                date="February 8, 2023"
                imageSrc={placeholderImage2}
                description="Emma loves splashing in the bath. So many bubbles and giggles!"
              />
              <MemoryCard
                id="photo3"
                title="First Time at the Park"
                date="March 22, 2023"
                imageSrc={placeholderImage3}
                description="Our first family trip to the park. Emma was fascinated by the trees."
              />
              <MemoryCard
                id="photo4"
                title="Playing with Blocks"
                date="April 10, 2023"
                imageSrc={placeholderImage1}
                description="Emma's getting so good at stacking her blocks! She can stack 3 now."
              />
              <MemoryCard
                id="photo5"
                title="Nap Time with Teddy"
                date="April 18, 2023"
                imageSrc={placeholderImage2}
                description="Emma fell asleep hugging her favorite teddy bear. So precious!"
              />
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-4 animate-fade-in">
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
          </TabsContent>

          <TabsContent value="milestones" className="mt-4 animate-fade-in">
            <div className="relative pl-6 border-l-2 border-healthnest-soft-blue">
              <div className="mb-8 relative">
                <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
                <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="chip bg-healthnest-soft-purple text-purple-500 mb-2">
                        Motor Skill
                      </div>
                      <h3 className="font-medium text-lg">First Crawl</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">April 2, 2023</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Emma started crawling today! She was so excited to move around on her own.
                  </p>
                </div>
              </div>

              <div className="mb-8 relative">
                <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
                <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="chip bg-healthnest-soft-green text-green-500 mb-2">
                        Food
                      </div>
                      <h3 className="font-medium text-lg">First Solid Food</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">March 20, 2023</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Emma tried sweet potatoes for the first time and loved them!
                  </p>
                </div>
              </div>

              <div className="mb-8 relative">
                <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
                <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="chip bg-healthnest-soft-pink text-pink-500 mb-2">
                        Social
                      </div>
                      <h3 className="font-medium text-lg">First Smile</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">January 15, 2023</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Emma smiled for the first time! It was during her morning feeding.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PageTransition>
    </div>
  );
};

export default Memories;
