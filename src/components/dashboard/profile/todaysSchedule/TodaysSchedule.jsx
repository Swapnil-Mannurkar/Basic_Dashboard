import "./TodaysSchedule.css";
import dropdownIcon from "../../../../assets/images/dashboard/dropdown.svg";
import ActivitiesCard from "../../../UI/ActivitiesCard";
import ScheduleItem from "./ScheduleItem";

const TodaysSchedule = () => {
  return (
    <ActivitiesCard height={"335px"}>
      <div className="scheduleTitle">
        <div className="title">Today's Schedule</div>
        <div
          className="month"
          style={{ display: "flex", alignItems: "center" }}
        >
          See All &nbsp;
          <img
            src={dropdownIcon}
            alt="dropdown"
            style={{ cursor: "pointer", transform: "rotate(270deg)" }}
          />
        </div>
      </div>
      <div className="scheduleItems">
        <ScheduleItem
          backgroundColor={"#9BDD7C"}
          title={"Meeting with suppliers from Kuta Bali"}
          time={"14.00-15.00"}
          place={"at Sunset Road, Kuta, Bali "}
        />
        <ScheduleItem
          backgroundColor={"#6972C3"}
          title={"Check operation at Giga Factory 1"}
          time={"18.00-20.00"}
          place={"at Central Jakarta "}
        />
      </div>
    </ActivitiesCard>
  );
};

export default TodaysSchedule;
