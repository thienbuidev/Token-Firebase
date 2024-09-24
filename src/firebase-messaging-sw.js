// public/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAIUUEO4bhbUuppig0LtpdprmVo7AgORzw",
  authDomain: "testpush-9786e.firebaseapp.com",
  projectId: "testpush-9786e",
  storageBucket: "testpush-9786e.appspot.com",
  messagingSenderId: "63387723351",
  appId: "1:63387723351:web:5890c6e6855bf779a36512",
  measurementId: "G-2S14STDN44",
};

const messaging = firebase.messaging();
