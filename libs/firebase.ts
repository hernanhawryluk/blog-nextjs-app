import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: "blog-nextjs-app.appspot.com",
  messagingSenderId: process.env.FIREBASE_MID,
  appId: process.env.FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);
