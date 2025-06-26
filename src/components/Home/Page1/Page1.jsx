import React from 'react';
import './Page1.css';
import video from './assets/video.mp4';



export default function Page1() {
  return (
    <section id="page1" className="page1" data-scroll-section>
      
      <div id="center">
        <div id="left">
          <h3>
            Bricksol is a multi-disciplinary studio focused on creating unique, end-to-end experiences and
            environments.
          </h3>
        </div>
        <div id="right">
          <h1>
            SPACES <br />
            THAT <br />
            INSPIRE
          </h1>
        </div>
      </div>

      <div id="hero-shape">
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>

      <video src={video} autoPlay loop muted playsInline />
    </section>
  );
}
