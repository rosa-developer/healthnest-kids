
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
    <div className="space-y-6 p-6 rounded-xl bg-gradient-to-br from-blue-100/70 to-purple-50/70 dark:from-blue-900/20 dark:to-purple-900/10 shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/5 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-purple bg-white/70 dark:bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-primary-purple/20">
          {activeProfile?.name}'s Growth Journey
        </h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary-green to-primary-green/80 hover:from-primary-green/90 hover:to-primary-green/70 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
              <Plus className="mr-2 h-4 w-4" />
              Add Growth Record
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] border-primary-purple/20 bg-white/95 backdrop-blur-md">
            <DialogHeader>
              <DialogTitle className="text-primary-purple">Record Growth Data</DialogTitle>
            </DialogHeader>
            <GrowthRecordForm onSubmit={handleAddRecord} childId={childId} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="records" className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <TabsList className="bg-white/80 dark:bg-black/30 p-1 shadow-sm backdrop-blur-sm border border-white/20 dark:border-white/5 rounded-lg">
          <TabsTrigger 
            value="records" 
            className="data-[state=active]:bg-primary-green/20 data-[state=active]:text-primary-green font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary-green"
          >
            Growth Records
          </TabsTrigger>
          <TabsTrigger 
            value="charts"
            className="data-[state=active]:bg-primary-purple/20 data-[state=active]:text-primary-purple font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary-purple"
          >
            Growth Charts
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="records" className="mt-6 animate-fade-in">
          <Card className="border border-primary-green/10 bg-white/90 backdrop-blur-sm dark:bg-black/30 shadow-lg card-hover">
            <CardHeader className="pb-2 bg-gradient-to-r from-primary-green/10 to-transparent rounded-t-lg">
              <CardTitle className="text-lg text-primary-green">Growth History</CardTitle>
            </CardHeader>
            <CardContent>
              <GrowthRecordList records={records} isLoading={isLoading} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="charts" className="mt-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-primary-pink/10 bg-white/90 backdrop-blur-sm dark:bg-black/30 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-primary-pink/10 to-transparent rounded-t-lg">
                <CardTitle className="text-lg text-primary-pink">Weight Over Time</CardTitle>
                <LineChart className="h-5 w-5 text-primary-pink" />
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-md border">
                  <div className="text-center p-4">
                    <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Weight chart visualization will appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary-purple/10 bg-white/90 backdrop-blur-sm dark:bg-black/30 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-primary-purple/10 to-transparent rounded-t-lg">
                <CardTitle className="text-lg text-primary-purple">Height Over Time</CardTitle>
                <LineChart className="h-5 w-5 text-primary-purple" />
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-md border">
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
