
import { useState, useEffect } from 'react';
import { ChildProfile, mockProfiles } from '../types/ChildProfile';
import { db, collection, getDocs, doc, setDoc, updateDoc } from '../lib/firebase';

export interface ProfileManagementResult {
  profiles: ChildProfile[];
  activeProfile: ChildProfile | undefined;
  setProfiles: React.Dispatch<React.SetStateAction<ChildProfile[]>>;
  switchProfile: (profileId: string) => void;
  addProfile: (name: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const useProfileManagement = (): ProfileManagementResult => {
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Find the active profile or default to the first one
  const activeProfile = profiles.find(p => p.isActive) || profiles[0];
  
  // Connect to Firebase and load profiles
  useEffect(() => {
    const loadProfiles = async () => {
      try {
        setIsLoading(true);
        
        try {
          // Fetch profiles from Firestore
          const profilesCollection = collection(db, 'childProfiles');
          const profileSnapshot = await getDocs(profilesCollection);
          
          if (!profileSnapshot.empty) {
            const fetchedProfiles = profileSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as ChildProfile[];
            
            // Ensure at least one profile is active
            let hasActiveProfile = fetchedProfiles.some(p => p.isActive);
            if (!hasActiveProfile && fetchedProfiles.length > 0) {
              fetchedProfiles[0].isActive = true;
              // Update the active profile in Firebase
              const profileRef = doc(db, 'childProfiles', fetchedProfiles[0].id);
              await updateDoc(profileRef, { isActive: true });
            }
            
            setProfiles(fetchedProfiles);
            console.log('Profiles loaded from Firebase:', fetchedProfiles);
          } else {
            // No profiles found in Firestore, use mock data
            console.log('No profiles found in Firebase, using mock data');
            const initializedMockProfiles = mockProfiles.map((profile, index) => ({
              ...profile,
              isActive: index === 0 // Set first profile as active
            }));
            setProfiles(initializedMockProfiles);
            
            // Save mock profiles to Firestore for future use
            initializedMockProfiles.forEach(async (profile) => {
              await setDoc(doc(db, 'childProfiles', profile.id), profile);
            });
          }
          
        } catch (err) {
          console.error('Firebase connection error:', err);
          setError('Failed to connect to Firebase. Using mock data.');
          // Continue with mock data if Firebase connection fails
          const initializedMockProfiles = mockProfiles.map((profile, index) => ({
            ...profile,
            isActive: index === 0 // Set first profile as active
          }));
          setProfiles(initializedMockProfiles);
        }
        
        setInitialized(true);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading profiles:", err);
        setError("Failed to load profiles. Using default data.");
        setProfiles(mockProfiles);
        setIsLoading(false);
      }
    };

    loadProfiles();
  }, []);
  
  const switchProfile = async (profileId: string) => {
    console.log("Switching to profile ID:", profileId);
    // Set the active status for the selected profile and disable for all others
    const updatedProfiles = profiles.map(profile => ({
      ...profile,
      isActive: profile.id === profileId
    }));
    
    setProfiles(updatedProfiles);
    
    // Update profile status in Firebase
    try {
      for (const profile of updatedProfiles) {
        const profileRef = doc(db, 'childProfiles', profile.id);
        await updateDoc(profileRef, { isActive: profile.isActive });
      }
      console.log("Firebase profiles updated with new active state");
    } catch (err) {
      console.error("Error updating profile status in Firebase:", err);
    }
  };
  
  const addProfile = async (name: string) => {
    const newProfile = {
      id: `${Date.now()}`, // Using timestamp for unique ID
      name,
      age: 'Newborn',
      isActive: false
    };
    
    setProfiles(prevProfiles => [...prevProfiles, newProfile]);
    
    // Add new profile to Firebase
    try {
      await setDoc(doc(db, 'childProfiles', newProfile.id), newProfile);
    } catch (err) {
      console.error("Error adding profile to Firebase:", err);
    }
  };
  
  return {
    profiles,
    activeProfile,
    setProfiles,
    switchProfile,
    addProfile,
    isLoading,
    error
  };
};
