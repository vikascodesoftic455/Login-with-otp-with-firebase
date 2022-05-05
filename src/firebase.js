import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBuYb1LeB8_PTI35vWjRmNS5yi-R0d9PUc",
    authDomain: "adroit-standard-338511.firebaseapp.com",
    projectId: "adroit-standard-338511",
    storageBucket: "adroit-standard-338511.appspot.com",
    messagingSenderId: "563131240149",
    appId: "1:563131240149:web:249649de0bae328e861c5c",
    measurementId: "G-57JQBCZTLP"
  };


firebase.initializeApp(firebaseConfig);
  
export default firebase