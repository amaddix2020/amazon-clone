import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzsCeJ3U7zMttQJ87hlfcqe7xaICkvFPY",
    authDomain: "clone2-e567e.firebaseapp.com",
    projectId: "clone2-e567e",
    storageBucket: "clone2-e567e.appspot.com",
    messagingSenderId: "226959511679",
    appId: "1:226959511679:web:af7a1156da5a1aebffaf4a",
    measurementId: "G-K25E9MTDQX"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };