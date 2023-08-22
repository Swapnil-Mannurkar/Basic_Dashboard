import Header from "./header/Header";
import "./Profile.css";
import ProfileCards from "./profileCards/ProfileCards";
import Activities from "./activities/Activities";

const Profile = () => {
  return (
    <div className="profileContainer">
      <Header />
      <ProfileCards />
      <Activities />
    </div>
  );
};

export default Profile;
