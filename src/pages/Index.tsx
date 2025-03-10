
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import TimelineCard from '@/components/common/TimelineCard';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Calendar, ArrowRight, Activity, Ruler, Weight, Brain } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleChildSelection = () => {
    toast({
      title: "Coming Soon",
      description: "Multiple children profiles will be available in the next update!",
    });
  };

  const handleAddAppointment = () => {
    toast({
      title: "Add Appointment",
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="chip bg-healthnest-soft-blue text-healthnest-primary">
              Current Child
            </div>
            <Button
              variant="ghost"
              className="text-sm text-muted-foreground"
              onClick={handleChildSelection}
            >
              Change Child
            </Button>
          </div>

          <Card className="border border-border shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-light-blue p-6 sm:w-1/3">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-3 overflow-hidden">
                      <img 
                        src="/baby-emma.jpg" 
                        alt="Baby Emma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">Emma</h2>
                    <p className="text-sm text-gray-600">8 months old</p>
                  </div>
                </div>
                <div className="p-6 sm:w-2/3">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Growth Stats</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-3">
                        <Weight className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Weight</p>
                        <p className="font-medium">8.2 kg</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-3">
                        <Ruler className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Height</p>
                        <p className="font-medium">68 cm</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-3">
                        <Brain className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Milestone</p>
                        <p className="font-medium">Crawling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Upcoming</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-healthnest-primary"
              onClick={handleAddAppointment}
            >
              <Calendar className="h-4 w-4 mr-1" />
              Add Appointment
            </Button>
          </div>

          <Card className="border border-border shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-healthnest-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">9-Month Checkup</h3>
                  <p className="text-sm text-muted-foreground">May 15, 2023 - 10:00 AM</p>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Timeline</h2>
            <Button variant="link" className="text-healthnest-primary">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <TimelineCard
              title="First Solid Food"
              date="2 days ago"
              type="milestone"
              description="Emma tried sweet potatoes for the first time and loved them!"
            />
            <TimelineCard
              title="Pediatrician Visit"
              date="1 week ago"
              type="health"
              description="Regular checkup with Dr. Johnson. Weight and height tracking as expected."
            />
            <TimelineCard
              title="First Crawl"
              date="2 weeks ago"
              type="memory"
              description="Emma started crawling today! She was so excited to move around on her own."
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Health Overview</h2>
            <Button variant="link" className="text-healthnest-primary">
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Vaccination Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Next vaccination due in:</p>
                <p className="text-2xl font-semibold mt-1">4 weeks</p>
                <div className="mt-2 text-sm flex items-center justify-between">
                  <span className="text-healthnest-primary">8 of 12 complete</span>
                  <Button variant="link" size="sm" className="p-0 h-auto">
                    See Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Weight className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Growth Percentile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Weight</span>
                    <span className="text-sm font-medium">65th percentile</span>
                  </div>
                  <div className="w-full bg-healthnest-neutral-dark rounded-full h-2">
                    <div className="bg-healthnest-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-muted-foreground">Height</span>
                    <span className="text-sm font-medium">70th percentile</span>
                  </div>
                  <div className="w-full bg-healthnest-neutral-dark rounded-full h-2">
                    <div className="bg-healthnest-secondary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </PageTransition>
    </div>
  );
};

export default Index;
