
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, FilePlus, Calendar, Weight, Ruler, BarChart3, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Health = () => {
  const { toast } = useToast();

  const handleAddRecord = () => {
    toast({
      title: "Add Health Record",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="flex items-center justify-between mb-6">
          <div className="chip bg-healthnest-soft-pink text-pink-500">Emma's Health</div>
          <Button onClick={handleAddRecord} size="sm" className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90">
            <FilePlus className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>

        <Tabs defaultValue="growth" className="mb-6">
          <TabsList className="grid grid-cols-3 w-full bg-muted rounded-lg p-1">
            <TabsTrigger value="growth" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
              Growth
            </TabsTrigger>
            <TabsTrigger value="vaccines" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
              Vaccines
            </TabsTrigger>
            <TabsTrigger value="visits" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-soft">
              Visits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="growth" className="mt-4 animate-fade-in">
            <div className="space-y-6">
              <Card className="border border-border shadow-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Growth Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-healthnest-neutral rounded-md border border-healthnest-neutral-dark">
                    <div className="text-center p-4">
                      <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-muted-foreground">
                        Growth chart visualization will appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border border-border shadow-soft">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Weight className="h-5 w-5 mr-2 text-healthnest-primary" />
                      Weight Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-semibold">8.2 kg</p>
                        <p className="text-sm text-muted-foreground">Current weight</p>
                      </div>
                      <div className="text-right">
                        <p className="text-healthnest-primary font-medium">+0.4 kg</p>
                        <p className="text-sm text-muted-foreground">from last month</p>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="px-0 mt-2">
                      View History <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-border shadow-soft">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Ruler className="h-5 w-5 mr-2 text-healthnest-primary" />
                      Height Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-semibold">68 cm</p>
                        <p className="text-sm text-muted-foreground">Current height</p>
                      </div>
                      <div className="text-right">
                        <p className="text-healthnest-primary font-medium">+2.5 cm</p>
                        <p className="text-sm text-muted-foreground">from last month</p>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="px-0 mt-2">
                      View History <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vaccines" className="mt-4 animate-fade-in">
            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Vaccination Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-healthnest-soft-green rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                      <Activity className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">9-Month Vaccines</h3>
                      <p className="text-sm text-muted-foreground">Due in 4 weeks</p>
                    </div>
                    <Button size="sm" variant="outline">Remind</Button>
                  </div>

                  <div className="flex items-center p-3 bg-white rounded-lg border border-border">
                    <div className="h-10 w-10 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4">
                      <Activity className="h-5 w-5 text-healthnest-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">6-Month Vaccines</h3>
                      <p className="text-sm text-muted-foreground">Completed on Feb 10, 2023</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-healthnest-soft-blue text-healthnest-primary text-xs font-medium">
                      Complete
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white rounded-lg border border-border">
                    <div className="h-10 w-10 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4">
                      <Activity className="h-5 w-5 text-healthnest-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">4-Month Vaccines</h3>
                      <p className="text-sm text-muted-foreground">Completed on Dec 15, 2022</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-healthnest-soft-blue text-healthnest-primary text-xs font-medium">
                      Complete
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visits" className="mt-4 animate-fade-in">
            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2 flex justify-between items-center">
                <CardTitle className="text-lg">Medical Visits</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAddRecord}
                  className="text-healthnest-primary"
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  Add Visit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-2">
                          Pediatrician
                        </div>
                        <h3 className="font-medium text-lg">Regular Checkup</h3>
                        <p className="text-sm text-muted-foreground">Dr. Johnson</p>
                      </div>
                      <p className="text-sm text-muted-foreground">April 5, 2023</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <h4 className="text-sm font-medium mb-1">Notes</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular checkup with Dr. Johnson. Weight and height tracking as expected. 
                        No concerns at this time.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="chip bg-healthnest-soft-pink text-pink-500 mb-2">
                          Specialist
                        </div>
                        <h3 className="font-medium text-lg">Ear Infection</h3>
                        <p className="text-sm text-muted-foreground">Dr. Martinez</p>
                      </div>
                      <p className="text-sm text-muted-foreground">March 12, 2023</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <h4 className="text-sm font-medium mb-1">Notes</h4>
                      <p className="text-sm text-muted-foreground">
                        Mild ear infection in right ear. Prescribed amoxicillin for 10 days.
                        Follow up in two weeks if symptoms persist.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </PageTransition>
    </div>
  );
};

export default Health;
