import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAqZKQsJKXGN5C_-KQSV9DCI9oFKdxjw_4",
  authDomain: "crown-db-c5a7e.firebaseapp.com",
  projectId: "crown-db-c5a7e",
  storageBucket: "crown-db-c5a7e.appspot.com",
  messagingSenderId: "674972166777",
  appId: "1:674972166777:web:dde2311a1996b30ef002a8",
  measurementId: "G-XBBBDJZ1E8",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
