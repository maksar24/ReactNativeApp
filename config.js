import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSuqly568LfhD97NhN97JlMfyL2bS3mdU",
  authDomain: "studentproject-ee4a4.firebaseapp.com",
  databaseURL:
    "https://studentproject-ee4a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studentproject-ee4a4",
  storageBucket: "studentproject-ee4a4.firebasestorage.app",
  messagingSenderId: "446752489996",
  appId: "1:446752489996:web:495bd217a848960deb6429",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
