import React, { useState, useEffect } from 'react';
import Navbar from './Views/Navbar/Navbar';
import HeroSection from './Views/HeroSection/HeroSection';
import Services from './Views/Services/Services';
import Portfolio from './Views/Portfolio/Portfolio';
import About from './Views/About/About';
import Contact from './Views/Contact/ContactModal';
import Footer from './Views/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';

const Divider = () => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-700"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="bg-[#121212] px-3">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-teal-500"></div>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Get current scroll position
    const currentPosition = window.pageYOffset;
    // Duration of scroll animation in milliseconds
    const duration = 1000;
    // Start time of animation
    const start = performance.now();

    function animation(currentTime) {
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smooth deceleration
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      
      window.scrollTo(0, currentPosition * (1 - easeOut(progress)));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-xl bg-[#1e1e2e]/90 backdrop-blur-sm border border-gray-800 
            text-gray-400 hover:text-purple-400 hover:border-purple-500/30 
            shadow-lg hover:shadow-purple-500/10
            transform hover:-translate-y-1
            transition-all duration-500 ease-out z-50 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

const App = () => {
  useEffect(() => {
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (!element) return;

      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - 80; // 80px offset for navbar
      const duration = 800; // Duration in milliseconds
      let start = null;

      const animation = (currentTime) => {
        if (!start) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function
        const easeInOutCubic = t => t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Add click event listeners to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(e.currentTarget.getAttribute('href'));
      });
    });

    // Clean up
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="bg-[#121212]">
      <Navbar />
      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>
      <Divider />
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <Divider />
      <section id="portfolio" className="scroll-mt-20">
        <Portfolio />
      </section>
      <Divider />
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      
      <Footer />
      <ScrollToTop />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: '',
          style: {
            background: '#1e1e2e',
            color: '#fff',
            borderRadius: '8px',
            border: '1px solid #374151',
          },
        }}
      />
    </div>
  );
};

export default App;