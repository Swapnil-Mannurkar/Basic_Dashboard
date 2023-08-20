import "./Header.css";
import Notification from "../../../assets/images/dashboard/notification.svg";
import ProfilePicture from "../../../assets/images/dashboard/profilePic.png";
import searchIcon from "../../../assets/images/dashboard/search-icon.svg";

const Header = () => {
  return (
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
            <img src={searchIcon} alt=""  />
          </div>
        </div>
        <img src={Notification} alt="notification" />
        <img
          src={ProfilePicture}
          alt="profilePhoto"
          className="profilePicture"
        />
      </div>
    </div>
  );
};

export default Header;
