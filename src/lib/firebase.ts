
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  Firestore,
  DocumentData,
  CollectionReference,
  DocumentReference
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  Auth 
} from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  // Using mock config that will work in development mode
  apiKey: "mock-api-key",
  authDomain: "mock-auth-domain",
  projectId: "mock-project-id",
  storageBucket: "mock-storage-bucket",
  messagingSenderId: "mock-sender-id",
  appId: "mock-app-id"
};

// Initialize Firebase - with error handling
let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let auth: Auth | undefined;
let storage: FirebaseStorage | undefined;

// Connection status monitor
let connectionStatus: 'connected' | 'connecting' | 'error' = 'connecting';

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  connectionStatus = 'error';
}

// Test database connection
const testConnection = async () => {
  try {
    connectionStatus = 'connecting';
    if (!db) {
      connectionStatus = 'error';
      return false;
    }
    
    try {
      // Just test the connection, don't actually need to get docs
      await getDocs(collection(db, 'test-connection'));
      connectionStatus = 'connected';
      console.log('Firebase connection successful');
      return true;
    } catch (error) {
      connectionStatus = 'error';
      console.error('Firebase connection error:', error);
      return false;
    }
  } catch (error) {
    connectionStatus = 'error';
    console.error('Firebase test connection error:', error);
    return false;
  }
};

// Initialize connection test with more frequent retries
setTimeout(() => {
  testConnection();
}, 1000);

// Retry connection periodically in case of initial failure
setInterval(() => {
  if (connectionStatus !== 'connected') {
    testConnection();
  }
}, 30000); // Try every 30 seconds if not connected

// Get the current connection status
const getConnectionStatus = () => connectionStatus;

// Type-safe collection helper function
const safeCollection = <T = DocumentData>(path: string): CollectionReference<T> => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }
  return collection(db, path) as CollectionReference<T>;
};

// Type-safe document helper function
const safeDoc = <T = DocumentData>(path: string, ...pathSegments: string[]): DocumentReference<T> => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }
  return doc(db, path, ...pathSegments) as DocumentReference<T>;
};

export { 
  app, 
  db, 
  auth, 
  storage, 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  getConnectionStatus,
  safeCollection,
  safeDoc,
  DocumentData
};
