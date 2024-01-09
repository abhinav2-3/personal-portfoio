import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const AboutMe = () => {
  const animations = {
    image: {
      initial: { x: -200, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4 },
    },

    paragraph: {
      initial: { y: 200, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.5 },
    },
    btn: {
      initial: { y: 100, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.5 },
    },
  };

  return (
    <div id="about">
      <h1 className="heading">About Me</h1>
      <section>
        {/* Left */}
        <motion.aside {...animations.image}>
          <img src={logo} alt="Profile Pic" />
        </motion.aside>
        {/* Right */}
        <motion.aside {...animations.paragraph}>
          <p>
            "Hiii, I'm <span> Abhinav Maurya</span>, a passionate Second-year
            BCA student at Ambalika Institute of Management and Technology. With
            a strong inclination towards web development, my focus lies in
            becoming a skilled <span> Full Stack developer</span>. Proficient in{" "}
            <span>HTML, CSS, JavaScript, and React.js </span>. I enjoy creating
            visually appealing and user-friendly websites. While specializing in
            frontend, I also possess a basic understanding of backend
            technologies such as <span>Exprss.js, Node.js and MongoDB </span>.
            I'm dedicated, detail-oriented, and continuously strive to enhance
            my skills to stay updated with the latest industry trends. I'm
            excited about the opportunity to collaborate and transform ideas
            into seamless digital experiences. Let's bring your vision to life!"
            <div className="dfg"></div>
          </p>
          <h3>" MERN Stack Developer "</h3>
          <motion.a
            href="https://drive.google.com/file/d/1-uDMYHCAR5LxpnDzAmyi1-7vfByeQ-b6/view?usp=sharing"
            target="_blank"
            download={
              "https://drive.google.com/file/d/1-uDMYHCAR5LxpnDzAmyi1-7vfByeQ-b6/view?usp=sharing"
            }
            {...animations.btn}
          >
            Download Resume <AiOutlineDownload />
          </motion.a>
        </motion.aside>
      </section>
    </div>
  );
};

export default AboutMe;
