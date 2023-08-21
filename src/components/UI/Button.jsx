import React, { useState, useContext } from "react";
import AuthContext from "../../assets/data/AuthContext";
import "./Button.css";
import googleIcon from "../../assets/images/loginPage/google-icon.svg";
import appleIcon from "../../assets/images/loginPage/apple-icon.svg";

const Button = (props) => {
  const context = useContext(AuthContext);
  let backgroundColor = props.backgroundColor;
  let height = props.height;
  let width = props.width;
  let textColor = props.textColor;
  let fontSize = props.fontSize;
  let fontWeight = props.fontWeight;

  const buttonStyle = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };

  const loginHandler = () => {
    context.onLogin();
  };

  const googleButton = (
    <button style={buttonStyle} className="loginButton" onClick={loginHandler}>
      <img src={googleIcon} alt="loginIcon" />
      <span>&nbsp;&nbsp;</span>
      {props.text}
    </button>
  );

  const otherButton = (
    <button
      style={buttonStyle}
      className="loginButton"
      onClick={(event) => event.preventDefault()}
    >
      {props.type === "apple" && <img src={appleIcon} alt="loginIcon" />}
      {props.type === "apple" && <span>&nbsp;&nbsp;</span>}
      {props.text}
    </button>
  );

  return <div>{props.type == "google" ? googleButton : otherButton}</div>;
};

export default Button;
