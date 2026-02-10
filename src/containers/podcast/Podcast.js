import React, {useRef, useState, useContext} from "react";
import "./Podcast.scss";
import introAudio from "../../assets/images/intro.mp3";
import playIcon from "../../assets/images/play-icon.png";
import pauseIcon from "../../assets/images/pause-icon.png";
import {podcastSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  return (
    <div className="main podcast-section">
      {}
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode podcast-header-subtitle"
              : "subTitle podcast-header-subtitle"
          }
        >
          {podcastSection.subtitle}
        </p>
      </div>

      {}
      <div className="podcast-image-wrapper">
        <div className="podcast-image" onClick={togglePlay}>
          <img
            src={playing ? pauseIcon : playIcon}
            alt="Play Pause"
            className="play-icon"
          />

          {}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={introAudio}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
