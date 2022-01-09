import React from "react";
interface SharinganProps {
  playing: boolean;
}
const sharingan = require("../assets/loader.png");
export default function Sharingan({ playing }: SharinganProps) {
  return (
    <div className="align-center sharingan-wrapper">
      <div id="sharingan-container" className="align-center">
        <div id="eye-left" className="align-center">
          <div className="sharingan-border align-center">
            <img
              className={playing ? "sharingan sharingan-animation" : "sharingan"}
              src={sharingan}
            />
          </div>
        </div>
        <div id="eye-right" className="align-center">
          <div className="sharingan-border align-center">
            <img
              className={playing ? "sharingan sharingan-animation" : "sharingan"}
              src={sharingan}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
