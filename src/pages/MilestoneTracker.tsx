
import React, { useState } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChildProfileSelector from '@/components/common/ChildProfileSelector';
import VoiceRecorder from '@/components/common/VoiceRecorder';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Check, 
  Calendar, 
  Camera, 
  FilePlus, 
  Mic, 
  Edit, 
  CheckCircle2,
  Circle,
  ArrowRight
} from 'lucide-react';

// Define the Milestone type to avoid TypeScript errors
type Milestone = {
  id: string;
  category: string;
  title: string;
  ageRange: string;
  completed: boolean;
  date?: string;
  notes?: string;
};

// Mock milestone categories and items for demo
const milestoneCategories = [
  {
    id: 'physical',
    name: 'Physical Development',
    icon: Brain,
    color: 'bg-healthnest-soft-purple text-purple-500',
  },
  {
    id: 'cognitive',
    name: 'Cognitive Development',
    icon: Brain,
    color: 'bg-healthnest-soft-blue text-healthnest-primary',
  },
  {
    id: 'social',
    name: 'Social & Emotional',
    icon: Brain,
    color: 'bg-healthnest-soft-pink text-pink-500',
  },
  {
    id: 'language',
    name: 'Language & Communication',
    icon: Brain,
    color: 'bg-healthnest-soft-green text-green-500',
  },
];

// Mock milestone data for 6-9 month old
const mockMilestones: Milestone[] = [
  {
    id: '1',
    category: 'physical',
    title: 'Sits without support',
    ageRange: '6-8 months',
    completed: true,
    date: '2023-04-02',
    notes: 'Emma started sitting without support during playtime.'
  },
  {
    id: '2',
    category: 'physical',
    title: 'Crawls',
    ageRange: '7-10 months',
    completed: true,
    date: '2023-04-10',
    notes: 'Began army-crawling, then progressed to hands-and-knees crawling.'
  },
  {
    id: '3',
    category: 'physical',
    title: 'Pulls to stand',
    ageRange: '8-10 months',
    completed: false
  },
  {
    id: '4',
    category: 'cognitive',
    title: 'Looks for hidden objects',
    ageRange: '7-9 months',
    completed: true,
    date: '2023-03-15',
    notes: 'Started looking for toys when they were hidden under a blanket.'
  },
  {
    id: '5',
    category: 'cognitive',
    title: 'Explores objects',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-02-20',
    notes: 'Loves to examine toys, put them in mouth, and bang them together.'
  },
  {
    id: '6',
    category: 'social',
    title: 'Shows anxiety with strangers',
    ageRange: '6-10 months',
    completed: false
  },
  {
    id: '7',
    category: 'language',
    title: 'Babbles with consonant sounds',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-03-10',
    notes: 'Started making "ba", "da", and "ma" sounds regularly.'
  },
  {
    id: '8',
    category: 'language',
    title: 'Responds to own name',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-02-28',
    notes: 'Consistently turns head when called by name.'
  }
];

