import React from 'react';

const menuItems = [
  { label: 'Work', href: '#' },
  { label: 'Studio', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function FullScreenMenu({ open, onClose }) {
  return (
    <div
      className={`full-screen-menu${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      tabIndex={-1}
    >
      <button
        className="menu-close-btn"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>
      <nav className="menu-nav" aria-label="Main navigation">
        <ul>
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={onClose} tabIndex={open ? 0 : -1}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="menu-footer">
        <p>Bricksol Studio</p>
      </footer>

      <style jsx="true">{`
        .full-screen-menu {
          position: fixed;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(15px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10000;
          transition: top 0.5s cubic-bezier(0.11, 0, 0.5, 0);
          pointer-events: none;
        }
        .full-screen-menu.open {
          top: 0;
          pointer-events: auto;
        }
        .menu-close-btn {
          position: absolute;
          top: 16px;
          right: 24px;
          background: transparent;
          border: none;
          font-size: 3rem;
          color: white;
          cursor: pointer;
          line-height: 1;
          transition: color 0.3s ease;
          user-select: none;
        }
        .menu-close-btn:hover,
        .menu-close-btn:focus {
          color: #0737e3;
          outline: none;
        }
        .menu-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        .menu-nav li {
          margin: 1.5rem 0;
        }
        .menu-nav a {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.08em;
          transition: color 0.1s linear, transform 0.1s ease;
          display: inline-block;
          padding: 0.2em 0.5em;
          border-radius: 8px;
        }
        .menu-nav a:hover,
        .menu-nav a:focus {
          color: #0737e3;
          outline: none;
          transform: scale(1.05);
          background-color: rgba(46, 137, 255, 0.15);
        }
        .menu-footer {
          position: absolute;
          bottom: 16px;
          font-size: 1rem;
          opacity: 0.7;
          user-select: none;
        }

        @media (max-width: 480px) {
          .menu-close-btn {
            font-size: 2.4rem;
            top: 12px;
            right: 16px;
          }
          .menu-nav a {
            font-size: clamp(2rem, 6vw, 3rem);
          }
        }
      `}</style>
    </div>
  );
}
