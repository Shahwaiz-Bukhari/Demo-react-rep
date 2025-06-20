import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FullScreenMenu from './components/Menu/FullScreenMenu';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Studio from './components/Studio/Studio';
import NotFound from './components/Error/NotFound';
import './index.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {setupLoader,toggleBodyScroll,handleElemMouseEnter,handleElemMouseLeave,
  // setupLocomotiveScroll, // 
} from './utils/logics';

export default function App() {
  const scrollRef = useRef(null);
  const fixedImageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedBg, setFixedBg] = useState('');
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    return setupLoader(setLoaderVisible);
  }, []);

  useEffect(() => {
    toggleBodyScroll(menuOpen);
  }, [menuOpen]);

  // useEffect(() => {
  //   const cleanup = setupLocomotiveScroll(loaderVisible);
  //   return cleanup;
  // }, [loaderVisible]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router basename="/Demo-react-rep">
      {loaderVisible && <Loader />}
      <div
        id="fixed-image"
        ref={fixedImageRef}
        style={{ backgroundImage: fixedBg ? `url(${fixedBg})` : 'none' }}
      ></div>
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}
              onCloseMenu={() => setMenuOpen(false)} />
      <main id="main" ref={scrollRef} data-scroll-container>
        <Routes>
          <Route path="/" element={
            <Home
              onHover={handleElemMouseEnter}
              onLeave={handleElemMouseLeave}
            />
          } />
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FullScreenMenu open={menuOpen} onClose={closeMenu} />
      <Footer />
    </Router>
  );
}
