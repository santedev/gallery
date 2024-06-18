import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import "preline/preline";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgxTsqxYHUwBrjhirIEtiCLUYTEYSjHTw",
  authDomain: "gallery-art-c2074.firebaseapp.com",
  projectId: "gallery-art-c2074",
  storageBucket: "gallery-art-c2074.appspot.com",
  messagingSenderId: "313506789477",
  appId: "1:313506789477:web:3e8032fd2db586c86a6e8c",
  measurementId: "G-SM5FGYE6RV"
};
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)

createApp(App).use(router).mount('#app')
