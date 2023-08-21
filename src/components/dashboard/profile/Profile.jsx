import Header from "./Header";
import "./Profile.css";
import ProfileCards from "./ProfileCards";
import Activities from "./chart/Activities";

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
