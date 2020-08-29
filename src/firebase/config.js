import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB-8_bqEeuN5DpdOHFGnS31JFsabCi_gko",
  authDomain: "dsc-noun.firebaseapp.com",
  databaseURL: "https://dsc-noun.firebaseio.com",
  projectId: "dsc-noun",
  storageBucket: "dsc-noun.appspot.com",
  messagingSenderId: "987733089883",
  appId: "1:987733089883:web:7f66cc3d61723aab5a297e",
  measurementId: "G-WJ3N4RPQD2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, provider, timestamp };
