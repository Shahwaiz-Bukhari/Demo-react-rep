import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ onMenuToggle, menuOpen, onCloseMenu }) {
  return (
    <nav>
      <Link to="/" onClick={onCloseMenu} aria-label="Go to home page">
    <img
      src="/logo.png"
      alt="Bricksol logo"
      style={{ cursor: 'pointer' }}
    />
    </Link>
      <div id="nav-part2">
        <h4>
          <Link to="/work" onClick={onCloseMenu}>Work</Link>
        </h4>
        <h4>
          <Link to="/studio" onClick={onCloseMenu}>Studio</Link>
        </h4>
        <h4>
          <Link to="/contact" onClick={onCloseMenu}>Contact</Link>
        </h4>
      </div>
      <h3
        onClick={onMenuToggle}
        className="menuToggle"
        tabIndex={0}
        role="button"
        aria-pressed={menuOpen}
        aria-label="Toggle menu"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onMenuToggle();
          }
        }}
      >
        Menu
      </h3>
    </nav>
  );
}
