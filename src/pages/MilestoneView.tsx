
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Check, Edit, Clock, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone } from '@/types/milestone';
import { mockMilestones } from '@/data/milestoneData';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import TimelineCard from '@/components/common/TimelineCard';

const MilestoneView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [milestone, setMilestone] = useState<Milestone | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundMilestone = mockMilestones.find(m => m.id === id);
      if (foundMilestone) {
        setMilestone(foundMilestone);
      } else {
        toast({
          title: "Milestone Not Found",
          description: "The milestone you're looking for doesn't exist",
          variant: "destructive"
        });
        navigate('/milestones');
      }
    }
  }, [id, navigate, toast]);
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleEdit = () => {
    toast({
      title: "Edit Milestone",
      description: "This feature will be available in the next update!",
    });
  };
  
  if (!milestone) {
    return (
      <div className="main-container">
        <PageTransition>
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Loading milestone...</p>
          </div>
        </PageTransition>
      </div>
    );
  }
  
  return (
    <div className="main-container">
      <PageTransition>
        <div className="page-container">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Milestones
          </Button>
          
          <div className="section-title">
            <div className="section-title-bar" />
            <h1 className="section-title-text">Milestone Details</h1>
          </div>
          
          <Card className="glass-panel mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-purple flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{milestone.title}</h2>
                    <p className="text-muted-foreground">{milestone.category} Development</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleEdit}
                  className="flex items-center gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age Range</p>
                    <p className="font-medium">{milestone.ageRange}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium flex items-center">
                      {milestone.completed ? (
                        <><Check className="h-4 w-4 text-green-500 mr-1" /> Completed</>
                      ) : (
                        'Not Completed'
                      )}
                    </p>
                  </div>
                </div>
                
                {milestone.completed && milestone.completedDate && (
                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Completed Date</p>
                      <p className="font-medium">{new Date(milestone.completedDate).toLocaleDateString('en-US', {
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric'
                      })}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
              
              {milestone.notes && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Notes</h3>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <p>{milestone.notes}</p>
                  </div>
                </div>
              )}
              
              {milestone.media && milestone.media.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Media</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {milestone.media.map((item, index) => (
                      <div key={index} className="rounded-lg border overflow-hidden">
                        {item.type === 'image' ? (
                          <img src={item.url} alt="Milestone" className="w-full h-auto" />
                        ) : item.type === 'audio' ? (
                          <div className="p-4 flex items-center justify-center">
                            <audio controls src={item.url} className="w-full" />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="section-title mt-10">
            <div className="section-title-bar" />
            <h2 className="section-title-text">Related Activities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimelineCard
              title="First Crawling Attempt"
              date="April 8, 2023"
              type="milestone"
              description="Emma tried to crawl for the first time during tummy time. She pushed up on her hands and knees and rocked back and forth."
            />
            
            <TimelineCard
              title="Emma Learning to Crawl"
              date="April 12, 2023"
              type="memory"
              description="Emma is making progress with her crawling! She can now move forward a few inches at a time."
              imageSrc="/baby-emma.jpg"
            />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default MilestoneView;
