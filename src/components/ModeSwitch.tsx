import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../modals";
const moon = require("../assets/moon.png");
const sun = require("../assets/sun.png");

export default function ModeSwitch() {
  const dispatch = useDispatch();
  const state = useSelector((state: stateType) => state);
  const {
    modal: { isDarkMode },
  } = state;
  return (
    <div
      className="wave-container align-center"
      onClick={() => dispatch({ type: "toggleMode" })}
    >
      <img
        className="social-icons download-icon"
        src={isDarkMode ? sun : moon}
      ></img>
    </div>
  );
}
