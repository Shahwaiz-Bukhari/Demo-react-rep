import React from 'react';
import './Studio.css';


function Studio() {
  return (
    <div className="studio-page container">
      <header className="studio-header">
        <h1 className="studio-title">Our Studio</h1>
        <p className="studio-subtitle">
          Meet the creative minds behind our projects and learn about our mission.
        </p>
      </header>

      <main className="studio-content" role="main" aria-label="Studio Information">
        <section className="about-section">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a team of passionate designers and developers dedicated to creating innovative solutions that enhance user experiences. Our studio thrives on collaboration, creativity, and a commitment to excellence.
          </p>
        </section>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <section className="team-section">
          <h2 className="team-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member" tabIndex={0}>
              <img
                src="/images/basitbhai.jpeg"
                alt="Abdul Basit, CEO"
                className="team-member-image"
                loading="lazy"
              />
              <h3 className="team-member-name">Abdul Basit</h3>
              <p className="team-member-role">CEO</p>
            </div>
            <div className="team-member" tabIndex={0}>
              <img
                src="/images/shafiqbhai.jpeg"
                alt="Shafique, Lead Designer"
                className="team-member-image"
                loading="lazy"
              />
              <h3 className="team-member-name">Muhammad Shafique</h3>
              <p className="team-member-role">Lead Designer</p>
            </div>
            <div className="team-member" tabIndex={0}>
              <img
                src="/images/asfand.jpeg"
                alt="Asfand Yar, Software Engineer"
                className="team-member-image"
                loading="lazy"
              />
              <h3 className="team-member-name">Muhammad Asfand Yar</h3>
              <p className="team-member-role">Software Engineer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Studio;
