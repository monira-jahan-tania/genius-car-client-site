// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgwfgFHPrGJuAKiq1bhqT5Ju4ZG_GptUA",
    authDomain: "genius-csr-services.firebaseapp.com",
    projectId: "genius-csr-services",
    storageBucket: "genius-csr-services.appspot.com",
    messagingSenderId: "10058991575",
    appId: "1:10058991575:web:3996d451360bc629b56d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
