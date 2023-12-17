import React from "react";
import Layout from "@/components/Layout";
const contactUs = () => {
  return (
    <div>
      Contact Us at{" "}
      <a href="home" target="_blank">
        www.aquarious.co.in
      </a>
    </div>
  );
};
contactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default contactUs;
