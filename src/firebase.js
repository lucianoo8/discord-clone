import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC**************************",
  authDomain: "discord-clone-f28a8.firebaseapp.com",
  projectId: "discord-clone-f28a8",
  messagingSenderId: "253506169106",
  appId: "1:2535061****************************",
  measurementId: "G-***********"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;