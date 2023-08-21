import React, { useState } from "react";

import "./App.css";
import Login from "./components/loginPage/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  // eslint-disable-next-line
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  return (
    <div>
      {isLoggedIN && <Login />}
      {!isLoggedIN && <Dashboard />}
    </div>
  );
}

export default App;
