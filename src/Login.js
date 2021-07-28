import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // Google Login
   auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.collectiveray.com/images/2021/06/discord-logo.jpeg"
          alt="Discord Logo"
        />
      </div>

      <Button onClick={signIn}>Sign In with Google</Button>
    </div>
  );
}

export default Login;