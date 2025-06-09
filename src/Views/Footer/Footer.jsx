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
    <footer className="relative bg-[#0f0f0f] text-gray-100 font-clash overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-16 md:-top-32 -left-16 md:-left-32 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -bottom-16 md:-bottom-32 -right-16 md:-right-32 bg-teal-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Rest of your footer content */}
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 cursor-pointer" >
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
                  <p className="mt-4 text-sm font-['ClashDisplay-Regular'] text-gray-400 leading-relaxed max-w-sm">
                    Your vision, our expertise – building the future of web together.
                  </p>
                </div>
              </div>
              
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
          <div className="mt-16 py-8 border-t border-gray-800/50">
            <p className="text-sm text-gray-400 text-center">
              © {currentYear} Namaste Sites. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer