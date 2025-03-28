
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Baby, Plus, Check } from 'lucide-react';
import { useChildProfile } from '../../contexts/ChildProfileContext';

const ChildProfileSelector: React.FC = () => {
  const [newChildName, setNewChildName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { profiles, activeProfile, switchProfile, addProfile } = useChildProfile();

  // Add a fallback for when activeProfile is undefined
  const displayName = activeProfile?.name || 'Select Profile';

  useEffect(() => {
    console.log("ChildProfileSelector rendering with activeProfile:", activeProfile);
  }, [activeProfile]);

  const handleProfileChange = (profileId: string) => {
    console.log("ChildProfileSelector switching to profile ID:", profileId);
    
    // Check if we're already on this profile
    if (activeProfile?.id !== profileId) {
      switchProfile(profileId);
      
      const selectedProfile = profiles.find(p => p.id === profileId);
      if (selectedProfile) {
        toast({
          title: "Profile Changed",
          description: `Switched to ${selectedProfile.name}'s profile.`
        });
      }
    } else {
      console.log("Already on this profile, no change needed");
    }
  };

  const handleAddChild = () => {
    if (!newChildName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter a name for the child.",
        variant: "destructive"
      });
      return;
    }
    
    addProfile(newChildName);
    setNewChildName('');
    setIsDialogOpen(false);
    
    toast({
      title: "Child Added",
      description: `${newChildName}'s profile has been created.`
    });
  };

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-2 text-sm font-medium"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Baby className="h-4 w-4 text-primary" />
            </div>
            <span>{displayName}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 z-50 bg-white border shadow-md">
          <DropdownMenuLabel>Switch Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {profiles.map(profile => (
            <DropdownMenuItem 
              key={profile.id}
              onClick={() => handleProfileChange(profile.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Baby className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <span className="block">{profile.name}</span>
                  <span className="block text-xs text-muted-foreground">{profile.age}</span>
                </div>
              </div>
              {profile.isActive && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()}
                className="text-primary focus:text-primary cursor-pointer"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Child
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Child</DialogTitle>
                <DialogDescription>
                  Enter your child's name to create a new profile.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="Child's name"
                  value={newChildName}
                  onChange={(e) => setNewChildName(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddChild}>
                  Create Profile
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChildProfileSelector;
