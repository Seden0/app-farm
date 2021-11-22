// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwlUJ7p2-P-_YVe70p7Q1aok9P-DWCMDs",
  authDomain: "customers-5a004.firebaseapp.com",
  databaseURL: "https://customers-5a004-default-rtdb.firebaseio.com",
  projectId: "customers-5a004",
  storageBucket: "customers-5a004.appspot.com",
  messagingSenderId: "1046798139711",
  appId: "1:1046798139711:web:0eb5f3b05b20e012ef938a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
