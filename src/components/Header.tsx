import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "../components/Player";
const download = require("../assets/download.png");
interface HeaderProps {
  playing: boolean;
}
export default function Header({ playing }: HeaderProps) {
  const dispatch = useDispatch();
  console.log("Dis",dispatch)

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Player
          playing={playing}
          togglePlay={(type: string) => dispatch({ type })}
        />
        <span className="logo-name">YogiDEV</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor:"pointer"
        }}
      > <a className="link" href={require("../assets/resume.pdf")} download="Yogeshwaran's_Resume">
        <span className="logo-name">Resume</span>
        <img className="social-icons download-icon" src={download}></img>
      </a>
      </div>
    </div>
  );
}
