
import React, { createContext, useState, useContext, ReactNode } from 'react';

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
  
  // Find the active profile - this line ensures we always have an active profile
  const activeProfile = profiles.find(p => p.isActive) || profiles[0];
  
  const switchProfile = (profileId: string) => {
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
