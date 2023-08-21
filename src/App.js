import React, { useContext } from "react";
import AuthContext from "./assets/data/AuthContext";
import Login from "./components/loginPage/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const context = useContext(AuthContext);
  return (
    <>
      {context.isLoggedIn && <Dashboard />}
      {!context.isLoggedIn && <Login />}
    </>
  );
}

export default App;