const MilestoneTracker: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('physical');
  const [milestones, setMilestones] = useState<Milestone[]>(mockMilestones);
  const [showRecorder, setShowRecorder] = useState(false);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(null);
  const [milestoneNote, setMilestoneNote] = useState('');
  
  const filteredMilestones = milestones.filter(
    milestone => milestone.category === activeCategory
  );
  
  const getCompletedCount = (categoryId: string) => {
    return milestones.filter(
      m => m.category === categoryId && m.completed
    ).length;
  };
  
  const getTotalCount = (categoryId: string) => {
    return milestones.filter(m => m.category === categoryId).length;
  };
  
  const handleAddRecord = () => {
    toast({
      title: "Add Milestone",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleToggleMilestone = (id: string) => {
    setMilestones(milestones.map(milestone => {
      if (milestone.id === id) {
        // Create a new copy of the milestone with updated properties
        const updatedMilestone: Milestone = {
          ...milestone,
          completed: !milestone.completed
        };
        
        // Add date if completing the milestone
        if (!milestone.completed) {
          updatedMilestone.date = new Date().toISOString().split('T')[0];
        }
        
        return updatedMilestone;
      }
      return milestone;
    }));
    
    const milestone = milestones.find(m => m.id === id);
    if (milestone && !milestone.completed) {
      toast({
        title: "Milestone Achieved!",
        description: `"${milestone.title}" has been marked as completed.`
      });
    }
  };
  
  const handleEditNotes = (id: string) => {
    const milestone = milestones.find(m => m.id === id);
    if (milestone) {
      setSelectedMilestoneId(id);
      setMilestoneNote(milestone.notes || '');
    }
  };
  
  const handleSaveNotes = () => {
    if (selectedMilestoneId) {
      setMilestones(milestones.map(milestone => {
        if (milestone.id === selectedMilestoneId) {
          return {
            ...milestone,
            notes: milestoneNote
          };
        }
        return milestone;
      }));
      
      setSelectedMilestoneId(null);
      setMilestoneNote('');
      
      toast({
        title: "Notes Saved",
        description: "Your milestone notes have been updated."
      });
    }
  };
  
  const handleCaptureAudio = () => {
    setShowRecorder(true);
  };
  
  const handleSaveAudio = (audioBlob: Blob, duration: number) => {
    // In a real app, you'd save this to storage and link to the milestone
    setShowRecorder(false);
    toast({
      title: "Audio Saved",
      description: `Your ${duration} second recording has been saved to this milestone.`,
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="chip bg-healthnest-soft-purple text-purple-500">
              Milestone Tracker
            </div>
            <ChildProfileSelector />
          </div>
          
          <Card className="border border-border shadow-soft mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Emma's Milestones</h3>
                    <p className="text-sm text-muted-foreground">8 months old</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-healthnest-primary"
                    onClick={handleCaptureAudio}
                  >
                    <Mic className="h-4 w-4 mr-1" />
                    Record
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-healthnest-primary"
                    onClick={handleAddRecord}
                  >
                    <Camera className="h-4 w-4 mr-1" />
                    Capture
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {milestoneCategories.map(category => (
                  <div 
                    key={category.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-white border-healthnest-primary shadow-soft' 
                        : 'bg-healthnest-neutral border-transparent hover:bg-healthnest-neutral-dark'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className={`h-8 w-8 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                      <category.icon className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-medium line-clamp-1">{category.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {getCompletedCount(category.id)}/{getTotalCount(category.id)} completed
                    </p>
                  </div>
                ))}
              </div>
              
              {showRecorder && (
                <div className="mt-4">
                  <VoiceRecorder onSave={handleSaveAudio} />
                </div>
              )}
            </CardContent>
          </Card>
          
          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList className="grid grid-cols-2 w-full bg-muted rounded-lg p-1">
              <TabsTrigger value="upcoming" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="completed" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Completed
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-4 animate-fade-in">
              <Card className="border border-border shadow-soft">
                <CardHeader className="pb-2 flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-healthnest-primary" />
                    {milestoneCategories.find(c => c.id === activeCategory)?.name} Milestones
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-healthnest-primary"
                    onClick={handleAddRecord}
                  >
                    <FilePlus className="h-4 w-4 mr-1" />
                    Add Custom
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredMilestones.filter(m => !m.completed).map(milestone => (
                      <div key={milestone.id} className="p-3 border border-border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6 rounded-full hover:bg-healthnest-soft-blue"
                                onClick={() => handleToggleMilestone(milestone.id)}
                              >
                                <Circle className="h-5 w-5 text-muted-foreground" />
                              </Button>
                              <h4 className="font-medium">{milestone.title}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground ml-8">
                              Typically achieved at {milestone.ageRange}
                            </p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => handleEditNotes(milestone.id)}
                          >
                            <Edit className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                        
                        {selectedMilestoneId === milestone.id && (
                          <div className="mt-3 ml-8">
                            <div className="flex gap-2 mb-2">
                              <Input
                                placeholder="Add notes about this milestone"
                                value={milestoneNote}
                                onChange={(e) => setMilestoneNote(e.target.value)}
                                className="text-sm"
                              />
                              <Button size="sm" onClick={handleSaveNotes}>Save</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {filteredMilestones.filter(m => !m.completed).length === 0 && (
                      <div className="text-center py-6">
                        <Check className="h-12 w-12 mx-auto text-green-500 mb-2" />
                        <p className="text-muted-foreground">All milestones in this category completed!</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-4 animate-fade-in">
              <Card className="border border-border shadow-soft">
                <CardHeader className="pb-2 flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    Completed Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredMilestones.filter(m => m.completed).map(milestone => (
                      <div key={milestone.id} className="p-3 border border-border rounded-lg bg-healthnest-soft-green/10">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6 rounded-full hover:bg-healthnest-soft-green"
                                onClick={() => handleToggleMilestone(milestone.id)}
                              >
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              </Button>
                              <h4 className="font-medium">{milestone.title}</h4>
                            </div>
                            <div className="flex justify-between ml-8">
                              <p className="text-sm text-muted-foreground">
                                Achieved on {new Date(milestone.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => handleEditNotes(milestone.id)}
                          >
                            <Edit className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                        
                        {milestone.notes && (
                          <div className="mt-2 ml-8 text-sm text-muted-foreground">
                            {milestone.notes}
                          </div>
                        )}
                        
                        {selectedMilestoneId === milestone.id && (
                          <div className="mt-3 ml-8">
                            <div className="flex gap-2 mb-2">
                              <Input
                                placeholder="Add notes about this milestone"
                                value={milestoneNote}
                                onChange={(e) => setMilestoneNote(e.target.value)}
                                className="text-sm"
                              />
                              <Button size="sm" onClick={handleSaveNotes}>Save</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {filteredMilestones.filter(m => m.completed).length === 0 && (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No completed milestones in this category yet.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card className="border border-border shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-healthnest-primary" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-healthnest-soft-blue rounded-lg">
                  <h4 className="font-medium mb-1">9-12 Month Milestones</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs text-healthnest-primary">•</span>
                      </div>
                      <p className="text-sm">Stands alone without support</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs text-healthnest-primary">•</span>
                      </div>
                      <p className="text-sm">Takes first steps</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs text-healthnest-primary">•</span>
                      </div>
                      <p className="text-sm">Says first word</p>
                    </li>
                  </ul>
                </div>
                
                <Button variant="link" className="text-healthnest-primary p-0 h-auto">
                  View all upcoming milestones <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </div>
  );
};

export default MilestoneTracker;
