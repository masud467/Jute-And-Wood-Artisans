// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcyPmmGoWjVmpGvaYNL-0gCUIbkvqgmHQ",
  authDomain: "jute-and-wood-artisans.firebaseapp.com",
  projectId: "jute-and-wood-artisans",
  storageBucket: "jute-and-wood-artisans.appspot.com",
  messagingSenderId: "707463924337",
  appId: "1:707463924337:web:615da70c50142a47fa69d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;