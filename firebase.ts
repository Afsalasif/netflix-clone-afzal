
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbDADBCBI5Ny2XQoXEBgDsyoj8MFBU9Y0",
  authDomain: "netflix-clone-afzal.firebaseapp.com",
  projectId: "netflix-clone-afzal",
  storageBucket: "netflix-clone-afzal.appspot.com",
  messagingSenderId: "303736953568",
  appId: "1:303736953568:web:38e127ad6126f6f7444e85"
};

const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db =getFirestore();
const auth = getAuth();

export default app
export {auth,db}