import "./Dashboard.css";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Navbar />
      <Profile />
    </div>
  );
};

export default Dashboard;
