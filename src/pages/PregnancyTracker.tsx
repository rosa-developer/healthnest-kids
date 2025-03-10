
import React, { useState } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Baby, Calendar, ChevronRight, BarChart3, Heart, List, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import TimelineCard from '@/components/common/TimelineCard';

const PregnancyTracker: React.FC = () => {
  const { toast } = useToast();
  // Mock data - in a real app, this would come from a database
  const [currentWeek, setCurrentWeek] = useState(24);
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + ((40 - currentWeek) * 7));
  
  const handleAddRecord = () => {
    toast({
      title: "Add Record",
      description: "This feature will be available in the next update!",
    });
  };
  
  const totalPregnancyWeeks = 40;
  const progressPercentage = (currentWeek / totalPregnancyWeeks) * 100;
  
  const handleWeekChange = (change: number) => {
    const newWeek = Math.min(Math.max(currentWeek + change, 1), 42);
    setCurrentWeek(newWeek);
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-pink text-pink-500 mb-4">Pregnancy Tracker</div>
          
          <Card className="border border-border shadow-soft mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-3">
                    <Baby className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Baby Oliver</h3>
                    <p className="text-sm text-muted-foreground">Week {currentWeek}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Due Date</p>
                  <p className="font-medium">{dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{progressPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>First Trimester</span>
                  <span>Second Trimester</span>
                  <span>Third Trimester</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleWeekChange(-1)}
                  disabled={currentWeek <= 1}
                >
                  Previous Week
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleWeekChange(1)}
                  disabled={currentWeek >= 42}
                >
                  Next Week
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="development" className="mb-6">
            <TabsList className="grid grid-cols-3 w-full bg-muted rounded-lg p-1">
              <TabsTrigger value="development" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Development
              </TabsTrigger>
              <TabsTrigger value="health" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Your Health
              </TabsTrigger>
              <TabsTrigger value="appointments" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
                Appointments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="development" className="mt-4 animate-fade-in">
              <Card className="border border-border shadow-soft mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Baby className="h-5 w-5 mr-2 text-healthnest-primary" />
                    Baby's Development - Week {currentWeek}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-healthnest-soft-blue rounded-lg">
                        <h4 className="font-medium mb-1">Size</h4>
                        <p className="text-sm">Your baby is the size of a cantaloupe</p>
                        <p className="text-2xl font-bold mt-1">1.3 pounds</p>
                        <p className="text-sm text-muted-foreground">About 12 inches long</p>
                      </div>
                      <div className="p-4 bg-healthnest-soft-green rounded-lg">
                        <h4 className="font-medium mb-1">Development</h4>
                        <p className="text-sm">Baby's brain and lungs are developing rapidly this week</p>
                        <div className="flex items-center mt-2">
                          <Heart className="h-5 w-5 text-pink-500 mr-2" />
                          <p className="text-sm">Heart beating strongly</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-border">
                      <h4 className="font-medium mb-2">What's Happening This Week</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-pink-500">•</span>
                          </div>
                          <p className="text-sm">Baby's taste buds are developing, and they can taste what you eat.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-pink-500">•</span>
                          </div>
                          <p className="text-sm">The inner ear is developed, helping with balance.</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-xs text-pink-500">•</span>
                          </div>
                          <p className="text-sm">Baby is practicing breathing movements to prepare the lungs.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <Button variant="link" className="text-healthnest-primary p-0 h-auto">
                      Learn more about Week {currentWeek} <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-border shadow-soft">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <List className="h-5 w-5 mr-2 text-healthnest-primary" />
                      To-Do This Week
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full border border-healthnest-primary flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-healthnest-primary" />
                        </div>
                        <span className="text-sm">Schedule glucose test</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full border border-muted-foreground flex items-center justify-center mr-2">
                        </div>
                        <span className="text-sm">Start researching childbirth classes</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-5 w-5 rounded-full border border-muted-foreground flex items-center justify-center mr-2">
                        </div>
                        <span className="text-sm">Plan hospital tour</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-border shadow-soft">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-healthnest-primary" />
                      Nutrition Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs text-green-500">•</span>
                        </div>
                        <p className="text-sm">Increase calcium intake for baby's bone development</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs text-green-500">•</span>
                        </div>
                        <p className="text-sm">Stay hydrated with at least 8-10 cups of water daily</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs text-green-500">•</span>
                        </div>
                        <p className="text-sm">Include iron-rich foods to prevent anemia</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="health" className="mt-4 animate-fade-in">
              <Card className="border border-border shadow-soft mb-6">
                <CardHeader className="pb-2 flex justify-between items-center">
                  <CardTitle className="text-lg">Your Health Journal</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleAddRecord}
                  >
                    Add Entry
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-healthnest-soft-blue rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">Common Symptoms</h4>
                        <p className="text-sm text-muted-foreground">Manage and track your pregnancy symptoms</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-healthnest-soft-pink rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">Weight Tracker</h4>
                        <p className="text-sm text-muted-foreground">Monitor your weight gain during pregnancy</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-healthnest-soft-green rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">Mood Journal</h4>
                        <p className="text-sm text-muted-foreground">Track your emotional well-being</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border shadow-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Health Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border border-border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Blood Pressure</h4>
                          <p className="text-sm text-muted-foreground">119/75 mmHg</p>
                        </div>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Weight</h4>
                          <p className="text-sm text-muted-foreground">152 lbs (+0.5 lbs from last week)</p>
                        </div>
                        <p className="text-xs text-muted-foreground">5 days ago</p>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Symptoms</h4>
                          <p className="text-sm text-muted-foreground">Mild back pain, heartburn</p>
                        </div>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="link" className="mt-3 text-healthnest-primary p-0 h-auto">
                    View all health records <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appointments" className="mt-4 animate-fade-in">
              <Card className="border border-border shadow-soft mb-6">
                <CardHeader className="pb-2 flex justify-between items-center">
                  <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-healthnest-primary"
                    onClick={handleAddRecord}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    Add Appointment
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-healthnest-soft-green rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Glucose Screening Test</h3>
                        <p className="text-sm text-muted-foreground">May 15, 2023 - 10:00 AM</p>
                        <p className="text-xs text-muted-foreground">Dr. Anderson - Prenatal Clinic</p>
                      </div>
                      <Button size="sm" variant="outline">Remind</Button>
                    </div>
                    
                    <div className="flex items-center p-3 border border-border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-healthnest-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Prenatal Checkup</h3>
                        <p className="text-sm text-muted-foreground">June 10, 2023 - 2:30 PM</p>
                        <p className="text-xs text-muted-foreground">Dr. Anderson - Prenatal Clinic</p>
                      </div>
                      <Button size="sm" variant="outline">Remind</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border shadow-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Previous Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Previous appointment entry */}
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-2">
                            Checkup
                          </div>
                          <h3 className="font-medium">20-Week Ultrasound</h3>
                          <p className="text-sm text-muted-foreground">Dr. Martinez</p>
                        </div>
                        <p className="text-sm text-muted-foreground">April 3, 2023</p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <h4 className="text-sm font-medium mb-1">Notes</h4>
                        <p className="text-sm text-muted-foreground">
                          Anatomy scan completed. Baby developing normally. Heart, brain, and other 
                          organs look healthy. Confirmed baby is a boy!
                        </p>
                      </div>
                    </div>
                    
                    {/* Another previous appointment entry */}
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-2">
                            Checkup
                          </div>
                          <h3 className="font-medium">16-Week Checkup</h3>
                          <p className="text-sm text-muted-foreground">Dr. Anderson</p>
                        </div>
                        <p className="text-sm text-muted-foreground">March 6, 2023</p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <h4 className="text-sm font-medium mb-1">Notes</h4>
                        <p className="text-sm text-muted-foreground">
                          Normal checkup. Heartbeat strong at 155 bpm. Blood pressure normal at 118/74.
                          Weight gain on track. Discussed nutrition and exercise.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="link" className="mt-3 text-healthnest-primary p-0 h-auto">
                    View all appointments <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Updates</h2>
            </div>
            
            <div className="space-y-4">
              <TimelineCard
                title="Ultrasound Scan"
                date="1 week ago"
                type="health"
                description="20-week anatomy scan showed healthy development. All measurements are normal."
              />
              <TimelineCard
                title="First Kick Felt"
                date="2 weeks ago"
                type="milestone"
                description="Felt the baby kick for the first time! It was during the evening while sitting quietly."
              />
              <TimelineCard
                title="Prenatal Vitamins"
                date="3 weeks ago"
                type="health"
                description="Started new prenatal vitamins with added DHA as recommended by Dr. Anderson."
              />
            </div>
          </section>
        </div>
      </PageTransition>
    </div>
  );
};

export default PregnancyTracker;
