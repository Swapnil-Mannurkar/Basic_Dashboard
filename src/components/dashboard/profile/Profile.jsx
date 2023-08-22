import Header from "./header/Header";
import "./Profile.css";
import ProfileCards from "./profileCards/ProfileCards";
import Activities from "./activities/Activities";
import TopProducts from "./topProducts/TopProducts";
import TodaysSchedule from "./todaysSchedule/TodaysSchedule";

const Profile = () => {
  return (
    <div className="profileContainer">
      <Header />
      <ProfileCards />
      <Activities />
      <div className="productSheduleContainer">
        <TopProducts />
        <TodaysSchedule />
      </div>
    </div>
  );
};

export default Profile;
