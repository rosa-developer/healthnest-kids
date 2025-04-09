
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FilePlus } from 'lucide-react';

interface VisitsTabProps {
  handleAddRecord: () => void;
}

const VisitsTab: React.FC<VisitsTabProps> = ({ handleAddRecord }) => {
  return (
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
          <VisitItem 
            type="Pediatrician"
            title="Regular Checkup"
            date="April 5, 2023"
            doctor="Dr. Johnson"
            notes="Regular checkup with Dr. Johnson. Weight and height tracking as expected. No concerns at this time."
            variant="primary"
          />

          <VisitItem 
            type="Specialist"
            title="Ear Infection"
            date="March 12, 2023"
            doctor="Dr. Martinez"
            notes="Mild ear infection in right ear. Prescribed amoxicillin for 10 days. Follow up in two weeks if symptoms persist."
            variant="pink"
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface VisitItemProps {
  type: string;
  title: string;
  date: string;
  doctor: string;
  notes: string;
  variant: 'primary' | 'pink';
}

const VisitItem: React.FC<VisitItemProps> = ({ type, title, date, doctor, notes, variant }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className="p-4 border border-border rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
            isPrimary 
              ? 'bg-healthnest-soft-blue text-healthnest-primary border border-healthnest-primary/20' 
              : 'bg-healthnest-soft-pink text-pink-500 border border-pink-200'
          } mb-2`}>
            {type}
          </div>
          <h3 className="font-medium text-lg">{title}</h3>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <Calendar className={`h-3.5 w-3.5 mr-1 ${isPrimary ? 'text-healthnest-primary' : 'text-pink-500'}`} />
            {date}
          </div>
        </div>
        <div className="bg-muted/40 px-3 py-1 rounded-lg">
          <p className="text-sm font-medium">{doctor}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="text-sm font-medium mb-2 flex items-center">
          <FilePlus className={`h-4 w-4 mr-1 ${isPrimary ? 'text-healthnest-primary' : 'text-pink-500'}`} />
          Notes
        </h4>
        <p className="text-sm text-muted-foreground">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default VisitsTab;
