// firebase.ts
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  query,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDj5NxVN1mJrirA-CYnMD2nzLJrBExGD98",
  authDomain: "skillsync-618de.firebaseapp.com",
  projectId: "skillsync-618de",
  storageBucket: "skillsync-618de.appspot.com",
  messagingSenderId: "264916353745",
  appId: "1:264916353745:web:0c67380d3932dd52743bf0",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Function to initialize Cloud Firestore and return a reference to the service
export const getFirestoreInstance = (): Firestore => {
  return getFirestore(app);
};

// Define the Job interface
export interface Job {
  id?: string;
  title: string;
  description: string;
  location: string;
}

// Function to add a job to the "jobs" collection
export const addJob = async (jobData: Job) => {
  const db = getFirestoreInstance();
  try {
    const docRef = await addDoc(collection(db, "jobs"), jobData);
  } catch (error) {
    console.error("Error adding job: ", error);
    throw error;
  }
};

// Function to get all jobs from the "jobs" collection
export const getAllJobs = async () => {
  console.log("HIHI");
  let jobs: any = [];
  const db = getFirestoreInstance();
  try {
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      jobs = [...jobs, { ...doc.data() }];
    });
    console.log("JOBS::" + JSON.stringify(jobs));
    return jobs;
  } catch (error) {
    console.log("Error getting jobs: ", error);
    throw error;
  }
};
