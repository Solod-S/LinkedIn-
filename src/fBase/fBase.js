import firebase from "firebase";
const apiKey = process.env.REACT_APP_API_KEY;

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey,
  authDomain: "linkedin-clone-c1710.firebaseapp.com",
  projectId: "linkedin-clone-c1710",
  storageBucket: "linkedin-clone-c1710.appspot.com",
  messagingSenderId: "132246881336",
  appId: "1:132246881336:web:f4b9354a55533b220812cd",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
