import React from "react";
import Layout from "@/components/Layout";
import DashboardComp from "@/components/dashboardComp";
const dashboard = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DashboardComp />
    </div>
  );
};
dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default dashboard;
