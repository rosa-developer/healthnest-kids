
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, FilePlus, Calendar, Weight, Ruler, 
  BarChart3, ArrowRight, ShieldCheck, Clock, TrendingUp 
} from 'lucide-react';
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-3">
              <Activity className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Emma's Health</h1>
              <p className="text-sm text-muted-foreground">Track growth, vaccines & medical visits</p>
            </div>
          </div>
          <Button 
            onClick={handleAddRecord} 
            size="sm" 
            className="bg-gradient-to-r from-healthnest-primary to-healthnest-medium-blue text-white hover:opacity-90 shadow-md"
          >
            <FilePlus className="h-4 w-4 mr-2" />
            Add Record
          </Button>
        </div>

        <Tabs defaultValue="growth" className="mb-8">
          <TabsList className="grid grid-cols-3 w-full bg-muted/60 rounded-xl p-1 mb-6">
            <TabsTrigger 
              value="growth" 
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-healthnest-primary"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Growth
            </TabsTrigger>
            <TabsTrigger 
              value="vaccines" 
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-healthnest-primary"
            >
              <ShieldCheck className="h-4 w-4 mr-2" />
              Vaccines
            </TabsTrigger>
            <TabsTrigger 
              value="visits" 
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-soft data-[state=active]:text-healthnest-primary"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Visits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="growth" className="animate-fade-in">
            <div className="space-y-8">
              <Card className="border border-border shadow-soft overflow-hidden">
                <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-healthnest-primary" />
                    Growth Chart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-64 flex items-center justify-center bg-muted/30 rounded-xl border border-healthnest-neutral-dark/30">
                    <div className="text-center p-4">
                      <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground opacity-40" />
                      <p className="mt-3 text-muted-foreground">
                        Growth chart visualization will appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border border-border shadow-soft overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
                    <CardTitle className="text-base flex items-center">
                      <Weight className="h-5 w-5 mr-2 text-healthnest-primary" />
                      Weight Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-semibold bg-gradient-to-br from-healthnest-primary to-blue-500 bg-clip-text text-transparent">8.2 kg</p>
                        <p className="text-sm text-muted-foreground">Current weight</p>
                      </div>
                      <div className="text-right">
                        <p className="text-healthnest-primary font-medium flex items-center justify-end">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +0.4 kg
                        </p>
                        <p className="text-sm text-muted-foreground">from last month</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-muted">
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-healthnest-primary to-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">6 months</span>
                        <span className="text-xs text-muted-foreground">18 months</span>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="px-0 mt-3 text-healthnest-primary">
                      View History <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-border shadow-soft overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
                    <CardTitle className="text-base flex items-center">
                      <Ruler className="h-5 w-5 mr-2 text-healthnest-primary" />
                      Height Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-semibold bg-gradient-to-br from-healthnest-primary to-blue-500 bg-clip-text text-transparent">68 cm</p>
                        <p className="text-sm text-muted-foreground">Current height</p>
                      </div>
                      <div className="text-right">
                        <p className="text-healthnest-primary font-medium flex items-center justify-end">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          +2.5 cm
                        </p>
                        <p className="text-sm text-muted-foreground">from last month</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-muted">
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r from-healthnest-secondary to-yellow-400 rounded-full"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">6 months</span>
                        <span className="text-xs text-muted-foreground">18 months</span>
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="px-0 mt-3 text-healthnest-primary">
                      View History <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vaccines" className="animate-fade-in">
            <Card className="border border-border shadow-soft overflow-hidden">
              <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted">
                <CardTitle className="text-lg flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Vaccination Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 rounded-xl border border-green-200 dark:border-green-800/30">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm border border-green-200">
                      <Activity className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium">9-Month Vaccines</h3>
                        <div className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200">
                          Upcoming
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                        <p className="text-sm text-muted-foreground">Due in 4 weeks</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="shadow-sm">Remind</Button>
                  </div>

                  <div className="flex items-center p-4 bg-white rounded-xl border border-border shadow-sm">
                    <div className="h-12 w-12 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4 shadow-sm">
                      <ShieldCheck className="h-5 w-5 text-healthnest-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium">6-Month Vaccines</h3>
                        <div className="ml-2 px-2 py-0.5 rounded-full bg-healthnest-soft-blue text-healthnest-primary text-xs font-semibold border border-healthnest-primary/20">
                          Complete
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                        <p className="text-sm text-muted-foreground">Completed on Feb 10, 2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white rounded-xl border border-border shadow-sm">
                    <div className="h-12 w-12 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4 shadow-sm">
                      <ShieldCheck className="h-5 w-5 text-healthnest-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-medium">4-Month Vaccines</h3>
                        <div className="ml-2 px-2 py-0.5 rounded-full bg-healthnest-soft-blue text-healthnest-primary text-xs font-semibold border border-healthnest-primary/20">
                          Complete
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                        <p className="text-sm text-muted-foreground">Completed on Dec 15, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visits" className="animate-fade-in">
            <Card className="border border-border shadow-soft overflow-hidden">
              <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted flex justify-between items-center">
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Medical Visits
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAddRecord}
                  className="text-healthnest-primary shadow-sm"
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  Add Visit
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="p-4 border border-border rounded-xl bg-white shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-healthnest-soft-blue text-healthnest-primary mb-2 border border-healthnest-primary/20">
                          Pediatrician
                        </div>
                        <h3 className="font-medium text-lg">Regular Checkup</h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-healthnest-primary" />
                          April 5, 2023
                        </div>
                      </div>
                      <div className="bg-muted/40 px-3 py-1 rounded-lg">
                        <p className="text-sm font-medium">Dr. Johnson</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <FilePlus className="h-4 w-4 mr-1 text-healthnest-primary" />
                        Notes
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Regular checkup with Dr. Johnson. Weight and height tracking as expected. 
                        No concerns at this time.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-xl bg-white shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-healthnest-soft-pink text-pink-500 mb-2 border border-pink-200">
                          Specialist
                        </div>
                        <h3 className="font-medium text-lg">Ear Infection</h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-pink-500" />
                          March 12, 2023
                        </div>
                      </div>
                      <div className="bg-muted/40 px-3 py-1 rounded-lg">
                        <p className="text-sm font-medium">Dr. Martinez</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <FilePlus className="h-4 w-4 mr-1 text-pink-500" />
                        Notes
                      </h4>
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
