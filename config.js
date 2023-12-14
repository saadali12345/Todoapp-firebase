import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";




const firebaseConfig = {
  apiKey: "AIzaSyDUOyulb5oTLKkGK4GunJKAa7hjm6Xy5wM",
  authDomain: "login-with-firebase-data-b3d7b.firebaseapp.com",
  projectId: "login-with-firebase-data-b3d7b",
  storageBucket: "login-with-firebase-data-b3d7b.appspot.com",
  messagingSenderId: "889799286073",
  appId: "1:889799286073:web:0bdc296ead15d142491ce8",
  measurementId: "G-5G41KM4MFX"
};
  
export const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 export const db = getFirestore(app)
