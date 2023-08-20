import "./Button.css";
import googleIcon from "../../assets/images/google-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";

const Button = (props) => {
  let backgroundColor = props.backgroundColor;
  let height = props.height;
  let width = props.width;
  let textColor = props.textColor;

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
  };

  return (
    <div>
      <button style={buttonStyle}>
        <img src={getIcon(props.type)} /> &nbsp; {props.text}
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
