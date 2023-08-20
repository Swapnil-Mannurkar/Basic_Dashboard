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
            <img src={DashboardIcon} alt=" " />
            &nbsp;&nbsp;&nbsp;&nbsp;Dashboad
          </li>
          <li>
            <img src={TransactionIcon} alt=" " />
            &nbsp;&nbsp;&nbsp;&nbsp;Transactions
          </li>
          <li>
            <img src={ScheduleIcon} alt=" " />
            &nbsp;&nbsp;&nbsp;&nbsp;Schedules
          </li>
          <li>
            <img src={UserIcon} alt=" " />
            &nbsp;&nbsp;&nbsp;&nbsp;Users
          </li>
          <li>
            <img src={SettingIcon} alt=" " />
            &nbsp;&nbsp;&nbsp;&nbsp;Settings
          </li>
        </ul>
        <ul className="navbarContact">
          <li>Help</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
