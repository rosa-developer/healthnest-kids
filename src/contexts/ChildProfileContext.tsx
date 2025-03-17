import React, { createContext, useContext, ReactNode } from 'react';
import { useProfileManagement, ProfileManagementResult } from '../hooks/useProfileManagement';
import { ChildProfile } from '../types/ChildProfile';

interface ChildProfileContextType extends ProfileManagementResult {}

const ChildProfileContext = createContext<ChildProfileContextType | undefined>(undefined);

export const useChildProfile = () => {
  const context = useContext(ChildProfileContext);
  if (!context) {
    throw new Error('useChildProfile must be used within a ChildProfileProvider');
  }
  return context;
};

export const ChildProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const profileManagement = useProfileManagement();
  
  return (
    <ChildProfileContext.Provider value={profileManagement}>
      {children}
    </ChildProfileContext.Provider>
  );
};

// Re-export types and mocks for convenience
export { type ChildProfile } from '../types/ChildProfile';
export { mockProfiles } from '../types/ChildProfile';
