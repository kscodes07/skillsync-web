const admin = require("firebase-admin");
const serviceAccount = require("./key.json"); // Path to your service account key JSON file

// Initialize Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Reference to the Firestore database
const db = admin.firestore();

// List of mock jobs
const mockJobs = [
  {
    title: "Software Engineer",
    description: "Developing awesome software.",
    location: "San Francisco, CA",
  },
  {
    title: "Product Manager",
    description: "Leading product development.",
    location: "New York, NY",
  },
  {
    title: "Data Scientist",
    description: "Analyzing and interpreting complex data sets.",
    location: "Seattle, WA",
  },
  {
    title: "UX Designer",
    description: "Creating user-friendly and visually appealing designs.",
    location: "Austin, TX",
  },
  {
    title: "Marketing Specialist",
    description: "Planning and executing marketing campaigns.",
    location: "Chicago, IL",
  },
  {
    title: "Frontend Developer",
    description: "Building responsive and interactive user interfaces.",
    location: "Los Angeles, CA",
  },
  {
    title: "HR Manager",
    description: "Managing human resources functions and processes.",
    location: "Boston, MA",
  },
  {
    title: "Financial Analyst",
    description: "Analyzing financial data and preparing reports.",
    location: "Denver, CO",
  },
  {
    title: "Quality Assurance Engineer",
    description: "Testing software applications for quality and functionality.",
    location: "Atlanta, GA",
  },
  {
    title: "Content Writer",
    description: "Creating engaging and informative written content.",
    location: "San Diego, CA",
  },
];

// Function to upload jobs to Firestore collection
async function uploadJobsToFirestore(jobs) {
  try {
    const batch = db.batch();
    const collectionRef = db.collection("jobs");

    jobs.forEach((job, index) => {
      const docRef = collectionRef.doc(`job${index + 1}`);
      batch.set(docRef, job);
    });

    await batch.commit();
    console.log("Jobs uploaded successfully!");
  } catch (error) {
    console.error("Error uploading jobs:", error);
  }
}

// Upload the mock jobs to Firestore
uploadJobsToFirestore(mockJobs);
