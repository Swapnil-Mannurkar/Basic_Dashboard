import "./Header.css";
import Notification from "../../../../assets/images/dashboard/notification.svg";
import AuthContext from "../../../../assets/data/AuthContext";
import searchIcon from "../../../../assets/images/dashboard/search-icon.svg";
import { useContext } from "react";
import React from "react";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  const context = useContext(AuthContext);
  const ProfilePicture = localStorage.getItem("picture");
  const searchInputField = (
    <div className="searchContainer">
      <input type="text" className="dashboardSearch" placeholder="Search..." />
      <div className="searchIcon">
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );

  return (
    <div className="headerContainer">
      <div className="dashboardTitle">
        {window.innerWidth < 960 && (
          <div>
            <FaBars onClick={context.onClickNavbar} />
          </div>
        )}
        Dashboard
      </div>
      <div className="profileDetails">
        {window.innerWidth < 960 ? " " : searchInputField}
        <img src={Notification} alt="notification" className="hover" />
        <img
          src={ProfilePicture}
          alt="profilePhoto"
          className="profilePicture hover"
          onClick={context.onDisplayDropdown}
        />
      </div>
    </div>
  );
};

export default Header;
