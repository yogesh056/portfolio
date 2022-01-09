import React from "react";
const instagram = require("../assets/instagram.png");
const facebook = require("../assets/facebook.png");
const linkedin = require("../assets/linkedin.png");
const bitbucket = require("../assets/bitbucket.png");
export default function SocialLinks() {
  return (
    <div className="social-links ">
      <a href="" className="align-center">
        <img className={"social-icons"} src={bitbucket} />
      </a>
      <a href="" className="align-center">
        <img className={"social-icons"} src={instagram} />
      </a>
      <a href="" className="align-center">
        <img className={"social-icons"} src={linkedin} />
      </a>
      <a href="https://www.facebook.com/yogesh056/" className="align-center">
        <img className={"social-icons"} src={facebook} />
      </a>
    </div>
  );
}
