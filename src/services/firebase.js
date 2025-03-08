import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";

// Verify environment variables are loaded
const requiredEnvVars = [
  'REACT_APP_FIREBASE_API_KEY',
  'REACT_APP_FIREBASE_AUTH_DOMAIN',
  'REACT_APP_FIREBASE_DATABASE_URL',
  'REACT_APP_FIREBASE_PROJECT_ID',
  'REACT_APP_FIREBASE_STORAGE_BUCKET',
  'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  'REACT_APP_FIREBASE_APP_ID',
  'REACT_APP_FIREBASE_MEASUREMENT_ID'
];

// Check if any required environment variables are missing
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  throw new Error('Missing required Firebase configuration. Check .env file.');
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase with error handling
let app;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export const getProjectCount = async () => {
  try {
    const projectsRef = ref(database, 'projects');
    const snapshot = await get(projectsRef);
    
    if (snapshot.exists()) {
      const projects = snapshot.val();
      return Object.keys(projects).length;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching project count:', error);
    return 0;
  }
};

export const fetchProjects = async () => {
  try {
    const projectsRef = ref(database, 'projects');
    const snapshot = await get(projectsRef);
    
    if (snapshot.exists()) {
      const projects = snapshot.val();
      return Object.values(projects);
    }
    return [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export { database, ref, set, push, onValue, get };

// export const fetchProjects = async () => {
//   const dbRef = ref(database, "projects");
//   const snapshot = await get(dbRef);
//   if (snapshot.exists()) {
    
//     const data = snapshot.onValue ()
//     return data
//   } else {
//     console.log("No data available");
//   }
// };


