import "./Card.css";
import TotalTransactions from "../../assets/images/dashboard/total_transactions_icon.svg";
import TotalUsers from "../../assets/images/dashboard/totalUsers.svg";
import TotalLikes from "../../assets/images/dashboard/like.svg";
import TotalRevenue from "../../assets/images/dashboard/revenue.svg";

const Card = (props) => {
  let backgroundColor = props.backgroundColor;
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="cardContainer" style={cardStyle}>
      <img src={getIcon(props.type)} alt="Revenue" className="cardIcon" />
      <div className="cardDetails">
        <h2>{props.title}</h2>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default Card;

const getIcon = (type) => {
  switch (type) {
    case "Transactions":
      return TotalTransactions;
    case "Users":
      return TotalUsers;
    case "Likes":
      return TotalLikes;
    case "Revenue":
      return TotalRevenue;
    default:
      return "null";
  }
};
