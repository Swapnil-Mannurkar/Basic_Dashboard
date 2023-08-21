import "./Activities.css";
import Chart from "./Chart";
import dropdown from "../../../../assets/images/dashboard/dropdown.svg";

const Activities = () => {
  return (
    <>
      <div className="activitiesContainer">
        <div className="activitiesTitle">
          <div className="title">Activities</div>
          <div
            className="month"
            style={{ display: "flex", alignItems: "center" }}
          >
            May-June 2021 &nbsp;
            <img src={dropdown} alt="dropdown" style={{cursor: "pointer"}}/>
          </div>
        </div>
        <Chart />
      </div>
    </>
  );
};

export default Activities;
