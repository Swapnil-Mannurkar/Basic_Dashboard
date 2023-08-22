import Dropdown from "./profile/header/Dropdown";
import AuthContext from "../../assets/data/AuthContext";
import "./Dashboard.css";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import { useContext, useState } from "react";

const Dashboard = () => {
  const context = useContext(AuthContext);

  return (
    <div className="dashboardContainer">
      {window.innerWidth > 960 && <Navbar />}
      <Navbar />
      <Profile />
      {context.isDisplayDropdown && <Dropdown />}
    </div>
  );
};

export default Dashboard;
