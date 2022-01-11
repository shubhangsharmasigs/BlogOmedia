import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAhqvowGWvYvDzMnw5e6rG8EbgJ9rleacY",
    authDomain: "thoughts-store.firebaseapp.com",
    projectId: "thoughts-store",
    storageBucket: "thoughts-store.appspot.com",
    messagingSenderId: "723414985991",
    appId: "1:723414985991:web:a6f82e56526f1f9ba529a2",
    measurementId: "G-3FZ2H608CE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth} ;