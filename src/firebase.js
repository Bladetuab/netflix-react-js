// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

//     apiKey: "AIzaSyD1MZq2ULbBLYjE2QmkQBAVtXUACdCemog",
//     authDomain: "netflix-react-js-7bc35.firebaseapp.com",
//     databaseURL: "https://netflix-react-js-7bc35-default-rtdb.firebaseio.com",
//     projectId: "netflix-react-js-7bc35",
//     storageBucket: "netflix-react-js-7bc35.appspot.com",
//     messagingSenderId: "967508693243",
//     appId: "1:967508693243:web:b7a9c4117199c8e73de05e",
//     measurementId: "G-WJPSNJZ1GP"

//   };

// // Initialize Firebase
// console.log(firebaseConfig)

// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)