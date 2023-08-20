import Card from "../../UI/Card";
import "./ProfileCards.css";

const ProfileCards = () => {
  return (
    <div className="profileCards">
      <Card
        backgroundColor={"#DDEFE0"}
        type={"Revenue"}
        title={"Total Revenues"}
        count={"$2,129,430"}
      />
      <Card
        backgroundColor={"#F4ECDD"}
        type={"Transactions"}
        title={"Total Transactions"}
        count={"1,520"}
      />
      <Card
        backgroundColor={"#EFDADA"}
        type={"Likes"}
        title={"Total Likes"}
        count={"9,721"}
      />
      <Card
        backgroundColor={"#DEE0EF"}
        type={"Users"}
        title={"Total Users"}
        count={"892"}
      />
    </div>
  );
};

export default ProfileCards;
