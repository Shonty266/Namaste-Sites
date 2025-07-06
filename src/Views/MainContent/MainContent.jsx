import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import TechStack from '../TechStack/TechStack';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Divider from '../../Components/Divider';
import ScrollToTop from '../../Components/ScrollToTop';

const MainContent = () => (
  <>
    <Navbar />
    <section id="home" className="scroll-mt-20">
      <HeroSection />
    </section>
    <Divider />
    <section id="services" className="scroll-mt-20">
      <Services />
    </section>
    <Divider />
    <section id="techstack" className="scroll-mt-20">
      <TechStack />
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
  </>
);

export default MainContent;