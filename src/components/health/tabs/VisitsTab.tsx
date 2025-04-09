
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  FilePlus, 
  Stethoscope,
  Clock,
  User,
  FileText,
  PlusCircle,
  ChevronRight
} from 'lucide-react';

interface VisitsTabProps {
  handleAddRecord: () => void;
}

const VisitsTab: React.FC<VisitsTabProps> = ({ handleAddRecord }) => {
  return (
    <div className="p-6">
      <Card className="border-none shadow-none overflow-hidden bg-transparent">
        <CardHeader className="pb-4 border-b bg-gradient-to-r from-pink-50/80 to-transparent flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-pink-500" />
            Medical Visits
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleAddRecord}
            className="text-pink-600 border-pink-200 bg-white hover:bg-pink-50 shadow-sm"
          >
            <PlusCircle className="h-4 w-4 mr-1.5" />
            Add Visit
          </Button>
        </CardHeader>
        <CardContent className="p-4 pt-6">
          <div className="space-y-6">
            <VisitItem 
              type="Pediatrician"
              title="Regular Checkup"
              date="April 5, 2023"
              time="10:30 AM"
              doctor="Dr. Johnson"
              notes="Regular checkup with Dr. Johnson. Weight and height tracking as expected. No concerns at this time."
              variant="primary"
            />

            <VisitItem 
              type="Specialist"
              title="Ear Infection"
              date="March 12, 2023"
              time="2:15 PM"
              doctor="Dr. Martinez"
              notes="Mild ear infection in right ear. Prescribed amoxicillin for 10 days. Follow up in two weeks if symptoms persist."
              variant="pink"
            />
          </div>
          
          <div className="mt-8 pt-4 border-t border-border/50 flex justify-center">
            <Button variant="outline" className="border-dashed border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              <ChevronRight className="h-4 w-4 mr-1.5" />
              View All Medical Visits 
              <ChevronRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface VisitItemProps {
  type: string;
  title: string;
  date: string;
  time: string;
  doctor: string;
  notes: string;
  variant: 'primary' | 'pink';
}

const VisitItem: React.FC<VisitItemProps> = ({ type, title, date, time, doctor, notes, variant }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className="p-5 border rounded-xl bg-white shadow-sm hover:shadow transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
            isPrimary 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-pink-50 text-pink-600 border border-pink-200'
          } mb-2`}>
            {type}
          </div>
          <h3 className="font-medium text-lg">{title}</h3>
          <div className="flex items-center gap-4 mt-1.5">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className={`h-3.5 w-3.5 mr-1.5 ${isPrimary ? 'text-blue-500' : 'text-pink-500'}`} />
              {date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className={`h-3.5 w-3.5 mr-1.5 ${isPrimary ? 'text-blue-500' : 'text-pink-500'}`} />
              {time}
            </div>
          </div>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
          isPrimary ? 'bg-blue-50/70' : 'bg-pink-50/70'
        }`}>
          <User className={`h-4 w-4 ${isPrimary ? 'text-blue-500' : 'text-pink-500'}`} />
          <p className="text-sm font-medium">{doctor}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <h4 className="text-sm font-medium mb-2 flex items-center">
          <FileText className={`h-4 w-4 mr-1.5 ${isPrimary ? 'text-blue-500' : 'text-pink-500'}`} />
          Notes
        </h4>
        <p className="text-sm text-muted-foreground">
          {notes}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`px-0 ${isPrimary ? 'text-blue-600 hover:text-blue-700' : 'text-pink-600 hover:text-pink-700'}`}
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VisitsTab;
