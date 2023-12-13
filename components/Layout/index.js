import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "@/styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
