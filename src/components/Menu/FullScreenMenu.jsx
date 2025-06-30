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

      <div className={`menu-overlay ${open ? 'show' : ''}`}></div>

      <div className={`full-screen-menu ${open ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul>
            {menuItems.map(({ label, href }, i) => (
              <li key={label} style={{ animationDelay: `${i * 0.15}s` }}>
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
          position: absolute;
          top: 30px;
          right: 30px;
          width: 40px;
          height: 30px;
          z-index: 10002;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        #menu span {
          height: 3px;
          width: 100%;
          background: #ffffffdd;
          border-radius: 3px;
          transition: all 0.4s ease;
        }

        #menu.clicked span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        #menu.clicked span:nth-child(2) {
          opacity: 0;
        }

        #menu.clicked span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(20, 20, 20, 0.7);
          backdrop-filter: blur(12px);
          z-index: 10000;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .menu-overlay.show {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .full-screen-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 10001;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
          font-family: 'Poppins', sans-serif;
        }

        .full-screen-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .menu-nav {
          flex-grow: 0;
          display: flex;
          align-items: center;
          background: transparent;
        }

        .menu-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }

        .menu-nav li {
          margin: 2rem 0;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.5s forwards ease;
        }

        .menu-nav a {
          font-size: 3rem;
          font-weight: 500;
          color: white;
          text-decoration: none;
          letter-spacing: 0.1em;
          position: relative;
          transition: color 0.4s ease;
        }

        .menu-nav a::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background-color: #ffd6a5;
          transition: width 0.4s ease;
        }

        .menu-nav a:hover {
          color: #ffd6a5;
        }

        .menu-nav a:hover::after {
          width: 100%;
        }

        .menu-footer {
          font-size: 1rem;
          opacity: 0.5;
          margin-bottom: 30px;
          text-align: center;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
          @media (min-width: 601px){
          #menu {
          display: none;
          }
          }

        @media (max-width: 600px) {
          #menu {
            top: 20px;
            right: 20px;
            width: 25px;
            height: 20px;
          }

          .menu-nav a {
            font-size: 2.2rem;
          }

          .menu-footer {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
