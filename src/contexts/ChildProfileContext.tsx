import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { connectToDatabase } from '@/lib/mongodb';

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
  isLoading: boolean;
  error: string | null;
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Find the active profile or default to the first one
  const activeProfile = profiles.find(p => p.isActive) || profiles[0];
  
  // Connect to MongoDB and load profiles
  useEffect(() => {
    const loadProfiles = async () => {
      try {
        setIsLoading(true);
        
        // Try to connect to MongoDB
        try {
          await connectToDatabase();
          console.log('MongoDB connection successful');
          
          // In a real app, we would fetch profiles from MongoDB here
          // For now, we're still using mock data but showing the connection works
          
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 500));
          
        } catch (err) {
          console.error('MongoDB connection error:', err);
          setError('Failed to connect to MongoDB. Using mock data.');
          // Continue with mock data if MongoDB connection fails
        }
        
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
        
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading profiles:", err);
        setError("Failed to load profiles. Using default data.");
        setIsLoading(false);
      }
    };

    loadProfiles();
  }, [initialized, profiles]);
  
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
  
  return (
    <ChildProfileContext.Provider value={{ 
      profiles, 
      activeProfile, 
      setProfiles, 
      switchProfile,
      addProfile,
      isLoading,
      error
    }}>
      {children}
    </ChildProfileContext.Provider>
  );
};
