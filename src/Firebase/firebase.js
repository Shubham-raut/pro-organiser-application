import * as firebase from 'firebase';

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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
