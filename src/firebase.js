// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import 'firebase/storage'
import 'firebase/database'
import { getDatabase } from "firebase/database";

  const firebaseConfig = {
    apiKey: "AIzaSyB4sCP2cISRt4pd-sf34MOAo2LMsXzzIG4",
    authDomain: "reacthttp-d289b.firebaseapp.com",
    databaseURL: "https://reacthttp-d289b-default-rtdb.firebaseio.com",
    projectId: "reacthttp-d289b",
    storageBucket: "reacthttp-d289b.appspot.com",
    messagingSenderId: "104273539540",
    appId: "1:104273539540:web:53ac5489d287a835a32641",
    measurementId: "G-D4N7B9SZ8P"
  };
// export default startFirebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

// NOTES
// Firebase ko yha use krne k doo tgareeke h, ek to ye wla ek oor h jisme hum function bnate h oor firebase ko export krte h
// 