import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvxpJa92Exn6IWvx1frnJlceMbutBI5DM",
  authDomain: "ivy-council.firebaseapp.com",
  databaseURL: "https://ivy-council.firebaseio.com",
  projectId: "ivy-council",
  storageBucket: "ivy-council.appspot.com",
  messagingSenderId: "489198452948",
  appId: "1:489198452948:web:58e65085621c224d5dbb41",
  measurementId: "G-S1PJV5VYN3"
};

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })
// firebase.analytics();

export default firebaseConfig;