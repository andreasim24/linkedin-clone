import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB847KqjZOAuYFuZY0zic3Qp2-EBO6ncJk",
  authDomain: "linkedin-clone-fe6c1.firebaseapp.com",
  projectId: "linkedin-clone-fe6c1",
  storageBucket: "linkedin-clone-fe6c1.appspot.com",
  messagingSenderId: "423155502332",
  appId: "1:423155502332:web:a66110f062dc74ab129b79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
