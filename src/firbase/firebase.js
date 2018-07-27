import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDT1J8D4p1mm0GHhTIeIDcgyNfwYByRkGk",
  authDomain: "positivo-c0697.firebaseapp.com",
  databaseURL: "https://positivo-c0697.firebaseio.com",
  projectId: "positivo-c0697",
  storageBucket: "positivo-c0697.appspot.com",
  messagingSenderId: "727575854152"
};

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { database, auth, googleProvider, firebase as default };
