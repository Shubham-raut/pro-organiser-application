import firebase from 'firebase';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3lhKK0SIX9L8jTRFYWQMxJ6Fo2xAmCY0",
    authDomain: "pro-organizer-app-376ab.firebaseapp.com",
    databaseURL: "https://pro-organizer-app-376ab.firebaseio.com",
    projectId: "pro-organizer-app-376ab",
    storageBucket: "pro-organizer-app-376ab.appspot.com",
    messagingSenderId: "1069105298115",
    appId: "1:1069105298115:web:cd00b75ea4eb8228dec076",
    measurementId: "G-NNFQXP3035"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

// firebase.initializeApp(firebaseConfig);