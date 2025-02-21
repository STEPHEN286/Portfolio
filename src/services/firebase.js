import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";


  const firebaseConfig = {
    apiKey: "AIzaSyCB6HN3zAC3D75cpQLPcey8MbplYlOBZ9E",
    authDomain: "portfolio-25a10.firebaseapp.com",
    databaseURL: "https://portfolio-25a10-default-rtdb.firebaseio.com",
    projectId: "portfolio-25a10",
    storageBucket: "portfolio-25a10.firebasestorage.app",
    messagingSenderId: "941298423244",
    appId: "1:941298423244:web:ec40546fc53394bf23b969",
    measurementId: "G-KSK77B9RLV"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push, onValue , get };

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


