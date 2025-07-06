import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Views/NotFound/NotFound';
import MainContent from './Views/MainContent/MainContent';

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

    // WATI WhatsApp Widget Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?30908';
    script.onload = function () {
      if (window.CreateWhatsappChatWidget) {
        window.CreateWhatsappChatWidget({
          enabled: true,
          chatButtonSetting: {
            backgroundColor: "#00e785",
            ctaText: "Chat with us",
            borderRadius: "25",
            marginLeft: "0",
            marginRight: "20",
            marginBottom: "100",
            ctaIconWATI: false,
            position: "right"
          },
          brandSetting: {
            brandName: "Smart Cube Education",
            brandSubTitle: "undefined",
            brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
            welcomeText: "Hi there!\nHow can I help you?",
            messageText: "{{page_link}}Hello, %0A I have a question about {{page_link}}",
            backgroundColor: "#00e785",
            ctaText: "Chat with us",
            borderRadius: "25",
            autoShow: false,
            phoneNumber: "917621970107",
          }
        });
      }
    };
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#121212]">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;