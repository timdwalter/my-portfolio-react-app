import { NextPage } from "next";
import React from "react";
import { motion } from "framer-motion";
import DeskAnimationSvg from "./DeskAnimationSvg"; // Import the new SVG component

const HomePage: NextPage = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
      style={{ overflow: "hidden", maxWidth: "100%" }} // Ensure the motion div doesn't cause overflow
    >
      <div className="wrapper-container">
        <div className="about-container" style={{ textAlign: "center" }}>
          <div
            className="desk-animation"
            style={{
              marginBottom: "20px",
              transform: "scale(0.8)", // Scale down to 80%
              transformOrigin: "center", // Scale from the center
            }}
          >
            <DeskAnimationSvg />
          </div>
          <div className="about-text-container introduction-font">
            <h1 style={{ margin: "0 0 20px" }}>About Me - Tim Daniel Walter</h1>
            <p>
              Hello, my name is <span className="name">Tim Daniel Walter</span>,
              and I am a software developer, cloud-architect and consultant with
              years of experience in leading technology teams and developing
              Java applications.
            </p>
            <p>
              I have always had a passion for technology and programming and I
              have worked hard to develop my skills and expertise in this field.
              Over the years, I have had the opportunity to work on a wide range
              of projects, from small-scale applications to large-scale
              enterprise systems. This has allowed me to tackle complex
              technological challenges and find innovative solutions to meet the
              needs of my clients.
            </p>
            <p>
              As a Tech-Lead, I have had the pleasure of mentoring and coaching
              developers, helping them to improve their technical skills and
              grow their careers. As a consultant, I have had the opportunity to
              work with clients in various industries, providing valuable
              insights and solutions to help them achieve their business goals.
            </p>
            <p>
              With my passion for programming and my years of experience in the
              field, I decided to start my own company, which specializes in
              providing software development and consulting services to
              businesses. My team and I work tirelessly to deliver projects on
              time and on budget while exceeding our clients´ expectations.
            </p>
            <p>
              If you are looking for a reliable and experienced software
              developer, cloud-architect, or consultant, please do not hesitate
              to reach out to me.
            </p>
            <a href="https://www.linkedin.com/in/tim-d-walter/" className="btn">
              Click here to get in touch
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
