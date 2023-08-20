import Button from "../UI/Button";
import "./LoginButtons.css";

const LoginButtons = () => {
  return (
    <div className="loginButtonsContainer">
      <Button
        backgroundColor={"#ffffff"}
        width={"11.25rem"}
        height={"1.875rem"}
        text={"Sign in with Google"}
        type={"google"}
        textColor={"#858585"}
      />
      <Button
        backgroundColor={"#ffffff"}
        height={"1.875rem"}
        width={"11.25rem"}
        text={"Sign in with Apple"}
        type={"apple"}
        textColor={"#858585"}
      />
    </div>
  );
};

export default LoginButtons;
