import Typewriter from "typewriter-effect";
import { GithubIcon, LinkedInIcon, DownloadIcon } from "./Icons";

const entry1 = "Joseph Nahm";
const entry2 = "a Developer";
const entry3 = "Looking For Work";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title">
        Hi, I am
        <Typewriter
          options={{
            strings: [entry1, entry2, entry3],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="Social">
        <ul className="SocialList">
          <li className="SocialItem">
            <GithubIcon />
          </li>
          <li className="SocialItem">
            <LinkedInIcon />
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
