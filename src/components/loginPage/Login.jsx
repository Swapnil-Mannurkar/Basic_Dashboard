import React, { useState } from "react";
import "./Login.css";
import Logo from "./logo/Logo";
import LoginOptions from "./loginOptions/LoginOptions";

const Login = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const animationCompleteHandler = () => setDisplayForm(!displayForm);

  const loginPage = {
    transition: "all 0.5s ease",
    gridTemplateColumns: `${displayForm ? "42% 58%" : "100% 0%"}`,
  };

  return (
    <div className="loginPage" style={loginPage}>
      <Logo onAnimationComplete={animationCompleteHandler} />
      {displayForm && <LoginOptions onClick={props.onClick} />}
    </div>
  );
};

export default Login;
