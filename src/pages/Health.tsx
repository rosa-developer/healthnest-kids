
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ShieldCheck, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Imported components after refactoring
import HealthHeader from '@/components/health/HealthHeader';
import GrowthTab from '@/components/health/tabs/GrowthTab';
import VaccinesTab from '@/components/health/tabs/VaccinesTab';
import VisitsTab from '@/components/health/tabs/VisitsTab';

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
        <HealthHeader handleAddRecord={handleAddRecord} />

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
            <GrowthTab />
          </TabsContent>

          <TabsContent value="vaccines" className="animate-fade-in">
            <VaccinesTab />
          </TabsContent>

          <TabsContent value="visits" className="animate-fade-in">
            <VisitsTab handleAddRecord={handleAddRecord} />
          </TabsContent>
        </Tabs>
      </PageTransition>
    </div>
  );
};

export default Health;
