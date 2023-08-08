import React from 'react'
import "../styles/work.css"
import Works from './Works'

// import VideoPlayer from "react-video-js-player";
// import Camping from "./video/camping.mp4";
  

const Work = ({ theme }) => {
    // const videoSrc = Camping;

  return (
    <div id={theme}>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>
        {/* <VideoPlayer src={videoSrc} /> */}
        <Works theme={theme} />
      </section>
    </div>
  );
};

export default Work