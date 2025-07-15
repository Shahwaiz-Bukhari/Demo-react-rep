import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Studio from './components/Studio/Studio';
import NotFound from './components/Error/NotFound';
import CtaBubble from './components/Cta/CtaBubble';
import './Index.css';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import {
  setupLoader,
  handleElemMouseEnter,
  handleElemMouseLeave,
  // setupLocomotiveScroll,
} from './utils/logics';

export default function App() {
  const scrollRef = useRef(null);
  const fixedImageRef = useRef(null);
  const [fixedBg, setFixedBg] = useState('');
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    return setupLoader(setLoaderVisible);
  }, []);

  // useEffect(() => {
  //   const cleanup = setupLocomotiveScroll(loaderVisible);
  //   return cleanup;
  // }, [loaderVisible]);

  return (
    <Router>
      {loaderVisible && <Loader />}
      <div
        id="fixed-image"
        ref={fixedImageRef}
        style={{ backgroundImage: fixedBg ? `url(${fixedBg})` : 'none' }}
      ></div>
      <Header />
      <main id="main" ref={scrollRef} data-scroll-container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onHover={handleElemMouseEnter}
                onLeave={handleElemMouseLeave}
              />
            }
          />
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CtaBubble />
      </main>
      <Footer />
    </Router>
  );
}




