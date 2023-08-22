import "./ScheduleItem.css";

const ScheduleItem = (props) => {
  return (
    <div className="scheduleContainer">
      <div className="scheduleLine" style={{backgroundColor: props.backgroundColor}}/>
      <div className="scheduleItem">
        <h3>{props.title}</h3>
        <p>{props.time}</p>
        <p>{props.place}</p>
      </div>
    </div>
  );
};

export default ScheduleItem;
