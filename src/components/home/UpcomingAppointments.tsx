
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const UpcomingAppointments = () => {
  const { toast } = useToast();

  const handleAddAppointment = () => {
    toast({
      title: "Add Appointment",
      description: "This feature will be available in the next update!",
    });
  };

  return (
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
  );
};

export default UpcomingAppointments;
