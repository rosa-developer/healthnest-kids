
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, Plus } from 'lucide-react';
import FamilyMemberCard from './FamilyMemberCard';
import { useToast } from "@/hooks/use-toast";

const FamilyMembersSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleAddProfile = () => {
    toast({
      title: "Coming Soon",
      description: "Profile creation will be available in the next update!"
    });
  };

  return (
    <Card className="border border-border shadow-soft mb-6">
      <CardHeader className="pb-2 flex justify-between items-center">
        <CardTitle className="text-lg flex items-center">
          <UserCircle className="h-5 w-5 mr-2 text-healthnest-primary" />
          Family Members
        </CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddProfile}
          className="text-healthnest-primary"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Profile
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <FamilyMemberCard name="Emma" age="8 months old" photoSrc="/baby-emma.jpg" />
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyMembersSection;
