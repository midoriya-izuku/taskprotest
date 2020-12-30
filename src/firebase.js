import firebase from "firebase/app";
var firebaseConfig = {
    apiKey: "AIzaSyDp9YNJJxP2kI3fT2mW38WgaszDOhG2v9s",
    authDomain: "taskpro-test-9b74f.firebaseapp.com",
    databaseURL: "https://taskpro-test-9b74f-default-rtdb.firebaseio.com",
    projectId: "taskpro-test-9b74f",
    storageBucket: "taskpro-test-9b74f.appspot.com",
    messagingSenderId: "902781417647",
    appId: "1:902781417647:web:f1a9d5836da697f6147c5a"
  };
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export default app;
