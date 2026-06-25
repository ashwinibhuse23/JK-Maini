import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Automotive from './components/Pages/Automotive/Automotive';
import ToolsAndHardware from './components/Pages/ToolsAndHardware/ToolsAndHardware';
import Aerospace from './components/Pages/Aerospace/Aerospace';
import JKMPTLSustainability from './components/Pages/JKMPTLSustainability/JKMPTLSustainability';
import JKMPTLAwards from './components/Pages/JKMPTLAwards/JKMPTLAwards';
import JKMPTLCSR from './components/Pages/JKMPTLCSR/JKMPTLCSR';
import JKMPTLNewsEvents from './components/Pages/JKMPTLNewsEvents/JKMPTLNewsEvents';
import JKMGALSustainability from './components/Pages/JKMGALSustainability/JKMGALSustainability';
import JKMGALCSR from './components/Pages/JKMGALCSR/JKMGALCSR';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'wow.js/css/libs/animate.css';
import WOW from 'wow.js';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Footer from './components/Footer/Footer';
import MagicCursor from './components/MagicCursor/MagicCursor.jsx';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Disable lag smoothing in GSAP to prevent syncing issues
    gsap.ticker.lagSmoothing(0);

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [location.pathname]);

  return null;
}



function GlobalAnimations() {
  const location = useLocation();

  useEffect(() => {
    // Wait for the DOM to render the new route
    const timeout = setTimeout(() => {
      // text-effect
      const textEffects = document.querySelectorAll('.text-effect');
      textEffects.forEach((el) => {
        const splitText = new SplitType(el, { types: 'lines,words,chars' });
        gsap.set(splitText.chars, {
          opacity: 0.3,
          x: -7,
        });
        gsap.to(splitText.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            scrub: 1,
          },
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
        });
      });

      // text-anime-style-1
      const style1 = document.querySelectorAll('.text-anime-style-1');
      style1.forEach((el) => {
        const splitText = new SplitType(el, { types: 'chars, words' });
        gsap.from(splitText.words, {
          duration: 1,
          delay: 0.5,
          x: 20,
          autoAlpha: 0,
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // text-anime-style-2
      const style2 = document.querySelectorAll('.text-anime-style-2');
      style2.forEach((el) => {
        const splitText = new SplitType(el, { types: 'chars, words' });
        gsap.from(splitText.chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // text-anime-style-3
      const style3 = document.querySelectorAll('.text-anime-style-3');
      style3.forEach((el) => {
        const splitText = new SplitType(el, { types: 'lines,words,chars' });
        gsap.set(el, { perspective: 400 });
        gsap.set(splitText.chars, {
          opacity: 0,
          x: 50,
        });
        gsap.to(splitText.chars, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          x: 0,
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.02,
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]);

  return null;
}

var wow = new WOW(
  {
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <MagicCursor />
      <GlobalAnimations />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/tools-and-hardware" element={<ToolsAndHardware />} />
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path='/jkmptl-sustainability' element={<JKMPTLSustainability />} />
        <Route path='/jkmptl-awards' element={<JKMPTLAwards />} />
        <Route path='/jkmptl-csr' element={<JKMPTLCSR />} />
        <Route path='/jkmptl-news-events' element={<JKMPTLNewsEvents />} />
        <Route path='/jkmgal-sustainability' element={<JKMGALSustainability />} />
        <Route path='/jkmgal-csr' element={<JKMGALCSR />} />
      </Routes>
      <div className="mt-4 mb-4">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
