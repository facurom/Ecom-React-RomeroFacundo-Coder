
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyD1lfGtOgseimPMgpz2KWAgkeZBzWbLsiI",
  authDomain: "ecom-react-4b3bd.firebaseapp.com",
  projectId: "ecom-react-4b3bd",
  storageBucket: "ecom-react-4b3bd.appspot.com",
  messagingSenderId: "996598881081",
  appId: "1:996598881081:web:18d4569455304f654866e8",
  measurementId: "G-4RPZEGJQS4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const initFirestore = () => app