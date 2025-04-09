
import { useState, useEffect } from 'react';
import { GrowthRecord, mockGrowthRecords } from '../types/GrowthRecord';
import { 
  safeCollection, 
  safeDoc, 
  getConnectionStatus, 
  getDocs, 
  setDoc,
  type DocumentData,
  type Timestamp
} from '../lib/firebase';
import { useToast } from './use-toast';

// Define a type guard for Firestore Timestamp
const isFirestoreTimestamp = (value: any): value is Timestamp => {
  return value && typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function';
};

export const useGrowthRecords = (childId: string) => {
  const [records, setRecords] = useState<GrowthRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadGrowthRecords = async () => {
      try {
        setIsLoading(true);
        const connectionStatus = getConnectionStatus();
        
        if (connectionStatus === 'connected') {
          try {
            // Fetch records from Firestore
            const recordsCollection = safeCollection<GrowthRecord>(`childProfiles/${childId}/growthRecords`);
            const recordsSnapshot = await getDocs(recordsCollection);
            
            if (!recordsSnapshot.empty) {
              const fetchedRecords = recordsSnapshot.docs.map((doc) => {
                const data = doc.data();
                // Handle Firestore timestamp to JS Date conversion
                const dateValue = data.date;
                // Check if it's a Date, Firestore Timestamp, or fallback to current date
                let date: Date;
                
                if (dateValue instanceof Date) {
                  date = dateValue;
                } else if (isFirestoreTimestamp(dateValue)) {
                  // The type guard ensures dateValue has toDate method
                  date = dateValue.toDate();
                } else {
                  // Default to current date if neither Date nor Timestamp
                  date = new Date();
                }
                
                return {
                  ...data,
                  id: doc.id,
                  date
                } as GrowthRecord;
              });
              
              // Sort records by date (newest first)
              setRecords(fetchedRecords.sort((a, b) => b.date.getTime() - a.date.getTime()));
              console.log('Growth records loaded from Firebase:', fetchedRecords);
            } else {
              // No records found in Firestore, use mock data
              console.log('No growth records found in Firebase, using mock data');
              setRecords(mockGrowthRecords);
              
              // Save mock records to Firestore for future use
              await Promise.all(mockGrowthRecords.map(record => 
                setDoc(safeDoc(`childProfiles/${childId}/growthRecords`, record.id), record)
              ));
              
              toast({
                title: "Demo data loaded",
                description: "Using sample growth records for demonstration.",
              });
            }
          } catch (error) {
            console.error('Firebase error:', error);
            setRecords(mockGrowthRecords);
            setError('Failed to fetch growth records from database');
            
            toast({
              title: "Connection issue",
              description: "Using offline data temporarily.",
              variant: "destructive"
            });
          }
        } else {
          // Not connected to Firebase, use mock data
          setRecords(mockGrowthRecords);
          if (connectionStatus === 'error') {
            setError('Using offline data - changes will not be saved');
            
            toast({
              title: "Offline mode",
              description: "Using local data. Changes won't sync to the cloud.",
              variant: "destructive"
            });
          }
        }
      } catch (err) {
        console.error('Error loading growth records:', err);
        setError('Failed to load growth records');
        setRecords(mockGrowthRecords);
      } finally {
        setIsLoading(false);
      }
    };

    loadGrowthRecords();
  }, [childId, toast]);

  const addGrowthRecord = async (newRecord: Omit<GrowthRecord, 'id'>) => {
    try {
      const recordId = `${Date.now()}`;
      const record: GrowthRecord = {
        ...newRecord,
        id: recordId
      };

      // Update state
      setRecords(prev => [record, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()));
      
      // Try to save to Firebase if connected
      if (getConnectionStatus() === 'connected') {
        await setDoc(safeDoc(`childProfiles/${childId}/growthRecords`, recordId), record);
        toast({
          title: "Growth record saved",
          description: "Your baby's growth data has been recorded.",
        });
      } else {
        toast({
          title: "Offline mode",
          description: "Growth record saved locally. Connect to save to the cloud.",
          variant: "destructive"
        });
      }
      
      return record;
    } catch (error) {
      console.error('Error adding growth record:', error);
      toast({
        title: "Error",
        description: "Failed to save growth record.",
        variant: "destructive"
      });
      throw error;
    }
  };

  return {
    records,
    addGrowthRecord,
    isLoading,
    error
  };
};
