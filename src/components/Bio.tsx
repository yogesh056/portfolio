import React from "react";
const memoji = require("../assets/memoji.png");

export default function Bio() {
  return (
    <div className="centered-content">
      <div className="memoji-wrapper">
        <img className={"memoji"} src={memoji} />
      </div>
      <div>
        <span className="content-text">Yogeshwaran Ramesh</span>
      </div>
      <div>
        <span className="animated-fixed-text">
          [<span className="animated-text"></span>]
        </span>
        <span className="animated-fixed-text">Developer</span>
      </div>
    </div>
  );
}
