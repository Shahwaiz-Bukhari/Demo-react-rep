import React from 'react';
import './Page2.css';
import imgfix from '/images/fix.jpg';



export default function Page2() {
  return (
    <section id="page2" data-scroll-section>
      <div id="moving-text" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div className="con" key={i}>
            <h1>EXPERIENCES</h1>
            <div id="gola"></div>
            <h1>CONTENT</h1>
            <div id="gola"></div>
            <h1>ENVIRONMENTS</h1>
            <div id="gola"></div>
          </div>
        ))}
      </div>
      <div id="page2-bottom">
        <h1>
          We are a group of design- driven, goal-focused creators, producers, and designers who believe that the
          details make all the difference.
        </h1>
        <div id="bottom-part2">
          <img
            src={imgfix}
            alt="Person holding a camera, artistic studio shot"
          />
          <p>
            We love to create, we love to solve, we love to collab, and we love to turn ideas into
            reality. We’re here to partner with you through every step of the process and know that bonds are
            the most important things we build.
          </p>
        </div>
      </div>
      <div id="gooey"></div>
    </section>
  );
}
