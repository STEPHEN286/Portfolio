import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { get, ref } from "firebase/database";

export default function useFetch() {
  const [state, setState] = useState({
    projects: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchProjects = async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const snapshot = await get(ref(database, "projects"));

        if (!snapshot.exists()) {
          console.log("No data available");
          setState({ projects: [], loading: false, error: null });
          return;
        }

        const data = snapshot.val();
        
        if (!data || typeof data !== "object") {
          console.error("Invalid data format:", data);
          setState({ projects: [], loading: false, error: null });
          return;
        }

        const projectsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));

        

        console.log("projectArray:", projectsArray);
        
        setState({ projects: projectsArray, loading: false, error: null });
      } catch (error) {
        console.error("Error fetching projects:", error);
        setState({ projects: [], loading: false, error });
      }
    };

    fetchProjects();
  }, []);

  return state; // Returning the entire state object
}
