import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "firebase/messaging";

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
const auth = getAuth(app);

const SignInWithGoogle: React.FC = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("Google Access Token:", token);

      const user = result.user;

      const idToken = await user.getIdToken();
      console.log("Firebase ID Token:", idToken);
      console.log("object", user);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignInWithGoogle;
