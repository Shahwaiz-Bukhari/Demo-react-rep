import React, { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrolled / maxScroll;
      setScrollPercent(scrollFraction);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerStyle = {
     background: `linear-gradient(to bottom, #0d0d0d ${100 - scrollPercent * 80}%, #2d2d2d)`,
  };

  return (
    <footer id="footer" aria-label="Site Footer" style={footerStyle}>
      <div id="footer-div"></div>
      <h1 className="footer-title">Bricksol</h1>
      <div className="footer-separator" />
      <div id="footer-bottom">
        <p>Copyright © Bricksol Studio</p>
        <p>Lahore, PK</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
