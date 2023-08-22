import "./ActivitiesCard.css";

const ActivitiesCard = (props) => {
  let height = props.height;
  const activitiesCardStyle = {
    height: height,
  };
  
  return (
    <div className="activitiesCard" style={activitiesCardStyle}>
      {props.children}
    </div>
  );
};

export default ActivitiesCard;
