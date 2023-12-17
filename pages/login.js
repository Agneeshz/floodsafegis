import React from "react";
import Layout from "@/components/Layout";
const login = () => {
  return <div>Login</div>;
};
login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default login;
