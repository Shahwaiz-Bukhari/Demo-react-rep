import React from 'react';
import './Page3.css';
import imgARVR from '/images/arvr.jpg';
import imgAnimations from '/images/animations.jpg';
import imgGameWeb from '/images/gameweb.jpg';
import imgImmersive from '/images/immersive.jpg';
import imgMetaverse from '/images/metaverse.jpg';
import imgMixed from '/images/mixed.jpg';
import imgVirtual from '/images/virtual.jpg';

const projects = [
  { title: 'AR / VR', img: imgARVR, desc: 'Experience alternate dimensions with immersive AR and VR content.' },
  { title: 'Animations', img: imgAnimations, desc: 'High-quality animations for entertainment and education.' },
  { title: 'Game & Web Apps', img: imgGameWeb, desc: 'Interactive apps and games for web platforms.' },
  { title: 'Immersive Experiences', img: imgImmersive, desc: 'Step into hyperrealistic virtual environments.' },
  { title: 'Metaverse', img: imgMetaverse, desc: 'Next-gen interconnected virtual worlds.' },
  { title: 'Mixed Reality', img: imgMixed, desc: 'Blend physical and digital realities seamlessly.' },
  { title: 'Virtual Production', img: imgVirtual, desc: 'Advanced filming with real-time virtual sets.' },
];


export default function Page3() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="page3" data-scroll-section>
      <div className="flex-container">
        {rows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 1;
          return (
            <div className="tile-row" key={rowIndex}>
              {row.map((tile, tileIndex) => {
                const isLeft = tileIndex === 0;
                const tileClass =
                  isEvenRow
                    ? isLeft ? 'small-tile' : 'large-tile'
                    : isLeft ? 'large-tile' : 'small-tile';

                return (
                  <div
                    key={tile.title}
                    className={`tile ${tileClass}`}
                    style={{ backgroundImage: `url(${tile.img})` }}
                  >
                    <div className="tile-flare" />
                    <div className="tile-overlay">
                      <h2>{tile.title}</h2>
                      <p>{tile.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

