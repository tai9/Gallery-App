import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCexWH90ZfxXpTsJMneYi3bDWwTOw1TSxs",
  authDomain: "images-blog-6265a.firebaseapp.com",
  projectId: "images-blog-6265a",
  storageBucket: "images-blog-6265a.appspot.com",
  messagingSenderId: "601136808108",
  appId: "1:601136808108:web:2241e06863159ff660df09",
  measurementId: "G-RK63PJ192K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
