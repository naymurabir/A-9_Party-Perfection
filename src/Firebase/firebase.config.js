// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGPtutnsT5ixwJx-vkp7IeFo7xsHeBkOM",
    authDomain: "react-event-lab.firebaseapp.com",
    projectId: "react-event-lab",
    storageBucket: "react-event-lab.appspot.com",
    messagingSenderId: "734636734848",
    appId: "1:734636734848:web:93b25cffe5862a30762965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;