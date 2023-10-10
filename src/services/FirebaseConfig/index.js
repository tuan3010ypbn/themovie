import firebase from "firebase/compat";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSJPb5Bibhu_JRX6nihVKf3btzirnlsxU",
  authDomain: "themovie-68ef1.firebaseapp.com",
  projectId: "themovie-68ef1",
  storageBucket: "themovie-68ef1.appspot.com",
  messagingSenderId: "536561779771",
  appId: "1:536561779771:web:816149088159dbe09b481e",
  measurementId: "G-PCXZTPT1DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = firebase.storage()
const analytics = getAnalytics (app);

export {
  storage, firebase as default
}

firebase.analytics();




