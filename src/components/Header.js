import Typewriter from "typewriter-effect";
import { GithubIcon, LinkedInIcon, DownloadIcon, SpotifyIcon } from "./Icons";

const entry1 = "Joseph Nahm";
const entry2 = "a Full Stack Developer";
const entry3 = "a Mechanical Engineer";
const entry4 = "a Musician";
const entry5 = "looking for work!";

const Header = () => {
  return (
    <div className="Header">
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
            <button className="ResumeButton">
              <p style={{marginRight: "6px", fontSize: "30px"}}>Resume</p>
              <DownloadIcon/>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
