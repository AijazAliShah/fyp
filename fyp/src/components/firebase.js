import firebase from "firebase";
// import "firebase/auth";
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2VWBL-PGFEMriEjWkzHNraxMRw1FlcyA",
    authDomain: "fypfirebase-b2b4f.firebaseapp.com",
    projectId: "fypfirebase-b2b4f",
    storageBucket: "fypfirebase-b2b4f.appspot.com",
    messagingSenderId: "57555703354",
    appId: "1:57555703354:web:629fb1f319a9841d164703",
    measurementId: "G-MEDS33DW12",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;