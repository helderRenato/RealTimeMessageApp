import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhaxzRy4Zdv-fjBMyEBjSUYnpxf23YXJs",
  authDomain: "lilproject2-5f8c7.firebaseapp.com",
  databaseURL: "https://lilproject2-5f8c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lilproject2-5f8c7",
  storageBucket: "lilproject2-5f8c7.appspot.com",
  messagingSenderId: "943546354771",
  appId: "1:943546354771:web:b34f2647f01ada1f610aa6",
  measurementId: "G-4R16HWD015"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);