import Typewriter from "typewriter-effect";
import { GithubIcon, LinkedInIcon, DownloadIcon, SpotifyIcon } from "./Icons";
import { motion } from "framer-motion";
import Resume from "../assets/resume.pdf";
import Card from "./Card";
import { useEffect } from "react";

const entry1 = "Joseph Nahm";
const entry2 = "a Full Stack Developer";
const entry3 = "a Mechanical Engineer";
const entry4 = "a Musician";
const entry5 = "looking for work!";

const Header = () => {
  var card;
  var contact;
  var sneaker;
  useEffect(() => {
    card = document.querySelector(".card");
    contact = document.querySelector("#contact");
    sneaker = document.querySelector(".sneaker");
  }, []);
  return (
    <motion.div
      className="Header"
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
    >
      <div className="ColumnLeft">
        <div className="Title AnimatedTitle">
          <h1 className="Title">Hi, I am</h1>
          <Typewriter
            options={{
              strings: [entry1, entry2, entry3, entry4, entry5],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="Social">
          <ul className="SocialList">
            <li className="SocialItem">
              <motion.div
                animate={{ y: 6 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <GithubIcon />
              </motion.div>
            </li>
            <li className="SocialItem">
              <motion.div
                animate={{ y: 6 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <LinkedInIcon />
              </motion.div>
            </li>
            <li className="SocialItem">
              <motion.div
                animate={{ y: 6 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <SpotifyIcon />
              </motion.div>
            </li>
            <li className="SocialItem">
              <a className="ResumeButton" href={Resume} download="resume.pdf">
                <p style={{ marginRight: "6px", fontSize: "30px" }}>Resume</p>
                <DownloadIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="ColumnRight"
        onMouseMove={(e) => {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }}
        onMouseLeave={(e) => {
          card.style.transition = "all 0.5s ease";
          card.style.transform = "rotateY(-20deg) rotateX(10deg)";
          contact.style.transform = "translateZ(0px)";
          sneaker.style.transform = "translateZ(0px)";
        }}
        onMouseEnter={(e) => {
          card.style.transition = "none";
          contact.style.transform = "translateZ(30px)";
          sneaker.style.transform = "translateZ(30px)";
        }}
      >
        <Card />
      </div>
    </motion.div>
  );
};

export default Header;
