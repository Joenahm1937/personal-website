import Typewriter from "typewriter-effect";
import { GithubIcon, LinkedInIcon, DownloadIcon, SpotifyIcon } from "./Icons";
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
  }, [])
  return (
    <div className="Header">
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
              <GithubIcon />
            </li>
            <li className="SocialItem">
              <LinkedInIcon />
            </li>
            <li className="SocialItem">
              <SpotifyIcon />
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
        onMouseMove={e => {
          let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
          let yAxis = (window.innerHeight / 2 - e.pageY)/ 20;
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        }}
        onMouseLeave={e => {
          card.style.transition = 'all 0.5s ease';
          card.style.transform = 'rotateY(0deg) rotateX(0deg)'
          contact.style.transform = "translateZ(0px)";
          sneaker.style.transform = "translateZ(0px)";
        }}
        onMouseEnter={e => {
          card.style.transition = 'none';
          contact.style.transform = "translateZ(30px)";
          sneaker.style.transform = "translateZ(30px)";
        }}
      >
        <Card />
      </div>
    </div>
  );
};

export default Header;
