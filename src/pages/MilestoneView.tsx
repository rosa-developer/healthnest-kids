import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMilestones } from '@/data/milestoneData';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, Calendar, MessageCircle, Camera, Mic, Edit, CheckCircle2, Circle } from 'lucide-react';

const MilestoneView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const milestone = mockMilestones.find(m => m.id === id);
  
  if (!milestone) {
    return (
      <div className="container mx-auto pt-6 pb-20">
        <Button variant="outline" onClick={() => navigate('/milestones')} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Milestones
        </Button>
        <Card>
          <CardContent className="py-10">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Milestone Not Found</h2>
              <p className="text-muted-foreground">The milestone you're looking for doesn't exist</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto pt-6 pb-20">
      <Button variant="outline" onClick={() => navigate('/milestones')} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Milestones
      </Button>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{milestone.title}</CardTitle>
                {milestone.completed && (
                  <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Completed
                  </div>
                )}
              </div>
              <CardDescription className="flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                Expected age: {milestone.ageRange}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground mb-4">{milestone.description}</p>
              
              {milestone.completed && milestone.completedDate && (
                <div className="mb-4 p-3 bg-green-50 rounded-md flex items-center text-green-800">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  <div>
                    <span className="font-medium">Achieved on:</span> {new Date(milestone.completedDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              )}
              
              {milestone.notes && (
                <div className="mb-4 p-4 bg-gray-50 rounded-md">
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-5 w-5 mr-2 text-indigo-500" />
                    <h3 className="font-medium">Notes</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.notes}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-1.5" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-1.5" />
                Add Photo
              </Button>
              <Button variant="outline" size="sm">
                <Mic className="h-4 w-4 mr-1.5" />
                Add Audio
              </Button>
              {!milestone.completed && (
                <Button size="sm" className="ml-auto bg-green-600 hover:bg-green-700">
                  <Check className="h-4 w-4 mr-1.5" />
                  Mark Complete
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockMilestones
                  .filter(m => m.id !== id && m.category === milestone.category)
                  .slice(0, 3)
                  .map(relatedMilestone => (
                    <div 
                      key={relatedMilestone.id}
                      className="p-3 border rounded-lg cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                      onClick={() => navigate(`/milestone/${relatedMilestone.id}`)}
                    >
                      <div className="flex items-center gap-2">
                        {relatedMilestone.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className="font-medium text-sm">{relatedMilestone.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 ml-6">
                        {relatedMilestone.ageRange}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MilestoneView;
