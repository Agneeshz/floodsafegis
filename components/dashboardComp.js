import React from "react";
import styles from "@/styles/dashboard.module.css";
import { useState } from "react";
import AdminMap from "./adminMap";
import ShelterListing from "./ShelterListing";
const DashboardComp = () => {
  const [toggle, setToggle] = useState("addNew");
  return (
    <div className={styles.parentContainer}>
      <div className={styles.toggleContainer}>
        <div
          className={styles.newListing}
          style={{ color: toggle === "addNew" && "black" }}
          onClick={() => setToggle("addNew")}
        >
          ADD NEW
        </div>
        <div
          className={styles.viewListing}
          style={{ color: toggle === "listing" && "black" }}
          onClick={() => setToggle("listing")}
        >
          LISTINGS
        </div>
      </div>
      <div className={styles.bottomContainer}>
        {toggle === "addNew" ? <AdminMap /> : <ShelterListing />}
      </div>
    </div>
  );
};

export default DashboardComp;
