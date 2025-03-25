
import React from 'react';
import { ChevronDown } from "lucide-react";
import { useChildProfile } from '../../../contexts/ChildProfileContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Baby } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const ChildProfileHeader = () => {
  const { profiles, activeProfile, switchProfile } = useChildProfile();

  const handleProfileChange = (profileId: string) => {
    console.log("ChildProfileHeader switching to profile:", profileId);
    switchProfile(profileId);
    
    const selectedProfile = profiles.find(p => p.id === profileId);
    if (selectedProfile) {
      toast({
        title: "Profile Changed",
        description: `Switched to ${selectedProfile.name}'s profile.`
      });
    }
  };

  // Display a default text if no active profile is available
  const displayName = activeProfile?.name || 'Select Profile';

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
        Current Child
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal"
          >
            {displayName} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {profiles.map(profile => (
            <DropdownMenuItem 
              key={profile.id}
              onClick={() => handleProfileChange(profile.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Baby className="h-3 w-3 text-primary" />
              </div>
              {profile.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChildProfileHeader;
