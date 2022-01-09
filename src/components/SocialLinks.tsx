import React from "react";
const instagram = require("../assets/instagram.png");
const facebook = require("../assets/facebook.png");
const linkedin = require("../assets/linkedin.png");
const github = require("../assets/github.png");
export default function SocialLinks() {
  return (
    <div className="social-links ">
      <a href="https://github.com/yogesh056/" className="align-center" target="_blank">
        <img className={"social-icons"} src={github} />
      </a>
      <a href="https://www.linkedin.com/in/yogeshwaran-ramesh-43978016b/" className="align-center" target="_blank">
        <img className={"social-icons"} src={linkedin} />
      </a>
      <a href="https://www.instagram.com/yoge.exe/" className="align-center" target="_blank">
        <img className={"social-icons"} src={instagram} />
      </a>
      <a
        href="https://www.facebook.com/yogesh056/"
        target="_blank"
        className="align-center"
      >
        <img className={"social-icons"} src={facebook} />
      </a>
    </div>
  );
}
