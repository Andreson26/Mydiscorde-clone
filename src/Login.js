import React from "react";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {
  const signIn = () => {
    //do clever google login
    auth.signInWithPopup(provider).cath((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://clipartcraft.com/images/discord-logo-transparent-2.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sing in</Button>
    </div>
  );
}

export default Login;