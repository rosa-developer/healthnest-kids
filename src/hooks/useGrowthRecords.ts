
import { useState, useEffect } from 'react';
import { GrowthRecord, mockGrowthRecords } from '../types/GrowthRecord';
import { 
  safeCollection, 
  safeDoc, 
  getConnectionStatus, 
  getDocs, 
  setDoc,
  DocumentData
} from '../lib/firebase';
import { useToast } from './use-toast';

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
            const recordsCollection = safeCollection(`childProfiles/${childId}/growthRecords`);
            const recordsSnapshot = await getDocs(recordsCollection);
            
            if (!recordsSnapshot.empty) {
              const fetchedRecords = recordsSnapshot.docs.map((doc: DocumentData) => ({
                id: doc.id,
                ...doc.data(),
                date: doc.data().date.toDate() // Convert Firestore timestamp to JS Date
              })) as GrowthRecord[];
              
              setRecords(fetchedRecords.sort((a, b) => b.date.getTime() - a.date.getTime()));
              console.log('Growth records loaded from Firebase:', fetchedRecords);
            } else {
              // No records found in Firestore, use mock data
              console.log('No growth records found in Firebase, using mock data');
              setRecords(mockGrowthRecords);
              
              // Save mock records to Firestore for future use
              for (const record of mockGrowthRecords) {
                await setDoc(safeDoc(`childProfiles/${childId}/growthRecords`, record.id), record);
              }
            }
          } catch (error) {
            console.error('Firebase error:', error);
            setRecords(mockGrowthRecords);
            setError('Failed to fetch growth records from database');
          }
        } else {
          // Not connected to Firebase, use mock data
          setRecords(mockGrowthRecords);
          if (connectionStatus === 'error') {
            setError('Using offline data - changes will not be saved');
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
  }, [childId]);

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
