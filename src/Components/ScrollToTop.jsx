import React, { useState, useEffect } from 'react';

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
    const currentPosition = window.pageYOffset;
    const duration = 1000;
    const start = performance.now();

    function animation(currentTime) {
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
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
            transition-all duration-500 ease-out z-50 group cursor-pointer"
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

export default ScrollToTop;