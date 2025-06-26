import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullScreenMenu from '../Menu/FullScreenMenu';
import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/"  aria-label="Go to home page">
    <img
      src={logo}
      alt="Bricksol logo"
      style={{ cursor: 'pointer' }}
    />
    </Link>
      <div id="nav-part2">
        <h4>
          <Link to="/work" >Work</Link>
        </h4>
        <h4>
          <Link to="/studio" >Studio</Link>
        </h4>
        <h4>
          <Link to="/contact" >Contact</Link>
        </h4>
      </div>
      <FullScreenMenu />
    </nav>
  );
}
