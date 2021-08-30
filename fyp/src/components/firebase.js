import firebase from "firebase";
// import "firebase/auth";
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD5Z5ael-zmVuOWNPb5pnEJLvT8TsKsIgg",
    authDomain: "saz-fyp.firebaseapp.com",
    projectId: "saz-fyp",
    storageBucket: "saz-fyp.appspot.com",
    messagingSenderId: "88224486597",
    appId: "1:88224486597:web:042e77799e2aecc7a44cac",
    measurementId: "G-PNVDZG4R43"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;