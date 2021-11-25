import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  //it stay on the same page
  //onAuthStateChanged,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { MyContext } from "../Context/context";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
};
initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { setUser } = useContext(MyContext);
  //to change the url paramater
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //which services we want to show
    signInWithPopup(auth, googleProvider)
      .then((userInfo) => {
        setUser(userInfo.user);
        //login page disappered and we want to change paramather
        //{replace:true} change the previous path
        navigate("/profile");
        //navigate(-2)go two step back
        localStorage.setItem("data-user", JSON.stringify(userInfo.user));
        console.log(userInfo);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    let localUSer = localStorage.getItem("data-user");
    if (localUSer) {
      let originalLocalUser = JSON.parse(localUSer);
      setUser(originalLocalUser);
    }
  }, []);
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <GoogleButton onClick={loginWithGoogle} />
    </div>
  );
};

export default Login;
