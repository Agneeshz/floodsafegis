import React from "react";
import styles from "@/styles/login.module.css";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
const LoginComp = ({ type }) => {
  const router = useRouter();
  return (
    <div className={styles.loginContainer}>
      {type === "login" ? <h2> Welcome Back!</h2> : <h2>Create Account</h2>}
      <div className={styles.inputList}>
        {type === "register" && (
          <input type="text" placeholder="Enter your name" />
        )}
        <input type="email" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your password" />
        {type === "register" && (
          <input type="text" placeholder="Re-enter your password" />
        )}
      </div>
      <div className={styles.checkboxAndForgetPass}>
        <div className={styles.checkbox}>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div
          className={styles.forgotPass}
          onClick={() => router.push("/forgotPassword")}
        >
          Forgot Password?
        </div>
      </div>
      <div className={styles.continueBtn}>
        <Button text={"Continue"} alignment="center" />
      </div>
      <div className={styles.switchDialog}>
        {type === "login" ? (
          <p>
            Don&apos;t have an account?{" "}
            <span>
              <Link href={"/register"}>Sign Up</Link>
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span>
              <Link href={"/login"}>Log In</Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginComp;
