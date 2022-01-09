import React, { useEffect, useMemo } from "react";
const url = require("../assets/loader_audio.mp3");
const play = require("../assets/play.png");
const pause = require("../assets/pause.png");

interface propss {
  playing: boolean;
  togglePlay: (type: string) => void;
}

const Player = ({ playing, togglePlay }: propss) => {
  const audio = useMemo(() => new Audio(url), []);

  const toggle = () => {
    togglePlay("toggle");
  };

  useEffect(() => {
    console.log("Play",playing,audio);
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => togglePlay("stop"));
    return () => {
      audio.removeEventListener("ended", () => togglePlay("stop"));
    };
  }, []);

  return (
    <div onClick={toggle}>
      {playing ? (
        <img className="player-icon" src={pause} />
      ) : (
        <img className="player-icon" src={play} />
      )}
    </div>
  );
};

export default Player;
