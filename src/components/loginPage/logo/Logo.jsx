import React, { useState, useEffect } from "react";
import "./Logo.css";

const Logo = (props) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
      props.onAnimationComplete();
    }, 2000);

    return () => 
      clearTimeout(animationTimeout);

  }, []);

  const logoName = {
    animation: "fadeInAnimation ease 3s",
  };

  return (
    <div className="logoContainer">
      <p className="logoName" style={logoName}>
        Board.
      </p>
    </div>
  );
};

export default Logo;
