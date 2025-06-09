import React, { useState, useEffect } from 'react'
import ContactModal from '../Contact/ContactModal'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - 80;
      const duration = 800;
      let start = null;

      const animation = (currentTime) => {
        if (!start) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smooth movement
        const easeInOutCubic = t => t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      if (isMenuOpen) closeMenu();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={closeMenu}
        />
      )}
      
      <nav className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg shadow-purple-900/10 py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.reload()}>
                  <div className="w-10 h-10 relative group animate-pulse-slow flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative w-full h-full bg-[#0f0f0f] rounded-xl flex items-center justify-center border border-white/10 text-white">
                      <span className="font-['ClashDisplay-SemiBold'] text-lg">N S</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-['ClashDisplay-SemiBold'] bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                      Namaste Sites
                    </span>
                    <div className="flex items-center gap-2 text-xs mt-0.5 font-['ClashDisplay-SemiBold']">
                      <span className="font-clash-medium text-purple-400">Think</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600/50"></span>
                      <span className="text-teal-400 font-medium hover:scale-110 transition-transform">Code</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600/50"></span>
                      <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent font-medium hover:scale-110 transition-transform">Deliver</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop menu - Updated */}
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'Services', 'Portfolio', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 relative group cursor-pointer"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-teal-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              ))}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="ml-4 px-4 py-2 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 transition-transform duration-300 group-hover:scale-105"></div>
                                  <span className="relative text-white font-medium">Request a Free Quote</span>

              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:text-white transition-colors duration-200 "
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-[#0f0f0f]/95 backdrop-blur-lg border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 px-4 py-6 space-y-2">
              {['Home', 'Services', 'Portfolio', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true)
                    closeMenu() // Close mobile menu when opening modal
                  }}
                  className="w-full px-4 py-3 relative group overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 transition-transform duration-300 group-hover:scale-105"></div>
                  <span className="relative text-white font-medium">Request a Free Quote</span>

                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}

export default Navbar
