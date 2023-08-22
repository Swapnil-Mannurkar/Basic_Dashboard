import "./TopProducts.css";
import dropdownIcon from "../../../../assets/images/dashboard/dropdown.svg";
import ActivitiesCard from "../../../UI/ActivitiesCard";
import PieChart from "./PieChart";

const TopProducts = () => {
  const height = window.innerWidth < 960 ? "230px" : "290px";
  const width =
    window.innerWidth > 960 && window.innerWidth < 1280 ? "365px" : "100%";

  return (
    <ActivitiesCard height={height} width={width}>
      <div className="productTitle">
        <div className="title">Top Products</div>
        <div
          className="month"
          style={{ display: "flex", alignItems: "center" }}
        >
          May-June 2021 &nbsp;
          <img
            src={dropdownIcon}
            alt="dropdown"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <PieChart />
    </ActivitiesCard>
  );
};

export default TopProducts;
