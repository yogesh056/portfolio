import React from "react";
import { useDispatch } from "react-redux";
import Player from "../components/Player";
const download = require("../assets/download.png");
interface HeaderProps {
  playing: boolean;
}
export default function Header({ playing }: HeaderProps) {
  const dispatch = useDispatch();

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
        <span className="logo-name">Yogi[DEV]</span>
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
        <img className="social-icons download-icon" src={download}  alt="download"></img>
      </a>
      </div>
    </div>
  );
}
