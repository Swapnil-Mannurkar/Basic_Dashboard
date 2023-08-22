import React, { useState, useEffect } from "react";
import "./Logo.css";

const Logo = (props) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
      props.onAnimationComplete();
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const logoName = {
    animation: "fadeInAnimation ease 3s",
  };

  const logoContainer = {
    transition: "all 0.5s ease",
    height: `${
      screenSize < "960" ? (animationComplete ? "70%" : "100vh") : "100vh"
    }`,
  };

  return (
    <div className="logoContainer" style={logoContainer}>
      <p className="logoName" style={logoName}>
        Board.
      </p>
    </div>
  );
};

export default Logo;
