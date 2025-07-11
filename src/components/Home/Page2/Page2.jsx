import React, { useState } from 'react';
import './Page2.css';
import imgDesign from '/images/design.jpg';
import imgProject from '/images/project.jpg';
import imgExecution from '/images/execution.jpg';

const data = [
  {
    title: 'Design',
    image: imgDesign,
    description:
      'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design and architectural drawings to 3D renderings.',
  },
  {
    title: 'Project',
    image: imgProject,
    description:
      'From kickoff through delivery, we define schedules, budgets and teams. We align creative with production logistics, develop project plans and assign owners who ensure flawless execution.',
  },
  {
    title: 'Execution',
    image: imgExecution,
    description:
      'We manage every detail of execution, ensuring that the design vision is preserved from build through installation. Our global network of partners enables us to produce and deliver anywhere in the world.',
  },
];

export default function Page2() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      
      <div id="tabs-section">
        <div className='container'>
          <div className="tabs-left">
          {data.map((item, index) => (
            <h2
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </h2>
          ))}
          <p className="tab-description">{data[activeIndex].description}</p>
        </div>
        <div className="tabs-right">
          <img src={data[activeIndex].image} alt={data[activeIndex].title} />
        </div>
        </div>
      </div>
    </section>
  );
}
