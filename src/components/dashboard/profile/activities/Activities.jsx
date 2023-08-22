import "./Activities.css";
import Chart from "./LineChart";
import dropdown from "../../../../assets/images/dashboard/dropdown.svg";
import ActivitiesCard from "../../../UI/ActivitiesCard";

const Activities = () => {
  return (
    <ActivitiesCard height={"400px"}>
      <div className="activitiesTitle">
        <div className="title">Activities</div>
        <div
          className="month"
          style={{ display: "flex", alignItems: "center" }}
        >
          May-June 2021 &nbsp;
          <img src={dropdown} alt="dropdown" style={{ cursor: "pointer" }} />
        </div>
        <Chart />
      </div>
    </ActivitiesCard>
  );
};

export default Activities;
