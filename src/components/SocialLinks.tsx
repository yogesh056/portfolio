import React from "react";
const instagram = require("../assets/instagram.png");
const facebook = require("../assets/facebook.png");
const linkedin = require("../assets/linkedin.png");
const github = require("../assets/github.png");
const medium = require("../assets/medium.png");

export default function SocialLinks() {
  return (
    <div className="social-links ">
      <a
        href="https://github.com/yogesh056/"
        className="align-center"
        target="_blank"
        rel="noreferrer"
      >
        <img className={"social-icons"} src={github} alt="github" />
      </a>
      <a
        href="https://github.com/yogesh056/"
        className="align-center"
        target="_blank"
        rel="noreferrer"
      >
        <img className={"social-icons"} src={medium} alt="medium" />
      </a>
      <a
        href="https://www.linkedin.com/in/yogeshwaran-ramesh-43978016b/"
        className="align-center"
        target="_blank"
        rel="noreferrer"
      >
        <img className={"social-icons"} src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://www.instagram.com/yoge.exe/"
        className="align-center"
        target="_blank"
        rel="noreferrer"
      >
        <img className={"social-icons"} src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.facebook.com/yogesh056/"
        target="_blank"
        className="align-center"
        rel="noreferrer"
      >
        <img className={"social-icons"} src={facebook} alt="facebook" />
      </a>
    </div>
  );
}
