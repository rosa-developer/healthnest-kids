import { useState, useEffect, useRef } from 'react';
import { GrowthRecord, mockGrowthRecords } from '../types/GrowthRecord';
import { 
  safeCollection, 
  safeDoc, 
  getConnectionStatus, 
  getDocs, 
  setDoc,
  type DocumentData
} from '../lib/firebase';
import { useToast } from './use-toast';

// Type guard for Firestore Timestamps
const isFirestoreTimestamp = (value: any): value is { toDate(): Date } =>
  value && typeof value === 'object' && 'toDate' in value && typeof value.toDate === 'function';

// Utility to sort records by date (newest first)
const sortByDateDesc = (a: GrowthRecord, b: GrowthRecord) => b.date.getTime() - a.date.getTime();

export const useGrowthRecords = (childId: string) => {
  const [records, setRecords] = useState<GrowthRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const toastRef = useRef(toast);

  // Stabilize the toast dependency
  useEffect(() => {
    toastRef.current = toast;
  }, [toast]);

  const handleFirestoreData = async (snapshot: any) => {
    if (snapshot.empty) return null;

    const fetchedRecords = snapshot.docs.map((doc: any) => {
      const data = doc.data();
      const dateValue = data.date;
      const date =
        dateValue instanceof Date
          ? dateValue
          : isFirestoreTimestamp(dateValue)
          ? dateValue.toDate()
          : new Date();

      return { ...data, id: doc.id, date } as GrowthRecord;
    });

    return fetchedRecords.sort(sortByDateDesc);
  };

  const loadGrowthRecords = async () => {
    try {
      setIsLoading(true);
      const connectionStatus = getConnectionStatus();

      if (connectionStatus === 'connected') {
        const recordsCollection = safeCollection<GrowthRecord>(`childProfiles/${childId}/growthRecords`);
        const recordsSnapshot = await getDocs(recordsCollection);

        const fetchedRecords = await handleFirestoreData(recordsSnapshot);

        if (fetchedRecords) {
          setRecords(fetchedRecords);
          console.log('Growth records loaded from Firebase:', fetchedRecords);
        } else {
          console.log('No growth records found in Firebase, using mock data');
          await handleMockData();
        }
      } else {
        await handleOfflineMode(connectionStatus);
      }
    } catch (err) {
      console.error('Error loading growth records:', err);
      setError('Failed to load growth records');
      setRecords(mockGrowthRecords);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMockData = async () => {
    setRecords(mockGrowthRecords);

    // Save mock data to Firestore for future use
    await Promise.all(
      mockGrowthRecords.map((record) =>
        setDoc(safeDoc(`childProfiles/${childId}/growthRecords`, record.id), record)
      )
    );

    toastRef.current({
      title: 'Demo data loaded',
      description: 'Using sample growth records for demonstration.',
    });
  };

  const handleOfflineMode = async (connectionStatus: string) => {
    setRecords(mockGrowthRecords);
    if (connectionStatus === 'error') {
      setError('Using offline data - changes will not be saved');
      toastRef.current({
        title: 'Offline mode',
        description: "Using local data. Changes won't sync to the cloud.",
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    loadGrowthRecords();
  }, [childId]);

  const addGrowthRecord = async (newRecord: Omit<GrowthRecord, 'id'>) => {
    try {
      const recordId = `${Date.now()}`;
      const record: GrowthRecord = { ...newRecord, id: recordId };

      setRecords((prev) => [record, ...prev].sort(sortByDateDesc));

      if (getConnectionStatus() === 'connected') {
        await setDoc(safeDoc(`childProfiles/${childId}/growthRecords`, recordId), record);

        toastRef.current({
          title: 'Growth record saved',
          description: "Your baby's growth data has been recorded.",
        });
      } else {
        toastRef.current({
          title: 'Offline mode',
          description: 'Growth record saved locally. Connect to save to the cloud.',
          variant: 'destructive',
        });
      }

      return record;
    } catch (error) {
      console.error('Error adding growth record:', error);
      toastRef.current({
        title: 'Error',
        description: 'Failed to save growth record.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  return {
    records,
    addGrowthRecord,
    isLoading,
    error,
  };
};
