// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkeIbtUXPcHWp-RJmOyzTP5Jngmn--Ryc",
  authDomain: "linkedin-clone-c1710.firebaseapp.com",
  projectId: "linkedin-clone-c1710",
  storageBucket: "linkedin-clone-c1710.appspot.com",
  messagingSenderId: "132246881336",
  appId: "1:132246881336:web:f4b9354a55533b220812cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
