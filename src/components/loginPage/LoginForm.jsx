import Button from "../UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form action="" className="loginForm">
      <label htmlFor="emailAddress">Email Address</label>
      <input type="email" placeholder="johndoe@gmail.com" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <a>Forgot password?</a>
      <Button
        backgroundColor={"#000000"}
        text={"Sign In"}
        height={"2rem"}
        width={"100%"}
        textColor={"#ffffff"}
      />
    </form>
  );
};

export default LoginForm;
