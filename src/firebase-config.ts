import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAIUUEO4bhbUuppig0LtpdprmVo7AgORzw",
  authDomain: "testpush-9786e.firebaseapp.com",
  projectId: "testpush-9786e",
  storageBucket: "testpush-9786e.appspot.com",
  messagingSenderId: "63387723351",
  appId: "1:63387723351:web:5890c6e6855bf779a36512",
  measurementId: "G-2S14STDN44",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
 