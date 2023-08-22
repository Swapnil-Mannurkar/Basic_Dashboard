import "./ActivitiesCard.css";

const ActivitiesCard = (props) => {
  let height = props.height;
  let width = props.width;

  const activitiesCardStyle = {
    height: height,
    width: width,
  };

  return (
    <div className="activitiesCard" style={activitiesCardStyle}>
      {props.children}
    </div>
  );
};

export default ActivitiesCard;
