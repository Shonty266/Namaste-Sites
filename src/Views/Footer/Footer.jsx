import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaRocket, FaCode, FaHeart } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import '../../Fonts.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
      { name: "About", href: "#about" },
    ],
    connect: [
      { icon: <FaLinkedinIn size={18} />, href: "#", label: "LinkedIn" },
      { icon: <FaGithub size={18} />, href: "#", label: "GitHub" },
      { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" },
      { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" }
    ]
  }

  return (
    <>
    
      <footer className="relative bg-[#0f0f0f] text-gray-100 font-clash">
        <div className="mb-12 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

        
        {/* Updated Wave Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[2px] left-0 w-full h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-teal-500/50"></div>
            <div className="absolute inset-0 wave-animation"></div>
          </div>
        </div>
        

        <div className="container mx-auto px-6">
          {/* Simple Differentiator Line */}
         
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section - Updated */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-teal-500/50 rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                  <div className="relative w-12 h-12 bg-[#0f0f0f] rounded-xl flex items-center justify-center border border-white/5">
                    <span className="text-white font-clash-bold text-xl">NS</span>
                  </div>
                </div>
                <div className="text-2xl font-clash-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
                  Namaste Sites
                </div>
                
              </div>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
        
        Your vision, our expertise – building the future of web together.
      </p>
             
            </div>

            {/* Quick Links - Updated */}
            <div>
              <h3 className="text-base font-clash-semibold uppercase tracking-wider mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-[2px] bg-gradient-to-r from-purple-500 to-teal-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section - Updated */}
            <div>
              <h3 className="text-base font-clash-semibold uppercase tracking-wider mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Connect
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:namastesites@outlook.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-base flex items-center gap-3 group"
                >
                  <MdEmail size={20} className="text-purple-400 group-hover:text-teal-400 transition-colors duration-300" />
                  namastesites@outlook.com
                </a>
                <div className="flex gap-4">
                  {links.connect.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 rounded-xl bg-[#1a1a1a]/50 border border-gray-800/50 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Updated */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <p className="text-sm text-gray-400 text-center">
              © {currentYear} Namaste Sites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer