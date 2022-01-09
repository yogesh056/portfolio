import React from "react";
import SocialLinks from "./SocialLinks";
import Bio from "./Bio";
import ModeSwitch from "./ModeSwitch";

export default function Content() {
  return (
    <div className="content">
        <SocialLinks/>
        <Bio/>
        {/* <Modal/> */}
        <ModeSwitch/>
    </div>
  );
}
