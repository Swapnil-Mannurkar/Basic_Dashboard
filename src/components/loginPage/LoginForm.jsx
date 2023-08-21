import Button from "../UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form action="" className="loginForm">
      <label htmlFor="emailAddress">Email Address</label>
      <input type="email" className="loginFormInput" placeholder="johndoe@gmail.com" />
      <label htmlFor="password" style={{ marginTop: "10px" }}>
        Password
      </label>
      <input type="password" className="loginFormInput" />
      <a href="/" className="forgotPasswordLink" style={{ margin: "5px 0" }}>
        Forgot password?
      </a>
      <Button
        backgroundColor={"#000000"}
        text={"Sign In"}
        height={"2.5rem"}
        width={"100%"}
        textColor={"#ffffff"}
        fontSize={"16px"}
        fontWeight={"700"}
      />
    </form>
  );
};

export default LoginForm;
