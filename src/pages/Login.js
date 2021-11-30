import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../Context/Container";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  //it stay on the same page
  //onAuthStateChanged,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { MyContext } from "../Context/context";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
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
  });
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <GoogleButton onClick={loginWithGoogle} />
    </div>
  );
};

export default Login;
