
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { useGrowthRecords } from '@/hooks/useGrowthRecords';
import GrowthRecordForm from './GrowthRecordForm';
import GrowthRecordList from './GrowthRecordList';
import { Button } from '@/components/ui/button';
import { GrowthRecord } from '@/types/GrowthRecord';
import { LineChart, BarChart3, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GrowthPage: React.FC = () => {
  const { activeProfile } = useChildProfile();
  const childId = activeProfile?.id || '1';
  const { records, addGrowthRecord, isLoading, error } = useGrowthRecords(childId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddRecord = async (data: Omit<GrowthRecord, 'id'>) => {
    await addGrowthRecord(data);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{activeProfile?.name}'s Growth</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Growth Record
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Record Growth Data</DialogTitle>
            </DialogHeader>
            <GrowthRecordForm onSubmit={handleAddRecord} childId={childId} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="records">
        <TabsList>
          <TabsTrigger value="records">Growth Records</TabsTrigger>
          <TabsTrigger value="charts">Growth Charts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="records" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Growth History</CardTitle>
            </CardHeader>
            <CardContent>
              <GrowthRecordList records={records} isLoading={isLoading} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="charts" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Weight Over Time</CardTitle>
                <LineChart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md border">
                  <div className="text-center p-4">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Weight chart visualization will appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Height Over Time</CardTitle>
                <LineChart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md border">
                  <div className="text-center p-4">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Height chart visualization will appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrowthPage;
