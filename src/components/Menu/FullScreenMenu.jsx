import React, { useState } from 'react';

const menuItems = [
  { label: 'Work', href: '/work' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

export default function FullScreenMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div id="menu" className={open ? 'clicked' : ''} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`full-screen-menu ${open ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul>
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="menu-footer">
          <p>Bricksol Studio © {new Date().getFullYear()}</p>
        </footer>
      </div>

      <style jsx="true">{`
        #menu {
          position: fixed;
          top: 30px;
          right: 30px;
          width: 40px;
          height: 30px;
          cursor: pointer;
          z-index: 10001;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        #menu span {
          height: 4px;
          width: 100%;
          background: white;
          border-radius: 4px;
          transition: 0.4s;
        }

        #menu.clicked span:nth-child(1) {
          transform: translateY(13px) rotate(45deg);
        }

        #menu.clicked span:nth-child(2) {
          opacity: 0;
        }

        #menu.clicked span:nth-child(3) {
          transform: translateY(-13px) rotate(-45deg);
        }

        @media (min-width: 600px) {
          #menu {
            display: none;
          }
        }

        .full-screen-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transform: translateY(-100%);
          transition: transform 0.5s ease-in-out;
          z-index: 10000;
          pointer-events: none;
        }

        .full-screen-menu.open {
          transform: translateY(0);
          pointer-events: auto;
        }

        .menu-nav {
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .menu-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }

        .menu-nav li {
          margin: 2rem 0;
        }

        .menu-nav a {
          font-size: 3rem;
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.05em;
          position: relative;
          transition: color 0.3s ease;
        }

        .menu-nav a::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #00bfff;
          transition: width 0.3s ease;
        }

        .menu-nav a:hover {
          color: #00bfff;
        }

        .menu-nav a:hover::after {
          width: 100%;
        }

        .menu-footer {
          position: absolute;
          bottom: 30px;
          font-size: 1rem;
          opacity: 0.7;
          text-align: center;
        }

        @media (max-width: 600px) {
          #menu {
            width: 32px;
            height: 24px;
            top: 22px;
            right: 20px;
          }

          .menu-nav a {
            font-size: 2.4rem;
          }

          .menu-footer {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
