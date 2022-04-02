// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDml093VZAUbhirXtUZ6uun5qa5Gm6uBBo",
    authDomain: "wm-react.firebaseapp.com",
    projectId: "wm-react",
    storageBucket: "wm-react.appspot.com",
    messagingSenderId: "859407046554",
    appId: "1:859407046554:web:17ca949b28e4d17cb98c23",
    measurementId: "G-LHK6YMB7JC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)