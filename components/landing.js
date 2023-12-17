// FloodPredictionLandingPage.js
import React from "react";
// import landingImage from "@/public/Rectangle 26.png";
import styles from "@/styles/landing.module.css";
import Button from "./Button";
import FAQStrip from "./FAQStrip";
import { Fade, Reveal } from "react-reveal";
import Link from "next/link";
const Landing = () => {
  const features = [
    {
      title: "Accurate Flood Extent Maps",
      content:
        "FloodSafeGIS provides precise and up-to-date flood extent maps, aiding authorities in strategic planning during flood events.",
      slide: "left",
    },
    {
      title: "Water Depth Estimation",
      content:
        "Using CWC flood forecasts, FloodSafeGIS estimates water depth, offering valuable insights for effective disaster response.",
      slide: "right",
    },
    {
      title: "Alert System",
      content:
        "Implement an alert system to notify residents, emergency services, and government agencies about potential flooding risks in real-time.",
      slide: "left",
    },
  ];

  const FAQS = [
    {
      question: "What is FloodSafeGIS?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit sint repudiandae earum vitae a voluptate animi corporis laboriosam. Doloremque, non! Incidunt alias minima ullam placeat minus adipisci aliquid nemo.",
    },
    {
      question: "How does FloodSafeGIS work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit sint repudiandae earum vitae a voluptate animi corporis laboriosam. Doloremque, non! Incidunt alias minima ullam placeat minus adipisci aliquid nemo.",
    },
    {
      question: "How can I get started with FloodSafeGIS?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit sint repudiandae earum vitae a voluptate animi corporis laboriosam. Doloremque, non! Incidunt alias minima ullam placeat minus adipisci aliquid nemo.",
    },
    {
      question: "Is there customer support available for users?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit sint repudiandae earum vitae a voluptate animi corporis laboriosam. Doloremque, non! Incidunt alias minima ullam placeat minus adipisci aliquid nemo.",
    },
  ];
  return (
    <div style={{ height: "auto" }}>
      <section
        style={{
          height: "100vh",
          width: "100%",
        }}
        className={styles.landingBg}
      >
        <div>
          <div className={styles.heroTitle1}>
            FloodSafeGIS: Real-Time Flood <div>Inundation Monitoring</div>
          </div>
          <div
            style={{ color: "white", fontSize: "1.3vw", textAlign: "center" }}
          >
            Predict, Plan, and Respond Effectively{" "}
            <div> with Our Advanced GIS Application</div>
          </div>
          <div
            style={{
              marginTop: "2vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <Button
              text={"Get Started "}
              alignment="center"
              width="9vw"
              arrow={true}
              href={"/map"}
            />
          </div>
        </div>
      </section>
      <section>
        {" "}
        <Fade>
          <p
            style={{
              maxWidth: "70%",
              margin: "10vh auto 5vh",
              textAlign: "center",
              lineHeight: "2",
            }}
          >
            FloodSafeGIS is a trailblazer in the field of Geographic Information
            Systems (GIS) and artificial intelligence
            <br /> (AI) applications. We envision a world where communities are
            resilient in the face of water-related challenges. <br /> Through
            our technology, we aim to create a safer, more sustainable future
            where the impact of floods is minimized, and every individual is
            equipped with the knowledge to navigate and mitigate potential
            risks.
          </p>
        </Fade>
      </section>{" "}
      <section className={styles.features} id="features">
        <h1>Features</h1>
        {features.map((feature, idx) => {
          return (
            <Fade
              key={idx}
              left={feature.slide === "left"}
              right={feature.slide === "right"}
            >
              <div className={styles.feature}>
                <p className={styles.featureTitle}>{feature.title}</p>
                <p className={styles.featureContent}>{feature.content}</p>
              </div>
            </Fade>
          );
        })}
        <div
          style={{
            textAlign: "center",
            marginTop: "4vh",
            color: "#3498DB",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          {" "}
          <Link href="/contactUs">Learn More</Link>
        </div>
      </section>
      <section className={styles.howItWorks} id="howItWorks">
        <h1>How it works?</h1>
        <div className={styles.howItWorksContent}></div>
      </section>
      <section className={styles.FAQS} id="FAQS">
        <h1>Frequently Asked Questions</h1>
        <div>
          {FAQS.map((FAQ, idx) => {
            return (
              <FAQStrip key={idx} question={FAQ.question} answer={FAQ.answer} />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Landing;
