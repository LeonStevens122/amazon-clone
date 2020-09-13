import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa0mjSXjgEdfRRBw4vmFHGIju1OLWyqQY",
  authDomain: "clone-37290.firebaseapp.com",
  databaseURL: "https://clone-37290.firebaseio.com",
  projectId: "clone-37290",
  storageBucket: "clone-37290.appspot.com",
  messagingSenderId: "40290233264",
  appId: "1:40290233264:web:113820c9144393767bc475",
  measurementId: "G-W2M0LC0EGE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
