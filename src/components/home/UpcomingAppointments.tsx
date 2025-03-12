
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const UpcomingAppointments = () => {
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleAddAppointment = () => {
    toast({
      title: "Add Appointment",
      description: "This feature will be available in the next update!",
    });
  };

  const handleViewDetails = () => {
    setOpenDialog(true);
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
            <Button variant="ghost" size="sm" onClick={handleViewDetails}>
              Details
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>9-Month Checkup Details</DialogTitle>
            <DialogDescription>
              Scheduled with Dr. Sarah Johnson
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm font-medium">Date & Time:</div>
              <div className="text-sm">May 15, 2023 - 10:00 AM</div>
              
              <div className="text-sm font-medium">Location:</div>
              <div className="text-sm">Sunshine Pediatrics, Suite 300</div>
              
              <div className="text-sm font-medium">Purpose:</div>
              <div className="text-sm">Regular wellness checkup, vaccination review</div>
              
              <div className="text-sm font-medium">Notes:</div>
              <div className="text-sm">Bring growth journal and any questions about development</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UpcomingAppointments;
