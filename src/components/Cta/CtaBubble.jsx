import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './CtaBubble.css';

export default function WaterDropCTA() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const bubbleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      gsap.to(bubbleRef.current, {
        width: 300,
        height: 380,
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(15px)',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(bubbleRef.current, {
        width: 60,
        height: 60,
        borderRadius: '50% 50% 60% 50% / 50% 50% 70% 50%',
        padding: 0,
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [open]);

   if (location.pathname === '/contact') return null;

  return (
    <div className="cta-container">
      <div
        className={`cta-bubble ${open ? 'open' : ''}`}
        ref={bubbleRef}
        onClick={() => setOpen(!open)}
      >
        {!open && (
          <div className="cta-icon">
            <img src="/images/finger.png" alt="CTA Icon" />
          </div>
        )}
        {open && (
          <div className="cta-panel" ref={panelRef}>
            <button className="cta-close" onClick={() => setOpen(false)}>
              ✖
            </button>
            <h3>Let's Talk!</h3>
            <form className="chat-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="How can we help?" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
