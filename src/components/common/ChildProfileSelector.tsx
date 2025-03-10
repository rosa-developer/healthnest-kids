
import React, { useState } from 'react';
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

// Mock child profiles for demo
const mockProfiles = [
  { id: '1', name: 'Emma', age: '8 months', isActive: true },
  { id: '2', name: 'Noah', age: '2 years', isActive: false },
  { id: '3', name: 'Oliver', age: 'Pregnancy (24 weeks)', isActive: false }
];

interface ChildProfileSelectorProps {
  onProfileChange?: (profileId: string) => void;
}

const ChildProfileSelector: React.FC<ChildProfileSelectorProps> = ({ onProfileChange }) => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [newChildName, setNewChildName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const activeProfile = profiles.find(p => p.isActive) || profiles[0];

  const handleProfileChange = (profileId: string) => {
    const updatedProfiles = profiles.map(profile => ({
      ...profile,
      isActive: profile.id === profileId
    }));
    setProfiles(updatedProfiles);
    
    if (onProfileChange) {
      onProfileChange(profileId);
    }
    
    toast({
      title: "Profile Changed",
      description: `Switched to ${updatedProfiles.find(p => p.id === profileId)?.name}'s profile.`
    });
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
    
    const newProfile = {
      id: `${profiles.length + 1}`,
      name: newChildName,
      age: 'Newborn',
      isActive: false
    };
    
    setProfiles([...profiles, newProfile]);
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
            <div className="h-8 w-8 rounded-full bg-healthnest-soft-blue flex items-center justify-center">
              <Baby className="h-4 w-4 text-healthnest-primary" />
            </div>
            <span>{activeProfile.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Switch Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {profiles.map(profile => (
            <DropdownMenuItem 
              key={profile.id}
              onClick={() => handleProfileChange(profile.id)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-healthnest-soft-blue flex items-center justify-center">
                  <Baby className="h-3 w-3 text-healthnest-primary" />
                </div>
                <div>
                  <span className="block">{profile.name}</span>
                  <span className="block text-xs text-muted-foreground">{profile.age}</span>
                </div>
              </div>
              {profile.isActive && <Check className="h-4 w-4 text-healthnest-primary" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <DropdownMenuItem 
                onSelect={(e) => e.preventDefault()}
                className="text-healthnest-primary focus:text-healthnest-primary"
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
