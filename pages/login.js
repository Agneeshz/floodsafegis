import React from "react";
import Layout from "@/components/Layout";
const login = () => {
<<<<<<< Updated upstream
  return <div>Login</div>;
=======
  return (
    <div style={{ width: "35%" }}>
      <LoginComp type="login" />
    </div>
  );
>>>>>>> Stashed changes
};
login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default login;
