
import { initializeApp } from 'firebase/app';
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
  limit
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your Firebase API key
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Connection status monitor
let connectionStatus: 'connected' | 'connecting' | 'error' = 'connecting';

// Test database connection
const testConnection = async () => {
  try {
    connectionStatus = 'connecting';
    await getDocs(collection(db, 'test-connection'));
    connectionStatus = 'connected';
    console.log('Firebase connection successful');
    return true;
  } catch (error) {
    connectionStatus = 'error';
    console.error('Firebase connection error:', error);
    return false;
  }
};

// Initialize connection test
testConnection();

// Get the current connection status
const getConnectionStatus = () => connectionStatus;

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
  getConnectionStatus
};
