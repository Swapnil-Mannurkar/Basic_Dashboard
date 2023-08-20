import LoginForm from "./LoginForm";
import LoginButtons from "./LoginButtons";
import "./LoginOptions.css";

const LoginOptions = () => {
  return (
    <div className="LoginOptionsContainer">
      <h1 className="signInTitle">Sign In</h1>
      <p className="signInDescription">Sign in to your account</p>
      <LoginButtons />
      <LoginForm />
      <p className="registerLink">
        Don't have an account?{" "}
        <a href="/" className="forgotPasswordLink">
          Register here
        </a>
      </p>
    </div>
  );
};

export default LoginOptions;
