
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
        <div className="max-w-5xl mx-auto">
          <HealthHeader handleAddRecord={handleAddRecord} />

          <Tabs defaultValue="growth" className="mb-8">
            <TabsList className="grid grid-cols-3 w-full bg-gradient-to-r from-muted/80 to-muted/40 rounded-xl p-1.5 mb-8">
              <TabsTrigger 
                value="growth" 
                className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-healthnest-primary transition-all duration-300"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Growth
              </TabsTrigger>
              <TabsTrigger 
                value="vaccines" 
                className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-healthnest-primary transition-all duration-300"
              >
                <ShieldCheck className="h-4 w-4 mr-2" />
                Vaccines
              </TabsTrigger>
              <TabsTrigger 
                value="visits" 
                className="rounded-lg py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-healthnest-primary transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Visits
              </TabsTrigger>
            </TabsList>

            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-gradient-to-br from-white to-muted/20">
              <TabsContent value="growth" className="animate-fade-in m-0">
                <GrowthTab />
              </TabsContent>

              <TabsContent value="vaccines" className="animate-fade-in m-0">
                <VaccinesTab />
              </TabsContent>

              <TabsContent value="visits" className="animate-fade-in m-0">
                <VisitsTab handleAddRecord={handleAddRecord} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </PageTransition>
    </div>
  );
};

export default Health;
