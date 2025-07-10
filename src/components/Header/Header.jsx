import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/" aria-label="Go to home page">
        <img
          src={logo}
          alt="Bricksol logo"
          className="logo-img"
          style={{ cursor: 'pointer' }}
        />
      </NavLink>
      <div id="nav-part2">
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/studio"
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Studio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </div>
      <FullScreenMenu />
    </nav>
  );
}
