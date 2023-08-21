import "./Header.css";
import Notification from "../../../assets/images/dashboard/notification.svg";
import AuthContext from "../../../assets/data/AuthContext";
import searchIcon from "../../../assets/images/dashboard/search-icon.svg";
import { useContext } from "react";
import React from "react";

const Header = () => {
  const context = useContext(AuthContext);
  const ProfilePicture = localStorage.getItem("picture");

  return (
    <>
      <div className="headerContainer">
        <div className="dashboardTitle">Dashboard</div>
        <div className="profileDetails">
          <div className="searchContainer">
            <input
              type="text"
              className="dashboardSearch"
              placeholder="Search..."
            />
            <div className="searchIcon">
              <img src={searchIcon} alt="" />
            </div>
          </div>
          <img src={Notification} alt="notification" className="hover" />
          <img
            src={ProfilePicture}
            alt="profilePhoto"
            className="profilePicture hover"
            onClick={context.onDisplayDropdown}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
