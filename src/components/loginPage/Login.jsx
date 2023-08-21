import "./Login.css";
import Logo from "./Logo";
import LoginOptions from "./LoginOptions";

const Login = (props) => {
  return (
    <div className="loginPage">
      <Logo />
      <LoginOptions onClick={props.onClick} />
    </div>
  );
};

export default Login;
