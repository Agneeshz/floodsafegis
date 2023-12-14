import HeatMap from "@/components/HeatMap";
import "react-select-search/style.css";
import styles from "@/styles/home.module.css";
import { useState } from "react";
export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [showViews, setShowViews] = useState(false);
  //Do whatever is needed with this date
  const [date, setDate] = useState(new Date());
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleViewClick = () => {
    setShowViews(!showViews);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className={styles.homeContainer}>
      {/* <HeatMap /> */}
      <div className={styles.searchAndView}>
        <div className={styles.searchDiv}>
          <input
            type="text"
            placeholder="🔍Search"
            onChange={handleInputChange}
            value={searchText}
          />
        </div>
        <div className={styles.viewDiv} onClick={handleViewClick}>
          👁️ Views{" "}
        </div>
      </div>
      {showViews && (
        <div className={styles.viewList}>
          <div>Data after 30 days</div>
          <div>Data after 10 days</div>
          <div
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px gray solid",
              alignItems: "center",
            }}
          >
            <div>Custom: </div>
            <di>
              <input type="date" onChange={handleDateChange} />
            </di>
          </div>
          <div
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Temperature</div>
            <div>10 Deg</div>
          </div>
          <div
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px gray solid",
            }}
          >
            <div>Trend</div>
            <div>⬆️</div>
          </div>
          <div
            style={{
              padding: "0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Water Level</div>
            <div>200</div>
          </div>
        </div>
      )}
    </div>
  );
}



