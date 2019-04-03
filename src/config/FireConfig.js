import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";

const config = {
  //TODO: create your firebase project and change it with your credentials :D
  apiKey: "AIzaSyAw6W6ldxS-tiicchEtt95s8v-dS7xPndk",
  authDomain: "fiipractictest.firebaseapp.com",
  databaseURL: "https://fiipractictest.firebaseio.com",
  projectId: "fiipractictest",
  storageBucket: "fiipractictest.appspot.com",
  messagingSenderId: "1067544985014"
};

const firebaseProvider = firebase.initializeApp(config);
export default firebaseProvider;
