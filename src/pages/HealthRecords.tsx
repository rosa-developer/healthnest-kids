
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChildProfileSelector from '@/components/common/ChildProfileSelector';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  FilePlus, 
  BarChart3, 
  Activity, 
  Search, 
  Calendar, 
  Download,
  Syringe,
  Pill,
  FileText,
  ArrowDown,
  ArrowUp
} from 'lucide-react';

const HealthRecords: React.FC = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleAddRecord = () => {
    toast({
      title: "Add Health Record",
      description: "This feature will be available in the next update!",
    });
  };
  
  const handleExport = () => {
    toast({
      title: "Export Health Records",
      description: "This feature will be available in the next update!",
    });
  };
  
  // Mock vaccination data
  const vaccinations = [
    { id: 1, name: 'DTaP (Diphtheria, Tetanus, Pertussis)', date: '2022-12-15', dose: '1st dose', provider: 'Dr. Johnson' },
    { id: 2, name: 'IPV (Polio)', date: '2022-12-15', dose: '1st dose', provider: 'Dr. Johnson' },
    { id: 3, name: 'Hib (Haemophilus influenzae type b)', date: '2022-12-15', dose: '1st dose', provider: 'Dr. Johnson' },
    { id: 4, name: 'PCV13 (Pneumococcal)', date: '2022-12-15', dose: '1st dose', provider: 'Dr. Johnson' },
    { id: 5, name: 'Rotavirus', date: '2022-12-15', dose: '1st dose', provider: 'Dr. Johnson' },
    { id: 6, name: 'DTaP (Diphtheria, Tetanus, Pertussis)', date: '2023-02-10', dose: '2nd dose', provider: 'Dr. Martinez' },
    { id: 7, name: 'IPV (Polio)', date: '2023-02-10', dose: '2nd dose', provider: 'Dr. Martinez' },
    { id: 8, name: 'Hib (Haemophilus influenzae type b)', date: '2023-02-10', dose: '2nd dose', provider: 'Dr. Martinez' },
  ];
  
  // Mock health visit data
  const healthVisits = [
    { 
      id: 1, 
      type: 'Well-baby visit', 
      date: '2023-04-05', 
      provider: 'Dr. Johnson', 
      notes: 'Regular checkup with Dr. Johnson. Weight and height tracking as expected. No concerns at this time.',
      vitals: {
        weight: '8.2 kg',
        height: '68 cm',
        headCircumference: '44 cm',
        temperature: '98.6°F'
      }
    },
    { 
      id: 2, 
      type: 'Illness visit', 
      date: '2023-03-12', 
      provider: 'Dr. Martinez', 
      notes: 'Mild ear infection in right ear. Prescribed amoxicillin for 10 days. Follow up in two weeks if symptoms persist.',
      vitals: {
        weight: '7.8 kg',
        height: '67 cm',
        headCircumference: '43.5 cm',
        temperature: '100.4°F'
      }
    },
    { 
      id: 3, 
      type: 'Well-baby visit', 
      date: '2023-02-10', 
      provider: 'Dr. Johnson', 
      notes: '6-month checkup. Growth is following expected curve. Received scheduled vaccinations. Starting solid foods, providing guidance on introduction of new foods.',
      vitals: {
        weight: '7.5 kg',
        height: '65.5 cm',
        headCircumference: '43 cm',
        temperature: '98.8°F'
      }
    },
  ];
  
  // Mock medication data
  const medications = [
    { id: 1, name: 'Amoxicillin', dosage: '125mg/5ml', frequency: 'Twice daily', startDate: '2023-03-12', endDate: '2023-03-22', reason: 'Ear infection' },
    { id: 2, name: 'Tylenol Infant', dosage: '2.5ml', frequency: 'As needed for fever', startDate: '2023-03-12', endDate: 'Ongoing', reason: 'Fever/pain relief' },
    { id: 3, name: 'Vitamin D Drops', dosage: '400 IU (1 drop)', frequency: 'Once daily', startDate: '2022-10-01', endDate: 'Ongoing', reason: 'Supplement' },
  ];
  
  // Filter data based on search query
  const filteredVaccinations = searchQuery 
    ? vaccinations.filter(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : vaccinations;
    
  const filteredVisits = searchQuery 
    ? healthVisits.filter(v => 
        v.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
        v.notes.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : healthVisits;
    
  const filteredMedications = searchQuery 
    ? medications.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        m.reason.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : medications;

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="chip bg-healthnest-soft-blue text-healthnest-primary">
              Health Records
            </div>
            <ChildProfileSelector />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search health records..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none"
                onClick={handleExport}
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90 flex-1 sm:flex-none"
                  >
                    <FilePlus className="h-4 w-4 mr-2" />
                    Add Record
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Health Record</DialogTitle>
                    <DialogDescription>
                      Select the type of health record you'd like to add.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
                    <Button variant="outline" className="justify-start h-auto py-3" onClick={handleAddRecord}>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center">
                          <Syringe className="h-4 w-4 mr-2 text-healthnest-primary" />
                          <span>Vaccination</span>
                        </div>
                        <span className="text-xs text-muted-foreground ml-6 mt-1">
                          Record new or past vaccinations
                        </span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3" onClick={handleAddRecord}>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-healthnest-primary" />
                          <span>Doctor Visit</span>
                        </div>
                        <span className="text-xs text-muted-foreground ml-6 mt-1">
                          Log check-ups or appointments
                        </span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3" onClick={handleAddRecord}>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center">
                          <Pill className="h-4 w-4 mr-2 text-healthnest-primary" />
                          <span>Medication</span>
                        </div>
                        <span className="text-xs text-muted-foreground ml-6 mt-1">
                          Track prescribed medications
                        </span>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-3" onClick={handleAddRecord}>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center">
                          <BarChart3 className="h-4 w-4 mr-2 text-healthnest-primary" />
                          <span>Growth Measurement</span>
                        </div>
                        <span className="text-xs text-muted-foreground ml-6 mt-1">
                          Track weight, height, and more
                        </span>
                      </div>
                    </Button>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <Card className="border border-border shadow-soft mb-6">
            <CardHeader className="pb-2 flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Syringe className="h-5 w-5 mr-2 text-healthnest-primary" />
                Vaccinations
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAddRecord}
              >
                Add Vaccination
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 text-sm font-medium">Vaccine</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">
                        <div className="flex items-center">
                          Date
                          <div className="flex flex-col ml-1">
                            <ArrowUp className="h-3 w-3" />
                            <ArrowDown className="h-3 w-3 -mt-1" />
                          </div>
                        </div>
                      </th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Dose</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVaccinations.map(vaccine => (
                      <tr key={vaccine.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 text-sm">{vaccine.name}</td>
                        <td className="py-3 px-2 text-sm">{new Date(vaccine.date).toLocaleDateString()}</td>
                        <td className="py-3 px-2 text-sm">{vaccine.dose}</td>
                        <td className="py-3 px-2 text-sm">{vaccine.provider}</td>
                      </tr>
                    ))}
                    {filteredVaccinations.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-muted-foreground">
                          No vaccination records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-soft mb-6">
            <CardHeader className="pb-2 flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-healthnest-primary" />
                Doctor Visits
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAddRecord}
              >
                Add Visit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredVisits.map(visit => (
                  <div key={visit.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-2">
                          {visit.type}
                        </div>
                        <h3 className="font-medium text-lg">{new Date(visit.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}</h3>
                        <p className="text-sm text-muted-foreground">{visit.provider}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Weight:</span>
                          <span className="text-sm font-medium ml-1">{visit.vitals.weight}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Height:</span>
                          <span className="text-sm font-medium ml-1">{visit.vitals.height}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Head:</span>
                          <span className="text-sm font-medium ml-1">{visit.vitals.headCircumference}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Temp:</span>
                          <span className="text-sm font-medium ml-1">{visit.vitals.temperature}</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium mb-1">Notes</h4>
                      <p className="text-sm text-muted-foreground">{visit.notes}</p>
                    </div>
                  </div>
                ))}
                {filteredVisits.length === 0 && (
                  <div className="py-6 text-center text-muted-foreground">
                    No doctor visit records found.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-soft">
            <CardHeader className="pb-2 flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Pill className="h-5 w-5 mr-2 text-healthnest-primary" />
                Medications
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleAddRecord}
              >
                Add Medication
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 text-sm font-medium">Medication</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Dosage</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Frequency</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Dates</th>
                      <th className="text-left py-2 px-2 text-sm font-medium">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMedications.map(medication => (
                      <tr key={medication.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 text-sm font-medium">{medication.name}</td>
                        <td className="py-3 px-2 text-sm">{medication.dosage}</td>
                        <td className="py-3 px-2 text-sm">{medication.frequency}</td>
                        <td className="py-3 px-2 text-sm">
                          {new Date(medication.startDate).toLocaleDateString()} - 
                          {medication.endDate === 'Ongoing' ? ' Ongoing' : ` ${new Date(medication.endDate).toLocaleDateString()}`}
                        </td>
                        <td className="py-3 px-2 text-sm">{medication.reason}</td>
                      </tr>
                    ))}
                    {filteredMedications.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-muted-foreground">
                          No medication records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </div>
  );
};

export default HealthRecords;
