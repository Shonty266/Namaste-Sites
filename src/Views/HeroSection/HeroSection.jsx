import React, { useEffect, useState } from 'react'
import HeroImage from "../../assets/Hero Image.png"
import ContactModal from '../Contact/ContactModal'
import '../../Fonts.css'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <section id="home" className="py-20 relative overflow-hidden flex items-center bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-gray-100 lg:pt-4">
      {/* Background gradient circles - Made responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-16 md:-top-32 -left-16 md:-left-32 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -bottom-16 md:-bottom-32 -right-16 md:-right-32 bg-teal-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <div className={`space-y-6 md:space-y-8 text-center md:text-left ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/20 text-purple-200">
                  Fresh & Innovative Team
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Transforming Ideas
                </span>
                <span className="block mt-2">
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                      Into Digital Reality
                    </span>
                  </span>
                </span>
              </h1>
            </div>
            
    <p className="text-base sm:text-lg md:text-lg max-w-2xl mx-auto md:mx-0 text-gray-400 leading-relaxed">
  We create mobile-friendly websites for roofing businesses — designed to attract more clients and grow your online presence.
</p>


            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center md:justify-start">
  <button 
    onClick={() => setIsContactModalOpen(true)}
    className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-medium overflow-hidden w-full sm:w-auto text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 transition-all duration-300 group-hover:scale-110"></div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_75%)]"></div>
    <span className="relative inline-flex items-center">
      <span>Get Your Website Designed</span>
      <svg 
        className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </span>
  </button>
</div>
          </div>
          
          {/* Right column - Illustration/Image */}
          <div className={`relative mt-8 md:mt-0 ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-gray-700/50">
                <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-white text-center relative w-full h-full">
                    <img 
                      src={HeroImage} 
                      alt="Hero Illustration" 
                      className="transform hover:scale-105 transition-transform duration-300 w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - Made responsive */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-xl backdrop-blur-xl bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-900/20 flex items-center justify-center animate-float">
                <div className="text-2xl sm:text-3xl">⚡</div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-24 sm:w-32 h-16 sm:h-20 rounded-xl backdrop-blur-xl bg-teal-500/10 border border-teal-500/20 shadow-lg shadow-teal-900/20 p-4 animate-float2">
                <div className="text-xs sm:text-sm font-mono text-teal-400 flex items-center justify-center h-full">
                  &lt;innovate/&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
    />
    </section>
  )
}

export default HeroSection