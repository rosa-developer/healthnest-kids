
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Mock child profiles for demo
export const mockProfiles = [
  { id: '1', name: 'Emma', age: '8 months', isActive: true },
  { id: '2', name: 'Noah', age: '2 years', isActive: false },
  { id: '3', name: 'Oliver', age: 'Pregnancy (24 weeks)', isActive: false }
];

export interface ChildProfile {
  id: string;
  name: string;
  age: string;
  isActive: boolean;
}

interface ChildProfileContextType {
  profiles: ChildProfile[];
  activeProfile: ChildProfile;
  setProfiles: React.Dispatch<React.SetStateAction<ChildProfile[]>>;
  switchProfile: (profileId: string) => void;
  addProfile: (name: string) => void;
}

const ChildProfileContext = createContext<ChildProfileContextType | undefined>(undefined);

export const useChildProfile = () => {
  const context = useContext(ChildProfileContext);
  if (!context) {
    throw new Error('useChildProfile must be used within a ChildProfileProvider');
  }
  return context;
};

export const ChildProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<ChildProfile[]>(mockProfiles);
  const [initialized, setInitialized] = useState(false);
  
  // Find the active profile or default to the first one
  const activeProfile = profiles.find(p => p.isActive) || profiles[0];
  
  useEffect(() => {
    // Ensure at least one profile is active
    if (!profiles.some(p => p.isActive) && profiles.length > 0 && !initialized) {
      setProfiles(prevProfiles => 
        prevProfiles.map((profile, index) => ({
          ...profile,
          isActive: index === 0
        }))
      );
      setInitialized(true);
    }
    
    console.log("ChildProfileProvider useEffect with profiles:", profiles);
  }, [profiles, initialized]);
  
  const switchProfile = (profileId: string) => {
    console.log("Switching to profile ID:", profileId);
    // Set the active status for the selected profile and disable for all others
    setProfiles(prevProfiles => 
      prevProfiles.map(profile => ({
        ...profile,
        isActive: profile.id === profileId
      }))
    );
  };
  
  const addProfile = (name: string) => {
    const newProfile = {
      id: `${profiles.length + 1}`,
      name,
      age: 'Newborn',
      isActive: false
    };
    
    setProfiles(prevProfiles => [...prevProfiles, newProfile]);
  };
  
  console.log("ChildProfileProvider rendering with active profile:", activeProfile);
  
  return (
    <ChildProfileContext.Provider value={{ 
      profiles, 
      activeProfile, 
      setProfiles, 
      switchProfile,
      addProfile
    }}>
      {children}
    </ChildProfileContext.Provider>
  );
};
