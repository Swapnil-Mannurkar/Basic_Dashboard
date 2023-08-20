import "./Button.css";
import googleIcon from "../../assets/images/loginPage/google-icon.svg";
import appleIcon from "../../assets/images/loginPage/apple-icon.svg";

const Button = (props) => {
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

  return (
    <div>
      <button
        style={buttonStyle}
        className="loginButton"
        // onClick={(event) => event.preventDefault()}
      >
        <img src={getIcon(props.type)} />
        {props.type === "google" || props.type === "apple" ? (
          <span>&nbsp;&nbsp;</span>
        ) : (
          ""
        )}
        {props.text}
      </button>
    </div>
  );
};

export default Button;

const getIcon = (iconName) => {
  switch (iconName) {
    case "google":
      return googleIcon;
    case "apple":
      return appleIcon;
  }
};
