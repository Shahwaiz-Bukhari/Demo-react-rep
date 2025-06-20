import React, { useState, useEffect } from 'react';
import './Page3.css';
import imgARVR from '/images/arvr.jpg';
import imgAnimations from '/images/animations.jpg';
import imgGameWeb from '/images/gameweb.jpg';
import imgImmersive from '/images/immersive.jpg';
import imgMetaverse from '/images/metaverse.jpg';
import imgMixed from '/images/mixed.jpg';
import imgVirtual from '/images/virtual.jpg';


const projects = [
  { title: 'AR/VR', img: imgARVR },
  { title: 'Animations', img: imgAnimations },
  { title: 'Game & Web Apps', img: imgGameWeb },
  { title: 'Immersive Experiences', img: imgImmersive },
  { title: 'Metaverse', img: imgMetaverse },
  { title: 'Mixed Reality', img: imgMixed },
  { title: 'Virtual Production', img: imgVirtual },
];

export default function Page3() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.locomotive?.update();
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="page3" data-scroll-section>
      <div id="elem-container" aria-label="Studio projects">
        {projects.map(({ title, img }, idx) => (
          <div
            className="elem"
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2>{title}</h2>
            {hoveredIndex === idx && (
              <div className="elem-image-wrapper">
                <img src={img} alt={title} className="hover-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
