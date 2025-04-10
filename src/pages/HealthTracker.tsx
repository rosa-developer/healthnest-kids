
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ShieldCheck, Calendar, FilePlus, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import BabyAdviceSection from '@/components/wordpress/BabyAdviceSection';

const HealthTracker: React.FC = () => {
  const { toast } = useToast();

  const handleAddRecord = () => {
    toast({
      title: "Add Health Record",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="container mx-auto pt-6 pb-20">
      {/* Health Tracker Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-300 to-green-500 flex items-center justify-center mr-4 shadow-md">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Health Tracker
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
              Track health records, vaccinations, and medical visits
            </p>
          </div>
        </div>
        <Button 
          onClick={handleAddRecord} 
          size="sm" 
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:opacity-90 shadow-lg px-5 py-2 h-auto rounded-xl transition-all duration-300"
        >
          <FilePlus className="h-4 w-4 mr-2" />
          Add Health Record
        </Button>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="growth" className="mb-8">
        <TabsList className="grid grid-cols-3 w-full bg-gradient-to-r from-muted/80 to-muted/40 rounded-xl p-1.5 mb-8">
          <TabsTrigger 
            value="growth" 
            className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-green-600 transition-all duration-300"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Growth
          </TabsTrigger>
          <TabsTrigger 
            value="vaccines" 
            className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-green-600 transition-all duration-300"
          >
            <ShieldCheck className="h-4 w-4 mr-2" />
            Vaccines
          </TabsTrigger>
          <TabsTrigger 
            value="visits" 
            className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-green-600 transition-all duration-300"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Visits
          </TabsTrigger>
        </TabsList>

        <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-gradient-to-br from-white to-muted/20">
          <TabsContent value="growth" className="animate-fade-in m-0">
            <div className="p-6 space-y-8">
              {/* Growth Chart Placeholder */}
              <Card className="overflow-hidden border-none shadow-md">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4">
                  <h3 className="text-lg font-semibold text-green-800">Growth Chart</h3>
                  <p className="text-sm text-muted-foreground">Track your child's height and weight over time</p>
                </div>
                <CardContent className="p-6">
                  <div className="h-64 bg-gradient-to-b from-blue-50/50 to-green-50/50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Growth chart will appear here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Height', 'Weight', 'Head Circumference'].map((stat) => (
                  <Card key={stat} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4">
                      <h3 className="text-md font-semibold text-green-700">{stat}</h3>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xl font-bold text-green-600">--</p>
                          <p className="text-xs text-muted-foreground">No data yet</p>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          Add data
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vaccines" className="animate-fade-in m-0">
            <div className="p-6 space-y-6">
              <Card className="border-none shadow-none overflow-hidden bg-transparent">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold text-green-800">Vaccination Schedule</h3>
                  <p className="text-sm text-muted-foreground">Keep track of important vaccines and their due dates</p>
                </div>
                <CardContent className="p-4 pt-6">
                  {/* Vaccine List */}
                  <div className="space-y-4">
                    {['MMR Vaccine', 'DTaP Vaccine', 'Polio Vaccine'].map((vaccine, index) => (
                      <div key={vaccine} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-green-50/50 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                            <ShieldCheck className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{vaccine}</h4>
                            <p className="text-xs text-muted-foreground">Due: {index === 0 ? 'Completed' : 'In 3 months'}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className={index === 0 ? 'text-green-600 border-green-200' : ''}>
                          {index === 0 ? 'Completed' : 'Schedule'}
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" onClick={handleAddRecord}>
                      View Complete Vaccination Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="visits" className="animate-fade-in m-0">
            <div className="p-6 space-y-6">
              <Card className="border-none shadow-none overflow-hidden bg-transparent">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold text-green-800">Medical Visits</h3>
                  <p className="text-sm text-muted-foreground">Track appointments, check-ups and doctor visits</p>
                </div>
                <CardContent className="p-4 pt-6">
                  {/* Upcoming Appointments */}
                  <h4 className="font-medium mb-3">Upcoming Appointments</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-4 rounded-lg border border-border/50 hover:bg-blue-50/30 transition-all duration-200">
                      <div className="flex justify-between">
                        <div>
                          <h5 className="font-medium text-green-700">Pediatrician Check-up</h5>
                          <p className="text-xs text-muted-foreground">Dr. Smith • Children's Hospital</p>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          June 15, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Past Visits */}
                  <h4 className="font-medium mb-3 mt-6">Past Visits</h4>
                  <p className="text-muted-foreground text-sm">No past visits recorded yet.</p>
                  
                  <div className="mt-6 flex justify-end">
                    <Button onClick={handleAddRecord} size="sm">Schedule Appointment</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      
      {/* Related Health Advice */}
      <BabyAdviceSection />
    </div>
  );
};

export default HealthTracker;
