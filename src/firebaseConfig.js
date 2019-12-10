import firebase from 'firebase';
import 'firebase/storage';
require("firebase/firestore");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdrHsrDzCaUVLnW-LI-rCLC7c7MG548m8",
    authDomain: "mapi-rc.firebaseapp.com",
    databaseURL: "https://mapi-rc.firebaseio.com",
    projectId: "mapi-rc",
    storageBucket: "mapi-rc.appspot.com",
    messagingSenderId: "110427240838",
    appId: "1:110427240838:web:84d6a02ae1acc32b6f1407",
    measurementId: "G-ETHFLGWW68"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }