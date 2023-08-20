import "./Button.css";
import googleIcon from "../../assets/images/google-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";

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
    border: "none",
    borderRadius: "10px",
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1.56rem",
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "Montserrat",
  };

  return (
    <div>
      <button style={buttonStyle}>
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
