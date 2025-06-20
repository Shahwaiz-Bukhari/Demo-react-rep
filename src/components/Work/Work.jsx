import React from 'react';
import './Work.css';
// import imgProj from '/images/proj1.jpg';

function Work() {
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A modern web application with interactive features.',
      img: '/images/proj1.jpg',
      alt: 'Screenshot of Project Alpha web application interface'
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Mobile app with intuitive UX and performance optimizations.',
      img: '/images/proj2.jpg',
      alt: 'Screenshot of Project Beta mobile app UI'
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Enterprise-grade scalable architecture and integrations.',
      img: '/images/proj3.jpg',
      alt: 'Diagram depicting Project Gamma system architecture'
    },
  ];

  return (
    <div className="workpage">
      <header className="work-header">
        <h1 className="work-title">Our Work</h1>
        <p className="work-subtitle">
          Discover some of our latest projects showcasing modern design, technology, and innovation.
        </p>
      </header>

      <div className="projects-work"  aria-label="Portfolio Projects">
        {projects.map(({ id, title, description, img, alt }) => (
          <article key={id} className="project-card" tabIndex={0}>
            <img
              src={img}
              alt={alt}
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h2 className="project-title">{title}</h2>
              <p className="project-description">{description}</p>
              <button className="btn-primary" aria-label={`Learn more about ${title}`}>
                Learn More
                <span className="material-icons btn-icon">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Work;
