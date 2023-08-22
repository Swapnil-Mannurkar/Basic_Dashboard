import "./Login.css";
import Logo from "./logo/Logo";
import LoginOptions from "./loginOptions/LoginOptions";

const Login = (props) => {
  return (
    <div className="loginPage">
      <Logo />
      <LoginOptions onClick={props.onClick} />
    </div>
  );
};

export default Login;
