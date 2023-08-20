import "./Navbar.css";
import DashboardIcon from "../../../assets/images/dashboard/dashboard_icon.svg";
import TransactionIcon from "../../../assets/images/dashboard/transaction_icon.svg";
import ScheduleIcon from "../../../assets/images/dashboard/schedule_icon.svg";
import UserIcon from "../../../assets/images/dashboard/user_icon.svg";
import SettingIcon from "../../../assets/images/dashboard/setting_icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbarCompanyName">Board.</h1>
      <div className="navbarItemsContainer">
        <ul className="navbarItems">
          <li className="active">
            <a href="/">
              <img src={DashboardIcon} alt=" " />
              &nbsp;&nbsp;&nbsp;&nbsp;Dashboad
            </a>
          </li>
          <li>
            <a href="/">
              <img src={TransactionIcon} alt=" " />
              &nbsp;&nbsp;&nbsp;&nbsp;Transactions
            </a>
          </li>
          <li>
            <a href="/">
              <img src={ScheduleIcon} alt=" " />
              &nbsp;&nbsp;&nbsp;&nbsp;Schedules
            </a>
          </li>
          <li>
            <a href="/">
              <img src={UserIcon} alt=" " />
              &nbsp;&nbsp;&nbsp;&nbsp;Users
            </a>
          </li>
          <li>
            <a href="/">
              <img src={SettingIcon} alt=" " />
              &nbsp;&nbsp;&nbsp;&nbsp;Settings
            </a>
          </li>
        </ul>
        <ul className="navbarContact">
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
